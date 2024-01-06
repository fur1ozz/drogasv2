import React, { useState, useEffect } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useDarkMode} from "../utils/HeaderUtils";
import axios from 'axios';


function OrderChose() {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const navigate = useNavigate();
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
        <>
            <button
                className="absolute top-4 left-4 p-2 text-primary-700 focus:outline-none"
                onClick={() => navigate(-1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
            </button>
            <button
                className="absolute top-4 right-4 p-2 text-primary-700 focus:outline-none"
                onClick={toggleDarkMode}
            >
                {isDarkMode === "dark" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" fill="currentColor" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                )}
            </button>
            <section
                className="bg-gray-50 dark:bg-gray-900 bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/landscape2.jpg")' }}
            >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
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
        </>
    );
}

export default OrderChose;