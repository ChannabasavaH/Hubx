import React from 'react'
import { CgSandClock } from "react-icons/cg";

const Trail = () => {
  return (
    <div className='w-full flex justify-between items-center bg-white p-2'>
        <div className='flex flex-col justify-center items-center gap-y-4'>
            <p className='text-gray-400 text-center text-lg text-semibold'>Trail Period</p>
            <div className='bg-sky-500 w-24 h-24 rounded-full flex flex-col justify-center items-center shadow-lg border-2 border-white'>
                <p className='text-white text-center text-lg'>30</p>
                <p className='text-white text-center text-sm'>DAYS LEFT</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-end gap-y-8'>
            <CgSandClock size={44} color='gray' />
            <button className='bg-pink-600 w-36 h-8 rounded-2xl text-center text-sm text-white font-bold'>Upgrade now!! &gt;&gt;</button>
        </div>
    </div>
  )
}

export default Trail