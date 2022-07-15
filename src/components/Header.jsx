import * as React from "react";
import logo from '../assets/rbanimoji.png'
import { motion } from "framer-motion"

const Header = () => {
  const [get, setGet] = React.useState(false)
  return (
    <div className='flex text-white bg-slate-800 bg-opacity-10'>
        <motion.img animate={{ rotate: get ? 360 : 0 }} onClick={() => {setGet(!get)}} src={logo} alt="Logo" />
        <div className='flex'>
            <motion.a whileHover={{ scale: 1.2, rotate: -10 }} className='m-auto mr-5'>Home</motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: -10 }} className='m-auto mr-5'>About Me</motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: -10 }} className='m-auto mr-5'>Projects</motion.a>
            <motion.a whileHover={{ scale: 1.2, rotate: -10 }} className='m-auto mr-5'>Contact Me</motion.a>
        </div>
    </div>
  )
}

export default Header;
