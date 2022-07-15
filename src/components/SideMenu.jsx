import * as React from "react";
import { motion } from "framer-motion"
import inLogo from '../assets/linkedin.png'
import instaLogo from '../assets/insta.png'
import ytLogo from '../assets/yt.png'

const SideMenu = () => {
  return (
    <div >
        <h1 className="text-white font-thin ml-2"> Come Here!</h1>
        <div class="sMenu">
            <motion.div whileHover={{x:10}}>
                <motion.img src={inLogo} alt="inLogo" />
            </motion.div>
            <motion.div whileHover={{x:10}}>
                <motion.img src={instaLogo} alt="instaLogo" />
            </motion.div>
            <motion.div whileHover={{x:10}}>
                <motion.img src={ytLogo} alt="ytLogo" />
            </motion.div>
        </div>
    </div>
  )
}

export default SideMenu;