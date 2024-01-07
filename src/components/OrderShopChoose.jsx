import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {SimpleHeader} from "./SimpleHeader";


function OrderShopChoose() {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/lapsins_api/drogasAPI/getShops.php');
                setShops(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <SimpleHeader navigatePath={-1}/>
            <section
                className="bg-gray-50 dark:bg-gray-900 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: 'url("/images/landscape9.jpg")' }}
            >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900  dark:text-white mb-5">
                        Choose a Shop
                    </h1>
                    {shops.map((shop) => (
                        <Link
                            to={`/orders/shop?id=${shop.shop_id}`}
                            key={shop.shop_id}
                            className="w-full sm:max-w-md text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                        >
                            {shop.shop_name}
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

export default OrderShopChoose;
