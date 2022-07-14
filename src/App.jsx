import sunsetmp4 from './assets/sunset.mp4'
import { Header } from './components';
import './App.css';

const App = () => {

  return (
    <div>
      <video loop muted autoPlay>
        <source
          src={sunsetmp4}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Header />
    </div>
  )
}

export default App;
