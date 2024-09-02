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
import VideoBackground from './Components/Video';

function App() {

  useEffect(() => {
    initialize();
  }, []);


  return (
    <div className='topApp'>

      
      <VideoBackground />
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
