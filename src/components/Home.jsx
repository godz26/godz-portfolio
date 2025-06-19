import React from 'react'
import picture from "../assets/eyy.jpg";

export const Home = () => {
  return (
    <div>
        <div id="home" className="w-full h-full flex items-center flex-col lg:flex-row relative py-[150px] dark:bg-[#202225]">
            <div className='lg:ml-[150px]'>
                <img src={picture} alt="picture" className='rounded-[50%] w-[450px] h-[450px] mb-[50px]' />
            </div>
            <div className='lg:ml-[100px] w-[400px] dark:text-white mb-[50px] '>
                <p className='text-[25px]'>Hi, I'm</p>
                <h1 className='text-[50px] font-bold'>Godfrey Estardo,</h1>
                <p className='text-[20px] text-justify'>A <strong className='text-green-500 text-[23px]'>{'<Computer Engineering />'}</strong> Graduate at University of Cebu Lapu-Lapu and Mandaue. <strong className='text-green-500 text-[23px]'>{'<!-- Class 2025 -->'}</strong></p>
            </div>
        </div>
    </div>
  )
}
