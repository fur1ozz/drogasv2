import {SimpleHeader} from "./SimpleHeader";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

function OrderDetails() {
    const location = useLocation();
    const orderId = new URLSearchParams(location.search).get('id');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8080/lapsins_api/drogasAPI/getOrderItems.php', {
                    order_id: orderId,
                });
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        if (orderId) {
            fetchData();
        }
    }, [orderId]);

    const handleSubmitPDF = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/lapsins_api/drogasAPI/generatePDF.php', {
                order_id: orderId,
            }, {
                responseType: 'blob',
            });

            const blob = new Blob([response.data], { type: 'application/pdf' });

            const link = document.createElement('a');

            link.href = window.URL.createObjectURL(blob);

            link.download = `order_report_${orderId}.pdf`;

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <>
            <SimpleHeader navigatePath={-1}/>
            <button
                className="absolute top-14 right-4 p-2 text-primary-700 focus:outline-none font-semibold text-lg"
                onClick={handleSubmitPDF}
            >
                PDF
            </button>
            <section
                className="bg-gray-50 dark:bg-gray-900 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: 'url("/images/landscape9.jpg")' }}
            >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
                    <h1 className="text-5xl font-bold leading-tight tracking-tight text-primary-700 mb-5 mt-10">
                        Order No. - {orderId}: Products
                    </h1>
                    <div className="w-full sm:max-w-3xl mb-10">
                        {products.map((product) => (
                            <div key={product.id} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2">
                                <div className="flex justify-between items-center mb-2 text-gray-500">
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                        {product.cat}
                                    </span>
                                    <span className="text-sm">Quantity - {product.quantity}</span>
                                </div>
                                <h2 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h2>
                                <p className="mb-3 font-light text-gray-500 dark:text-gray-400">{product.desc}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4 font-medium dark:text-white">{product.number}</div>
                                    <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                        Shelf Item {product.orderItemId}
                                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default OrderDetails;