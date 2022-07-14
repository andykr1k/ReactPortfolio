import blackmp4 from './assets/whiteoverblack.mp4'
import { Header } from './components';
import './App.css';

const App = () => {

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
    </div>
  )
}

export default App;
