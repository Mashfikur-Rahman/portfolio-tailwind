import React from 'react';
import Aws from '../assets/aws.png';
import CSS from '../assets/css.png';
import Firebase from '../assets/firebase.png';
import Html from '../assets/html.png';
import Javascript from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import Node from '../assets/node.png';
import Github from '../assets/github.png';


const Skills = () => {
  return (
    <div className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto flex flex-col items-center justify-center w-full h-full'>
            <div>   
                <p className='text-4xl font-bold inline border-b-2 border-pink-600'>Skills</p>
                <p className='py-4'>These are the techonologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
                <div className='shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Firebase} alt="HTML icon"/>
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Aws} alt="HTML icon"/>
                    <p className='my-4'>AWS Cloud</p>
                </div>
                <div className='shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML icon"/>
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML icon"/>
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="HTML icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md rounded-lg shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="HTML icon"/>
                    <p className='my-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Skills;