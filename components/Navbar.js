import { useState } from "react";
import React from 'react'
import DatePicker from 'react-date-picker';
import "react-datepicker/dist/react-datepicker.css";
import { FaBed, FaPlane, FaCarSide, FaGalacticRepublic, FaTaxi, FaLocationArrow } from "react-icons/fa";



function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const [startDate, setStartDate] = useState(new Date());

    return (
        <>

            <nav className="bg-blue-800 border-gray-200 dark:bg-gray-900  ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">Booking.com</span>
                    </a>

                    <div className="flex items-center">
                        <div>
                            <button
                                id="dropdownDefaultButton"
                                data-dropdown-toggle="dropdown"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-none text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button"
                            >
                                Türkçe <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center ml-2">
                            <button type="button" className="text-blue bg-gray-50 hover:bg-gray-100 rounded-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kayıt Ol</button>
                        </div>
                        <div className="flex items-center ml-2">
                        <button type="button" className="text-blue bg-gray-50 hover:bg-gray-100 rounded-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Giriş Yap</button>
                        </div>

                    </div>
                </div>

            </nav>



        </>

    )
}

export default Navbar