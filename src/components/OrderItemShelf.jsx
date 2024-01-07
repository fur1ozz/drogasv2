import {SimpleHeader} from "./SimpleHeader";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ConditionalAccessComponent} from "../utils/UserAccesTest";
import React, {useState} from "react";
import axios from "axios";
import {handleInputChange} from "../utils/TwoWayBinding";

function OrderStatusShelf() {
    const location = useLocation();
    const navigate = useNavigate();
    const orderItemId = new URLSearchParams(location.search).get('item');

    const [shelf, setShelf] = useState({
        shelf: '',
    });
    const handleChange = handleInputChange(shelf, setShelf);

    const handleSubmitReceive = async (e) => {
        e.preventDefault();
        if (!shelf.shelf) {
            console.log({ message: 'Write shelf location' });
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/lapsins_api/drogasAPI/recieveItem.php', {
                orderItemId: orderItemId,
                shelf: shelf.shelf,
            });

            console.log('Placed in shelf', response.data);
            setShelf({
                shelf: '',
            });
            navigate(-1);
        } catch (error) {
            console.error('Update failed', error.response ? error.response.data : error.message);
        }
    }

    return(
        <ConditionalAccessComponent>
            <SimpleHeader navigatePath={-1}/>
            <section
                className="bg-gray-50 dark:bg-gray-900 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: 'url("/images/landscape9.jpg")' }}
            >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Write the location on shelf
                            </h1>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="shelf" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                       Shelf name
                                    </label>
                                    <input
                                        type="text"
                                        id="shelf"
                                        name="shelf"
                                        value={shelf.shelf}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="A4f"
                                        required=""
                                    />
                                </div>
                                <button
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={handleSubmitReceive}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ConditionalAccessComponent>
    );
}
export default OrderStatusShelf;