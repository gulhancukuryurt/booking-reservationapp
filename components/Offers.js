import React from 'react'
import offer1 from '../img/fırsat1.jpeg'
import offer2 from '../img/fırsat2.jpeg'
import Image from 'next/image'

function Offers() {
  return (
    <div className="max-w-screen-xl px-2 py-5 mx-auto">
      <h1 className='text-black mt-20 pt-5 text-4xl font-bold'>Fırsatlar</h1>
      <p className='mt-1'>Size özel promosyonlar, indirimler ve fırsatlar</p>
      <div className='flex flex-col md:flex-row mt-3'>
        <div className='flex-grow'>
          <div>
            <Image></Image>
          </div>
          <a href="#" className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full">
            <div className="flex flex-col leading-normal mt-8 p-3">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white p-1">Şimdiye kadarki en uzun tatilinize çıkın</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 p-1">Uzun süreli konaklama sunan tesisleri arayın ve daha düşük aylık fiyatların keyfini çıkarın.</p>
              <button type="button" className="text-white bg-blue-800 hover:bg-blue-700 rounded-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mt-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40 h-10">Bir konaklama bul</button>
            </div>
            <Image className="object-cover w-full h-96 md:h-auto md:w-48" src={offer1} alt="" />
          </a>
        </div>

        <div className='flex-grow'>
          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full">
            <div className="relative">
              <Image className="object-cover w-full md:h-auto md:w-100" src={offer2} alt="" />
              <div className='absolute inset-0 flex flex-col p-4 bg-opacity-70 w-80 mt-5'>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">Hayalinizdeki harika kısa tatil</h5>
                <p className="mb-3 font-normal text-white dark:text-white">Dinlendiren tatillerden macera dolu gezilere kadar, konaklamalarda en az %15 tasarruf</p>
                <button type="button" className="text-white bg-blue-800 hover:bg-blue-700 rounded-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40 h-10">Tatil Fırsatları bul</button>
              </div>
            </div>
          </a>
        </div>
      </div>
</div>


   
  )
}

export default Offers