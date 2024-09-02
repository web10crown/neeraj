import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Daniel Lewis',
      avatar: './assets/images/avatar-1.png',
      date: '14 June, 2021',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.',
    },
    {
      id: 2,
      name: 'Jessica Miller',
      avatar: './assets/images/avatar-2.png',
      date: '12 May, 2021',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.',
    },
    {
      id: 3,
      name: 'Emily Evans',
      avatar: './assets/images/avatar-3.png',
      date: '20 April, 2021',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.',
    },
    {
      id: 4,
      name: 'Henry William',
      avatar: './assets/images/avatar-4.png',
      date: '02 March, 2021',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.',
    },
  ];

  const clients = [
    './assets/images/logo-1-color.png',
    './assets/images/logo-2-color.png',
    './assets/images/logo-3-color.png',
    './assets/images/logo-4-color.png',
    './assets/images/logo-5-color.png',
    './assets/images/logo-6-color.png',
  ];

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setActiveModal(true);
  };

  const closeModal = () => {
    setActiveModal(false);
    setSelectedTestimonial(null);
  };

  // Effect for handling clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) &&
          overlayRef.current && overlayRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I
          enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that it is eye-catching and easy to use. My aim
          is to bring across your message and identity in the most creative way. I created web design for many famous
          brand companies.
        </p>
      </section>

      {/* Services Section */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-design.svg" alt="design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>
              <p className="service-item-text">The most modern and high-quality design made at a professional level.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">High-quality development of sites at the professional level.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>
              <p className="service-item-text">Professional development of applications for iOS and Android.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>
              <p className="service-item-text">I make high-quality photos of any category at a professional level.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="testimonials-item">
              <div
                className="content-card"
                data-testimonials-item
                onClick={() => openModal(testimonial)}
              >
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={testimonial.name} width="60" data-testimonials-avatar />
                </figure>
                <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonial.name}</h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Modal */}
      {activeModal && selectedTestimonial && (
        <div className={`modal-container ${activeModal ? "active" : ''}`} ref={modalRef} data-modal-container>
          <div className={`overlay ${activeModal ? "active" : ''}`} ref={overlayRef} data-overlay></div>
          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn onClick={closeModal}>
              <IonIcon icon={closeOutline} />
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={selectedTestimonial.avatar} alt={selectedTestimonial.name} width="80" data-modal-img />
              </figure>
              <img src="./assets/images/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>{selectedTestimonial.name}</h4>
              <time dateTime={selectedTestimonial.date}>{selectedTestimonial.date}</time>
              <div data-modal-text>
                <p>{selectedTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Clients Section */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {clients.map((client, index) => (
            <li key={index} className="clients-item">
              <a href="/">
                <img src={client} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
