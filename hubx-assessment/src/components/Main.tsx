import React from 'react'
import UsersLogos from './UsersLogos'
import { MdOutlineCalendarMonth, MdKeyboardArrowDown } from "react-icons/md";
import LineChart from './LineChart';

const Main = () => {
    return (
        <div className='w-full flex lg:flex-row flex-col justify-center items-start gap-x-2 p-2'>
            <div className='w-full lg:w-2/3 flex flex-col justify-center items-center'>
                <div className='w-full flex flex-center overflow-x-auto lg:overflow-x-hidden lg:justify-between items-center'>
                    <div className='flex items-center gap-x-2'>
                        <MdOutlineCalendarMonth size={20} color='blue'/>
                        <p className='text-gray-500 text-center'>Your School</p>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <p>New Signups</p>
                        <p className='text-gray-500 text-center'>Revenue</p>
                        <p className='text-gray-500 text-center'>Product Sales</p>
                        <p className='text-gray-500 text-center'>Active Learners</p>
                        <p className='flex flex-row justify-center items-center text-black text-sm lg:text-lg text-center w-32 h-8 bg-gray-300 rounded-2xl'>Last 7 days <MdKeyboardArrowDown /></p>
                    </div>
                </div>
                <div className='w-2/3 lg:w-full flex justify-center items-center'>
                    <LineChart />
                </div>
            </div>
            <div className='w-full lg:w-1/3 pt-4 lg:pt-0 flex justify-center items-center'>
                <UsersLogos />
            </div>
        </div>
    )
}

export default Main