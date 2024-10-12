import { TbUser } from "react-icons/tb";
import { CiFaceSmile } from "react-icons/ci";

const NewUsers = () => {
    return (
        <div className='w-full flex flex-col justify-center items-start gap-y-4 p-2 bg-white'>
            <div className='flex justify-center items-center gap-x-2'>
                <TbUser size={20} color='sky' />
                <p className='text-center text-gray-400 text-md'>New users</p>
                <div className='bg-sky-400 w-16 h-6 rounded-2xl flex justify-center items-center'>
                    <p className='text-white text-md text-center'>see all</p>
                </div>
            </div>
            <div className='flex justify-center items-start gap-x-2'>
                <div className='w-12 h-12 bg-gray-300 flex justify-center items-center'>
                    <CiFaceSmile size={32}/>
                </div>
                <div className='flex flex-col justify-center items-start gap-y-1'>
                    <p>hubx</p>
                    <p>24 minutes</p>
                </div>
            </div>
        </div>
    )
}

export default NewUsers