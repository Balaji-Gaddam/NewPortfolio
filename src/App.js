import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Preloder from './components/Preloder';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a delay to represent loading time
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="Main_app">
      {isLoading ? (
        // Render the preloader while content is loading
        <>
          <Preloder />
        </>
      ) : (
        // Render the content when loading is complete
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                  <Skills />
                  <Education />
                  <Projects />
                  <Footer />
                </>
              }
            />
            <Route path='/Home'
            element={
              <>
                  <HomePage />
                  <Skills />
                  <Education />
                  <Projects />
                  <Footer />
              </>
            } />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
