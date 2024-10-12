import { TbSquareRotatedForbid2 } from "react-icons/tb";

const CourseBlog = () => {
    return (
        <div className='w-full flex flex-col justify-center items-start p-2 gap-y-1 bg-white'>
            <div className='flex justify-center items-start gap-x-2'>
                <TbSquareRotatedForbid2 size={20} />
                <p className='text-center font-semibold text-gray-600'>How to sell courses blog</p>
                <div className='bg-sky-400 w-16 h-6 rounded-2xl flex justify-center items-center'>
                    <p className='text-white text-md text-center'>see all</p>
                </div>
            </div>
            <div className='w-full flex justify-between items-center pl-4'>
                <ul style={{ listStyleType: 'circle' }} className='list-inside'>
                    <li className='flex justify-between items-center pb-2'>
                        <span className='w-2/3 text-blue-400'>Blended Learning: What It Is, Why It Matters & How to Apply</span>
                        <p className='ml-2 text-gray-500'>7 days ago</p>
                    </li>
                    <li className='flex justify-between items-center pb-2'>
                        <span className='w-2/3 text-blue-400'>Join the Sales Live Bootcamp [Free Live Workshops]</span>
                        <p className='ml-2 text-gray-500'>12 days ago</p>
                    </li>
                    <li className='flex justify-between items-center pb-2'>
                        <span className='w-2/3 text-blue-400'>12 Steps to Create Awesome Classes in 2021</span>
                        <p className='ml-2 text-gray-500'>20 days ago</p>
                    </li>
                    <li className='flex justify-between items-center pb-2'>
                        <span className='w-2/3 text-blue-400'>Guy Kawasaki on the Future of the Business in the Midst of the Pandemic</span>
                        <p className='ml-2 text-gray-500'>22 days ago</p>
                    </li>
                    <li className='flex justify-between items-center pb-2'>
                        <span className='w-2/3 text-blue-400'>What is Educational Marketing & How to Use it to Grow for Examples</span>
                        <p className='ml-2 text-gray-500'>23 days ago</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CourseBlog
