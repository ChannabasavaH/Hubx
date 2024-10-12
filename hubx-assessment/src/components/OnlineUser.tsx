import React from 'react'
import { CiFaceSmile } from 'react-icons/ci'
import { TbUser } from 'react-icons/tb'

const OnlineUser = () => {
    return (
        <div className='w-full flex flex-col justify-center items-start gap-y-4 p-2 bg-white'>
            <div className='flex justify-center items-start gap-x-2'>
                <TbUser size={20} color='sky' />
                <p className='text-center text-gray-400 text-md'>Online Users(1)</p>
            </div>
            <div className='w-full flex justify-between items-center gap-x-2'>
                <div className='flex items-center gap-x-2'>
                    <div className='w-12 h-12 bg-gray-300 flex justify-center items-center'>
                        <CiFaceSmile size={32} />
                    </div>
                    <p>hubx</p>
                </div>
                <button className='bg-sky-400 w-20 h-8 text-white rounded-md text-center text-md'>
                    Contact
                </button>
            </div>
        </div>
    )
}

export default OnlineUser
