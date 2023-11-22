import React, { useState, useEffect } from "react";
import '../App.css';
import Profile from '../images/New Project.png';
import Icons from "./Icons";
import ResumeFile from '../images/Balaji-Gaddam-Resume.pdf'; // Replace with the actual path to your resume file
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [url, setUrl] = useState('/Home');

  const handleClicked = () => {
    setClicked(!clicked);
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const updateUrl = () => {
    // Logic to update the URL based on MenuItems
    // This logic remains unchanged from your previous code
    if (MenuItems.some(item => item.url === 'Resume')) {
      setUrl('Resume');
    } else {
      setUrl('/Home');
    }
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', changeBackground);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  useEffect(() => {
    // Call updateUrl when MenuItems changes
    updateUrl();
  }, [{MenuItems}]);

  const handleResumeDownload = () => {
    // Use an invisible anchor element to trigger the download
    const link = document.createElement('a');
    link.href = ResumeFile;
    link.target = '_blank'; // Open in a new tab
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <nav className={scroll ? 'activate' : 'NavbarItems'}>
      <div className="TitleDivMain">
        <img src={Profile} alt='' className="Navbar-logo" />
      </div>
      <div className={scroll ? 'menu-icons_color' : 'menu-icons'} onClick={handleClicked}>
        <i className={clicked ? "fa-solid fa-xmark" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "Nav-menu active" : "Nav-menu"}>
        {MenuItems.map((items, index) => (
          <li key={index}>
            <a
              className={items.cName}
              href={items.url}
              download={items.url === 'Resume' ? 'Resume.pdf' : undefined}
            >
              {items.title}
            </a>
          </li>
        ))}
        <li className="Download_Button">
          <button onClick={handleResumeDownload}>Download Resume</button>
        </li>
        <h1 className="NavName">SAY HELLO</h1>
        <Icons />
      </ul>
    </nav>
  );
};

export default Navbar;
