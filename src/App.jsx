import * as React from "react";
import blackmp4 from './assets/whiteoverblack.mp4';
import { Header, SideMenu, ThrowMe, Spinners } from './components';
import { motion } from "framer-motion"
import './App.css';

const App = () => {
  const[rot1, setRot1] = React.useState(false);
  const[rot2, setRot2] = React.useState(false);
  const[rot3, setRot3] = React.useState(false);
  const[rot4, setRot4] = React.useState(false);


  return (
    <div>
      <video loop muted autoPlay>
        <source
          src={blackmp4}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Header />
      <div className="absolute bottom-0 left-0">
        <SideMenu />
      </div>
      <div className="absolute bottom-0 right-0">
        <ThrowMe />
      </div>
      <div className="absolute right-0">
        <Spinners />
      </div>
    </div>
  )
}

export default App;
