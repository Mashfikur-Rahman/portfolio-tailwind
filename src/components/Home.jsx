import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, My Name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Mashfikur Rahman</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892e0]'>I'm full-stack developer</h2>
            <h3 className='text-[#8892b0] py-4 max-w-[700px]'>specification in building and occasionally designing expectral experiences. currently, I'm focused on building responsive full-stack we application</h3>
            <div>
                <button className='text-white border-2 rounded-full px-4 py-1 flex items-center hover:bg-pink-600 outline-none'>View Work
                    <span className='hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-2'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home;