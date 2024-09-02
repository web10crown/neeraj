import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Sidebar from './Components/Sidebar';
import { useEffect, useState } from 'react';
import { initialize } from './js/script';

function App() {

  useEffect(() => {
    initialize();
  }, []);

  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prevHue) => (prevHue + 30) % 360);
    }, 5000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div className='topApp'>

      <video className="video-background" style={{ filter: `blur(50px) hue-rotate(${hue}deg)` }} autoPlay loop muted>
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main>
        <Sidebar />
        <div className='main-content'>
          <Navbar />
          <About />
          <Resume />
          <Portfolio />
          <Blog />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
