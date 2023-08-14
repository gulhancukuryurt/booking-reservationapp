import React from 'react'

function MailList() {
  return (
    <div>
        <div className='flex flex-col text-center justify-center align-top bg-sky-950 p-5'>
        <span className='text-white text-2xl mt-3'>Zamandan ve paradan tasarruf edin!</span>
        <span className='text-white'>Kaydolursanız en iyi fırsatları size göndereceğiz</span>
        <div className='flex flex-row items-center justify-center align-top mt-3'>
            <input type='text' placeholder='E-posta adresiniz:' className=' h-9 w-96 p-1'></input>
            <button className='bg-blue-500 rounded p-2 ml-2 w-48 text-white'>Üye ol</button>
        </div>
        </div>
        <div className='bg-blue-800 flex justify-center align-top'>
            <button className=' text-white text-sm border-2 p-1 m-3 hover:bg-blue-900'>Tesisinizi kaydedin</button>
        </div>
        <div className='bg-blue-800 flex flex-row justify-center align-top mt-1'>
            <button className=' text-white text-sm p-1 m-3 font-bold hover:bg-blue-900 '>Mobil sürüm</button>
            <button className=' text-white text-sm p-1 m-3 font-bold hover:bg-blue-900'>Hesabınız</button>
            <button className=' text-white text-sm p-1 m-3 font-bold hover:bg-blue-900'>Rezervasyon değişikliklerini online yapın</button>
            <button className=' text-white text-sm p-1 m-3 font-bold hover:bg-blue-900'>Müşteri Hizmetleri yardımı</button>
            <button className=' text-white text-sm p-1 m-3 font-bold hover:bg-blue-900'>İştirak olun</button>
            <button className=' text-white text-sm p-1 m-3 font-bold hover:bg-blue-900'>Booking.com Business</button>




        </div>
    </div>
  )
}

export default MailList