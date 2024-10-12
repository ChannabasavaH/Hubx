import { IoKey } from "react-icons/io5";
import { MdOutlineAutoGraph } from "react-icons/md";

const Events = () => {
    return (
        <div className='w-full flex flex-col justify-center items-start gap-y-2 bg-white p-4'>
            <div className='flex justify-center items-center gap-x-2'>
                <MdOutlineAutoGraph size={20} color='gray' />
                <p className='text-center font-semibold text-gray-600'>Events Logs</p>
                <div className='bg-sky-400 w-16 h-6 rounded-2xl flex justify-center items-center'>
                    <p className='text-white text-md text-center'>see all</p>
                </div>
            </div>
            <div className='flex justify-between items-center w-full'>
                <div className='flex items-start'>
                    <IoKey className='pt-1' color='gray' />
                    <div className='flex flex-col pl-2'>
                        <p className='text-blue-400 text-md'>hubx</p>
                        <p className='text-black text-md'>Logged In</p>
                        <p className='text-blue-400 text-md'>more info</p>
                    </div>
                </div>
                <p className='text-gray-400 text-md'>22 minutes</p>
            </div>
        </div>
    )
}

export default Events;
