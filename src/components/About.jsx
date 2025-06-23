import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import picture from "../assets/eyy.jpg";
import cover from "../assets/cover.jpg";
import { IoIosSearch } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

export const About = () => {
  return (
    <div>
      <div id='about' className='w-full h-[700px] flex flex-col relative justify-center items-center bg-yellow-500 py-[20px]'>
          <div className='w-[85%] h-[30px] flex items-center rounded-t-[9px] bg-neutral-200'>
            <p className='h-[20px] w-[25px] rounded-[50%] ml-[10px] bg-red-500'></p>
            <p className='h-[20px] w-[25px] rounded-[50%] ml-[5px] bg-yellow-500'></p>
            <p className='h-[20px] w-[25px] rounded-[50%] ml-[5px] bg-green-500'></p>
            <div className='w-[200px] h-full flex items-center ml-[10px] rounded-t-[10px] bg-neutral-100'>
              <FaFacebook className='fill-blue-700 size-[20px] ml-[10px]' />
              <strong className='ml-[5px]'>Facebook</strong>
            </div>
            <div className='w-[200px] h-full flex items-center rounded-t-[10px] bg-neutral-300'>
              <FaInfoCircle className='size-[20px] ml-[10px]' />
              <strong className='ml-[5px]'>ABOUT ME</strong>
            </div>
          </div>
          <div className='w-[85%] h-[40px] flex items-center bg-neutral-100'>
            <div className='flex items-center gap-[7px]'>
              <IoMdArrowBack className='size-[25px]'/>
              <IoMdArrowForward className='size-[25px]'/>
              <IoMdRefresh className='size-[25px]'/>
            </div>
            <div className='w-[75%] h-[30px] flex items-center justify-between ml-[10px] rounded-[20px] bg-neutral-200'> 
              <a href="https://www.facebook.com/godz.estardo" target='_blank' className=' h-[30px] overflow-hidden whitespace-nowrap flex items-center justify-between ml-[10px] rounded-[20px] bg-neutral-200' >
                <strong className='truncate w-full ml-[10px] lg:ml-[20px]'>https://www.facebook.com/godz.estardo</strong>
              </a>
              <MdFavorite className='mr-[10px]'/>
            </div>
          </div>
          <div className='h-[650px] w-[85%] bg-neutral-200 flex justify-center'>
            <div className='lg:h-[575px] overflow-x-hidden overflow-y-auto scroll-rounded w-[98%] lg:m-[11px] flex flex-col items-center rounded-[15px] bg-neutral-100 relative'> 
              <div className='w-full h-[40px] flex items-center rounded-t-[15px] border-b border-neutral-200 py-[20px] bg-neutral-100'>
                <FaFacebook className='fill-blue-700 size-[30px] ml-[10px]' />
                <div className='w-[220px] h-[35px] flex flex-row items-center  ml-[5px] rounded-[20px] bg-neutral-200'> 
                  <IoIosSearch className='ml-[10px] mr-[7px]'/>
                  <p>Search Facebook</p>
                </div>
              </div>
              <div className='relative lg:w-[808px] w-[350px] h-[329px] mt-[20px]'>
                <img
                  src={cover}
                  alt="cover"
                  className='w-full h-full rounded-md object-cover'
                />
                <div className='absolute bottom-[-220px] right-[-180px] lg:bottom-[-120px] lg:left-[40px] flex lg:flex-row flex-col items-center space-x-4'>
                  <img
                    src={picture}
                    alt="profile"
                     className='w-[160px] h-[160px] rounded-full border-[5px] border-neutral-100'
                  />
                  <div className='flex lg:flex-row flex-col items-center justify-between w-[700px]'>
                    <strong className='text-[30px] text-black'>Godfrey Estardo</strong>
                    <a
                      href="https://www.facebook.com/messages/e2ee/t/8347208215341232" target='_blank'
                      className='p-[8px] flex items-center mt-[10px] gap-[5px] lg:mr-[170px] text-lg rounded-md bg-blue-600 text-white hover:bg-blue-700 w-max'
                    >
                      <FaFacebookMessenger/> Message
                    </a>
                  </div>
                </div>
              </div>
              <div className='h-[1px] w-[73%] mt-[130px] bg-black'>
                <ul className='flex w-[73%] gap-[30px] ml-[50px] p-[5px] mt-[5px] text-[20px]'>
                  <li>Posts</li>
                  <li className='text-blue-700 border-b-[2px] border-blue-700'>About</li>
                  <li>Friends</li>
                  <li>Photos</li>
                </ul>
                <div className='bg-red-300 p-[100px] rounded-[20px] mt-[10px]'>
                  Hello world ugh
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
