// import logo from './logo.svg';
import './App.css';
import News from './Task/Hook/news';
import Navbar from './Task/Hook/navbar';
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <BrowserRouter>
        <LoadingBar
          progress={progress}
          color='#f11946'
          waitingTime={1000}
          height={3}
          onLoaderFinished={() => setProgress(0)}
        />
        <div className='nav-bar-div'>
          <Navbar />
        </div>
        <div className='news_container_div'>
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} category='general' />} />
            <Route path="entertainment" element={<News setProgress={setProgress} key='entertainment' category='entertainment' />} />
            <Route path="sports" element={<News setProgress={setProgress} key='sports' category='sports' />} />
            <Route path="business" element={<News setProgress={setProgress} key='business' category='business' />} />
            <Route path="science" element={<News setProgress={setProgress} key='science' category='science' />} />
            <Route path="health" element={<News setProgress={setProgress} key='health' category='health' />} />
            <Route path="technology" element={<News setProgress={setProgress} key='technology' category='technology' />} />
          </Routes>
          
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;