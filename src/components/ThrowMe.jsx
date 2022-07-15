import * as React from "react";
import { motion } from "framer-motion"

const ThrowMe = () => {
    return (
        <div>
            <h1 className="text-white font-thin ml-5"> Throw Me!</h1>
            <h1 className="text-white text-xs font-thin ml-5"> (Refresh to Reload.) </h1>
            <div className='flex justify-center items-center'>
                <motion.div 
                drag
                whileDrag={{scale: 1.2}}
                class="throwable"
                ></motion.div>
                <motion.div 
                drag
                whileDrag={{scale: 1.2}}
                class="throwable"
                ></motion.div>
                <motion.div 
                drag
                whileDrag={{scale: 1.2}}
                class="throwable"
                ></motion.div>
                <motion.div 
                drag
                whileDrag={{scale: 1.2}}
                class="throwable"
                ></motion.div>
            </div>
            <div className='flex justify-center items-center'>
                <motion.div 
                drag
                whileDrag={{scale: 1.2}}
                class="throwable"
                ></motion.div>
                <motion.div 
                drag
                whileDrag={{scale: 1.2}}
                class="throwable"
                ></motion.div>
                <motion.div 
                drag
                whileDrag={{scale: 1.2}}
                class="throwable"
                ></motion.div>
                <motion.div 
                drag
                whileDrag={{scale: 1.2}}
                class="throwable"
                ></motion.div>
            </div>
        </div>
    )
}

export default ThrowMe;
