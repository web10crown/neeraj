import { IonIcon } from '@ionic/react';
import { desktop, documents, mailUnread, person, receipt } from 'ionicons/icons';
import React, { useState } from 'react';
// import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('About');
  const iconsArray = [person,receipt,desktop,documents,mailUnread];
  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {['About', 'Resume', 'Portfolio', 'Blog', 'Contact'].map((link,i) => (
          <li key={link} className="navbar-item">
            <button
              className={`navbar-link ${activeLink === link ? 'active' : ''}`}
              onClick={() => handleNavClick(link)}
              data-nav-link
              name={link}
            >             
             <IonIcon style={{fontSize:"25px"}} icon={iconsArray[i]} />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
