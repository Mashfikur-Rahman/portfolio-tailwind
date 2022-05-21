import React from 'react';

const About = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-2'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-2 border-pink-600 ml-4'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-2xl font-bold ml-3'>
                    <p>Hi, I'm Mashfikur Rahman, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I am passionate about building excellent software that improves the lives of these around me. I specialize and small business all the way to large enterprise corporations.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;