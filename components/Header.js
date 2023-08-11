import React from 'react'
import { useState } from "react";
import { FaBed, FaPlane, FaCarSide, FaGalacticRepublic, FaTaxi, FaLocationArrow } from "react-icons/fa";
import DatePicker from 'react-date-picker';
import "react-datepicker/dist/react-datepicker.css";

function Header() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <nav className="bg-blue-800 dark:bg-gray-700">
            <div className="max-w-screen-xl px-2 py-5 mx-auto ">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 text-sm lex flex-wrap mx-auto max-w-screen-xl p-4">
                        <li>
                            <a href="#" className="flex flex-row text-base items-center text-white dark:text-white hover:bg-blue-700 p-2 hover:rounded-full" aria-current="page">
                                <FaBed className="text-xl mr-1" />Konaklama
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-row text-white text-base items-center dark:text-white hover:bg-blue-700 p-2 rounded hover:rounded-full">
                                <FaPlane className="text-xl mr-1" />Uçak biletleri
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-row text-white text-base items-center text-white dark:text-white hover:bg-blue-700 p-2 hover:rounded-full">
                                <FaCarSide className="text-xl mr-1" />Araba kiralama
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-row text-white text-base items-center text-white dark:text-white hover:bg-blue-700 p-2 hover:rounded-full">
                                <FaGalacticRepublic className="text-xl mr-1" />Turistik noktalar
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex flex-row text-white text-base items-center text-white dark:text-white hover:bg-blue-700 p-2 hover:rounded-full">
                                <FaTaxi className="text-xl mr-1" />Havaalanı taksileri
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="lex flex-wrap justify-between items-center mx-auto max-w-screen-xl pb-1 -mb-5">
                    <h3 className="text-white text-5xl font-bold mt-5">Sıradaki konaklamanızı bulun</h3>
                    <p className="text-white text-xl mt-3">Oteller, evler ve çok daha fazlasındaki fırsatları arayın...</p>
                    <div className="bg-amber-400 relative top-20 rounded">
                        <div className="flex flex-row items-center p-2 -mt-5">
                            <input type="text" placeholder="Nereye gidiyorsunuz?" className="focus:outline-none flex-grow h-10" />
                            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="focus:outline-none ml-2" /> */}
                            <button type="button" className="text-white bg-blue-800 hover:bg-blue-700 rounded-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-80 h-10 ml-2">Ara</button>
                        </div>
                        <div class="flex items-center bg-white p-2 mb-5">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-checkbox" class="ml-2 text-sm font-medium text-black dark:text-gray-300">İş için seyahat ediyorum</label>
                    </div>
                    </div>


                </div>

            </div>
           
        </nav>
    )
}

export default Header