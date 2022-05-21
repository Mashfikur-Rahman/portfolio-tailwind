import React from 'react';

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-centerp-4'>
        <form method='POST' action='https://getform.io/f/72999327-302e-4b01-8a4f-6a9ff5845c1c' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-2 border-pink-600 text-gray-300'>Contatct</p>
                <p className='text-gray-300 py-300'>Submit the form below or shoot me an email</p>
            </div>
            <input className='bg-[#ccd6f6] rounded-md outline-none p-2 mx-2 ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md outline-none mx-2' type="email" placeholder='Email' name='email' />
            <textarea className='outline-none bg-[#ccd6f6] rounded-md pl-2 mx-2' placeholder='Message' name="message" id="" cols="30" rows="10"></textarea>
            <button className='text-white outline-none rounded-full border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
        
    </div>
  )
}

export default Contact;