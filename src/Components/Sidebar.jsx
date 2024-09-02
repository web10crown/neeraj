import React, { useEffect, useRef, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { mailOutline, phonePortraitOutline, calendarOutline, locationOutline, chevronDown, logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';


const Sidebar = () => {

  const [toggle, setToggle] = useState(false);
  
  const handleToggle = ()=>{
    setToggle(!toggle);    
  }

  return (
    <aside className={`sidebar ${toggle?"active":''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./assets/images/my-avatar.png" alt="Richard Hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard Hanrick">Neeraj Rana</h1>
          <p className="title">Web Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={handleToggle}>
          <span>Show Contacts</span>
          <IonIcon icon={chevronDown} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={mailOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:richard@example.com" className="contact-link">nranabatour@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={phonePortraitOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">+91 (985) 168-0007</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={calendarOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">November 13, 1999</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={locationOutline} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Panchkula, Haryana , India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoFacebook} />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoTwitter} />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <IonIcon icon={logoInstagram} />
            </a>
          </li>
        </ul>
      </div>
      
    </aside>
  );
};

export default Sidebar;
