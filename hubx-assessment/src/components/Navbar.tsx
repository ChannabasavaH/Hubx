import React, { useState } from 'react'
import { LuEye } from "react-icons/lu";
import { FaPlus, FaPowerOff } from "react-icons/fa";
import { MdQuestionMark } from "react-icons/md";
import Model from './Model';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [hambar, setHamber] = useState(false);

    const handleMenuChange = () => {
        setHamber((prevVal) => !prevVal);
    };

    return (
        <div>
            {/* Desktop Navbar */}
            <div className='w-full p-2 hidden md:flex justify-between items-center bg-white shadow-md'>
                <div className='flex justify-center items-center gap-x-4'>
                    <h3 className='font-semibold text-black text-center'>Dashboard</h3>
                    <div className='flex justify-center items-center gap-x-2'>
                        <div className='w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center'>
                            <FaPlus size={12} />
                        </div>
                        <p className='text-center text-gray-400 text-sm'>Create Course</p>
                    </div>
                    <div className='flex justify-center items-center gap-x-2'>
                        <div className='w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center'>
                            <LuEye size={12} />
                        </div>
                        <p className='text-center text-gray-400 text-sm'>Preview home page</p>
                    </div>
                    <div className='flex justify-center items-center gap-x-2'>
                        <div className='w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center'>
                            <LuEye size={12} />
                        </div>
                        <p className='text-center text-gray-400 text-sm'>Preview after login page</p>
                    </div>
                    <div className='flex justify-center items-center gap-x-2'>
                        <div className='w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center'>
                            <FaPowerOff size={12} />
                        </div>
                        <p className='text-center text-gray-400 text-sm'>Welcome home screen</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-x-2'>
                    <Model />
                    <div className='w-8 h-8 rounded-full bg-blue-400 flex justify-center items-center'>
                        <MdQuestionMark size={16} color='white' />
                    </div>
                    <p>Help</p>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='md:hidden w-full flex justify-between items-center p-2 bg-white shadow-md'>
                <div className='flex justify-center items-center'>
                    <p className='text-center font-semibold'>Dashboard</p>
                </div>
                <button onClick={handleMenuChange}>
                    {hambar ? <ImCross size={20} /> : <GiHamburgerMenu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {hambar && (
                <div className="md:hidden flex justify-between items-center flex-col bg-white shadow-md p-4">
                    <div className='flex flex-col justify-center items-start'>
                        <div className='flex justify-center items-center gap-x-2'>
                            <div className='w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center'>
                                <FaPlus size={12} />
                            </div>
                            <p className='text-center text-gray-400 text-sm'>Create Course</p>
                        </div>
                        <div className='flex justify-center items-center gap-x-2 mt-2'>
                            <div className='w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center'>
                                <LuEye size={12} />
                            </div>
                            <p className='text-center text-gray-400 text-sm'>Preview home page</p>
                        </div>
                        <div className='flex justify-center items-center gap-x-2 mt-2'>
                            <div className='w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center'>
                                <LuEye size={12} />
                            </div>
                            <p className='text-center text-gray-400 text-sm'>Preview after login page</p>
                        </div>
                        <div className='flex justify-center items-center gap-x-2 mt-2'>
                            <div className='w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center'>
                                <FaPowerOff size={12} />
                            </div>
                            <p className='text-center text-gray-400 text-sm'>Welcome home screen</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-x-2 mt-2'>
                        <Model />
                        <div className='w-8 h-8 rounded-full bg-blue-400 flex justify-center items-center'>
                            <MdQuestionMark size={16} color='white' />
                        </div>
                        <p>Help</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
