import React from 'react'
import { TbUser } from "react-icons/tb";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { LuAlarmClock } from "react-icons/lu";
import { LiaShoppingBagSolid, LiaClipboardListSolid } from "react-icons/lia";
import { IoPricetagOutline } from "react-icons/io5";

const UsersLogos = () => {
    return (
        <div className='w-full bg-white flex justify-center items-center p-2'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col justify-center items-center gap-y-1'>
                    <TbUser size={32} color='gray' />
                    <p className='text-md text-gray-400'>All Users</p>
                    <p className='text-gray-500'>1</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-1'>
                    <PiArrowsCounterClockwise size={32} color='gray'/>
                    <p className='text-md text-gray-400'>Conversions</p>
                    <p className='text-md text-gray-400'>0%</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-1'>
                    <LiaShoppingBagSolid size={32} color='gray'/>
                    <p className='text-md text-gray-400'>30 days sale</p>
                    <p className='text-md text-gray-400'>0</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-1'>
                    <LuAlarmClock size={32} color='gray'/>
                    <p className='text-md text-gray-400'>Avg time</p>
                    <p className='text-md text-gray-400'>0 min</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-1'>
                    <LiaClipboardListSolid size={32} color='gray' />
                    <p className='text-md text-gray-400'>Courses</p>
                    <p className='text-md text-gray-400'>0</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-1'>
                    <IoPricetagOutline size={32} color='gray'/>
                    <p className='text-md text-gray-400'>Courses categories</p>
                    <p className='text-md text-gray-400'>0</p>
                </div>
            </div>
        </div>
    )
}

export default UsersLogos