import React from 'react';
import genius from '../img/genius.png';
import Image from 'next/image';
import mainlogin from '../img/mainlogin.png'

function MainLogin() {
  return (
    <div className="max-w-screen-xl px-2 py-5 mx-auto">
      <div className="mt-3">
        <a href="#" className="flex bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="md:flex md:w-100">
            <div>
              <Image src={genius} width={450} height={350} />
            </div>
            <div className="flex flex-col leading-normal mt-8 p-3">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white p-1">Anında indirimlerden faydalanın</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 p-1">Tasarruf etmek için Booking.com hesabınıza giriş yapıp mavi renkli Genius logosunu bulmanız yeterli</p>
              <div>
                <button type="button" className="text-white bg-blue-800 hover:bg-blue-700 rounded-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mt-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40 h-10">Giriş Yap</button>
                <button type="button" className="text-blue hover:bg-blue-100 rounded-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mt-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40 h-10 ml-2">Kaydol</button>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="mt-3">
        <a href="#" className="flex bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="md:flex md:w-full">
            <div className='flex flex-row'>
            <div className="flex flex-col leading-normal mt-8 p-3">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white p-1">Sıradaki seyahatiniz için</h5>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white p-1 border-b-4 w-20">evler</h5>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white p-1">bulun</h5>
              <div>
              <Image src={mainlogin} width={200} height={200}></Image>
            </div> 
               
              <div>
                <button type="button" className="text-white bg-blue-800 hover:bg-blue-700 rounded-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mt-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40 h-10">Evleri Keşfet</button>
              </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainLogin;
