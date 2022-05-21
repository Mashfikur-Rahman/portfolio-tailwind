import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';



const Navbar = () => {
  const [ nav, setNav ] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300'>
      <div>
        <img src={logo} alt="LOGO" style={{width: '50px'}} />
      </div>

      {/* Menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>

          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li>
            <Link to="skill" smooth={true} duration={500}>
              Skill
            </Link>
          </li>

          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes /> }
      </div>

      {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          
          <li className='py-6 text-4xl'>
            { ' ' }
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>

          <li className='py-6 text-4xl'>
            {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li className='py-6 text-4xl'>
            {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skill
            </Link>
          </li>

          <li className='py-6 text-4xl'>
            {" "}
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>

          <li className='py-6 text-4xl'>
            {" "}
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

      {/* social icons */}
      <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[120px] h-[25px] flex justify-between cursor-pointer items-center ml-[-90px] p-2 hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex items-center justify-between w-full text-gray-300' href='/'>  Linkedin <FaLinkedin style={30}/></a>
          </li>
          <li className='w-[120px] h-[25px] flex justify-between cursor-pointer items-center ml-[-90px] p-2 hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex items-center justify-between w-full text-gray-300' href='/'>  Linkedin <FaGithub style={30}/></a>
          </li>
          <li className='w-[120px] h-[25px] flex justify-between cursor-pointer items-center ml-[-90px] p-2 hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex items-center justify-between w-full text-gray-300' href='/'>  Linkedin <FaFacebook style={30}/></a>
          </li>
          <li className='w-[120px] h-[25px] flex justify-between cursor-pointer items-center ml-[-90px] p-2 hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex items-center justify-between w-full text-gray-300' href='/'>  Linkedin <HiOutlineMail style={30}/></a>
          </li>
          <li className='w-[120px] h-[25px] flex justify-between cursor-pointer items-center ml-[-90px] p-2 hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex items-center justify-between w-full text-gray-300' href='/'>  Linkedin <BsFillPersonLinesFill style={30}/></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;