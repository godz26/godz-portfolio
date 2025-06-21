import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import picture from "../assets/eyy.jpg";
import cover from "../assets/cover.jpg";
import { IoIosSearch } from "react-icons/io";

export const About = () => {
  return (
    <div>
      <div id='about' className='w-full h-full flex flex-col relative'>
          <div className='w-full h-[30px] flex items-center rounded-t-[9px] bg-neutral-200'>
            <p className='h-[20px] w-[20px] rounded-[50%] ml-[10px] bg-red-500'></p>
            <p className='h-[20px] w-[20px] rounded-[50%] ml-[5px] bg-yellow-500'></p>
            <p className='h-[20px] w-[20px] rounded-[50%] ml-[5px] bg-green-500'></p>
            <div className='w-[150px] h-full flex items-center ml-[10px] rounded-t-[10px] bg-neutral-100'>
              <FaFacebook className='fill-blue-700 size-[20px] ml-[10px]' />
              <strong className='ml-[5px]'>Facebook</strong>
            </div>
          </div>
          <div className='w-full h-[40px] flex items-center bg-neutral-100'>
            <div className='flex items-center gap-[7px]'>
              <IoMdArrowBack className='size-[25px]'/>
              <IoMdArrowForward className='size-[25px]'/>
              <IoMdRefresh className='size-[25px]'/>
            </div>
            <div className='w-[75%] h-[30px] flex items-center justify-between ml-[10px] rounded-[20px] bg-neutral-200'> 
              <a href="https://www.facebook.com/godz.estardo" target='_blank' className=' h-[30px] flex items-center justify-between ml-[10px] rounded-[20px] bg-neutral-200' >
                <strong className='ml-[20px]'>https://www.facebook.com/godz.estardo</strong>
              </a>
              <MdFavorite className='mr-[10px]'/>
            </div>
          </div>
          <div className='h-full w-full bg-neutral-200'>
            <div className='h-full w-[full] m-[7px] flex flex-col justify-center items-center rounded-[15px] bg-neutral-100'> 
              <div className='w-full h-[40px] flex items-center rounded-t-[15px] border-b border-neutral-200 bg-neutral-100'>
                <FaFacebook className='fill-blue-700 size-[30px] ml-[10px]' />
                <div className='w-[200px] h-[35px] flex flex-row items-center  ml-[5px] rounded-[20px] bg-neutral-200'> 
                  <IoIosSearch className='ml-[10px] mr-[7px]'/>
                  <p>Search Facebook</p>
                </div>
              </div>
              <div className='w-[808px] h-[329px] relative mt-[20px]'>
                <img src={cover} alt="cover" className='absolute w-full h-full object-fill' />
              </div>
              <img src={picture} alt="profile" className='w-[200px] h-[200px] rounded-full'/>
            </div>
          </div>
      </div>
    </div>
  )
}
