import React from 'react';
import { IonIcon } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';
const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <IonIcon icon={bookOutline} />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">University School of the Arts</h4>
            <span>2007 — 2008</span>
            <p className="timeline-text">
              Specialized in creative problem-solving and artistic expression.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">New York Academy of Art</h4>
            <span>2006 — 2007</span>
            <p className="timeline-text">
              Gained expertise in hands-on experience and related practices.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">High School of Art and Design</h4>
            <span>2002 — 2004</span>
            <p className="timeline-text">
              Developed foundational skills in visual arts.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
          <IonIcon icon={bookOutline} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Creative Director</h4>
            <span>2015 — Present</span>
            <p className="timeline-text">
              Led and managed creative projects focusing on branding and user experience design.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Art Director</h4>
            <span>2013 — 2015</span>
            <p className="timeline-text">
              Oversaw design teams and developed visual identities contributing to brand recognition.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web Designer</h4>
            <span>2010 — 2013</span>
            <p className="timeline-text">
              Designed and implemented user-centric websites blending aesthetics with functionality.
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web Design</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Graphic Design</h5>
              <data value="70">70%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '70%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Branding</h5>
              <data value="90">90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '90%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '50%' }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resume;
