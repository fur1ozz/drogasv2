import React, { useState, useEffect } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {SimpleHeader} from "./SimpleHeader";
import {ConditionalAccessComponent} from "../utils/UserAccesTest";


function OrderChose() {
    const location = useLocation();
    const orderId = new URLSearchParams(location.search).get('id');
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8080/lapsins_api/drogasAPI/getShopOrders.php', {
                    shop_id: orderId,
                });
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        if (orderId) {
            fetchData();
        }
    }, [orderId]);

    return (
        <ConditionalAccessComponent>
            <SimpleHeader navigatePath={-1}/>
            <section
                className="bg-gray-50 dark:bg-gray-900 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: 'url("/images/landscape9.jpg")' }}
            >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900  dark:text-white mb-5">
                        Choose an Order
                    </h1>
                    {orders.map((order) => (
                        <Link
                            to={`/order-details?id=${order.order_id}`}
                            key={order.order_id}
                            className="w-full sm:max-w-md text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                        >
                            Order ID: {order.order_id} - Total Amount: ${order.total_amount}
                        </Link>
                    ))}
                </div>
            </section>
        </ConditionalAccessComponent>
    );
}

export default OrderChose;