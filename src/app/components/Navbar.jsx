"use client"

import Image from 'next/image';
import Link from 'next/link';
import logo from "../img/logo.png"
import usericon from "../img/usericon.jpg"
import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {

  const [show, setShow] = useState(false)
  const navRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

   const handleNav =()=>{
    if(!show){
      setShow(true)
    }
    else{
      setShow(false)
    }
   }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
       <nav 
         ref={navRef}
         className={`${isFixed ? 'fixed top-0 left-0 right-0 w-full px-[2.5%] rounded-none' : 'sticky top-0 mx-[2.5%] rounded-[1rem]'} shadow-lg text-primaryText flex items-center justify-between h-[90px] z-[99999] transition-all duration-300 p-[2%]`}
       >
         <Image src={logo}  width={70} /> 
           
            <ul className={` lg:flex gap-6 text-background text-[1.3rem] tracking-tight items-center
                            ${show ? "flex-col ":"max-lg:hidden"} max-lg:absolute max-lg:top-[5.5rem] max-lg:bg-background1 max-lg:text-primaryText top-0 left-0 right-0  max-lg:shadow-md`}>
               <li><Link href="#">Properties</Link></li>
               <li className="relative group">
                 <button className="flex items-center gap-2 max-lg:text-center max-lg:justify-center max-lg:w-full">Categories
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                 </button>
                 <ul className="absolute max-lg:static bg-background1 transition duration-300 left-0 mt-2 w-48 max-lg:w-full  shadow-lg rounded-md py-1 max-lg:py-0 hidden group-hover:block z-50">
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Apartment</Link>
                    <Link href="#" className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700">Family House</Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Studio</Link>
                    <Link href="#" className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700">Office/Commercial</Link>
                 </ul>
               </li>
               <li><Link href="#">For Sale</Link></li>
               <li><Link href="#">Add Property</Link></li>
               <li><Link href="#">About Us</Link></li>
               <li className='border-b-none'><Link href="#">Contact</Link></li>
            </ul>

            <div className='flex gap-4 items-center'>
             
               <Link className=' rounded-[50%] overflow-hidden'
                href="#"><Image src={usericon} alt="sefds"  width={40}/>
                </Link>
                
                <GiHamburgerMenu onClick={handleNav} className=' lg:hidden max-lg:visible text-blue-600 text-3xl cursor-pointer hover:text-gray-600'/>
              
            </div>
        
       </nav>
    
  )
}

export default Navbar