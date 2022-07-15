import * as React from "react";
import { motion } from "framer-motion"

const Spinners = () => {
    const[rot1, setRot1] = React.useState(false);
    const[rot2, setRot2] = React.useState(false);
    const[rot3, setRot3] = React.useState(false);
    const[rot4, setRot4] = React.useState(false);
    return (
        <div>
            <h1 className="text-white font-thin"> Spin Me!</h1>
            <div className='grid justify-center items-center'>
                <motion.div 
                animate={{rotate: rot1 ? 360 : 0}}
                onClick={() =>{setRot1(!rot1)}}
                class="spinner"
                ></motion.div>
                <motion.div 
                animate={{rotate: rot2 ? 360 : 0}}
                onClick={() =>{setRot2(!rot2)}}
                class="spinner"
                ></motion.div>
                <motion.div 
                animate={{rotate: rot3 ? 360 : 0}}
                onClick={() =>{setRot3(!rot3)}}
                class="spinner"
                ></motion.div>
                <motion.div 
                animate={{rotate: rot4 ? 360 : 0}}
                onClick={() =>{setRot4(!rot4)}}
                class="spinner"
                ></motion.div>
            </div>
        </div>
    )
}

export default Spinners;
