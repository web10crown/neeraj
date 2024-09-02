  import React, { useState } from 'react';
  import { IonIcon } from '@ionic/react';
  import { chevronDown, eyeOutline } from 'ionicons/icons';
  const Portfolio = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filterItems = [
      'All',
      'Web design',
      'Applications',
      'Web development',
    ];

    const projects = [
      {
        id: 1,
        title: 'Finance',
        category: 'Web development',
        imgSrc: './assets/images/project-1.jpg',
        altText: 'finance',
      },
      {
        id: 2,
        title: 'Orizon',
        category: 'Web development',
        imgSrc: './assets/images/project-2.png',
        altText: 'orizon',
      },
      {
        id: 3,
        title: 'Fundo',
        category: 'Web design',
        imgSrc: './assets/images/project-3.jpg',
        altText: 'fundo',
      },
      {
        id: 4,
        title: 'Brawlhalla',
        category: 'Applications',
        imgSrc: './assets/images/project-4.png',
        altText: 'brawlhalla',
      },
      {
        id: 5,
        title: 'DSM.',
        category: 'Web design',
        imgSrc: './assets/images/project-5.png',
        altText: 'dsm.',
      },
      {
        id: 6,
        title: 'MetaSpark',
        category: 'Web design',
        imgSrc: './assets/images/project-6.png',
        altText: 'metaspark',
      },
      {
        id: 7,
        title: 'Summary',
        category: 'Web development',
        imgSrc: './assets/images/project-7.png',
        altText: 'summary',
      },
      {
        id: 8,
        title: 'Task Manager',
        category: 'Applications',
        imgSrc: './assets/images/project-8.jpg',
        altText: 'task manager',
      },
      {
        id: 9,
        title: 'Arrival',
        category: 'Web development',
        imgSrc: './assets/images/project-9.png',
        altText: 'arrival',
      },
    ];

    const filteredProjects =
      selectedFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === selectedFilter);

    return (
      <article className="portfolio" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            {filterItems.map((filter, index) => (
              <li className="filter-item" key={index}>
                <button
                  className={selectedFilter === filter ? 'active' : ''}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>

          <div className="filter-select-box">
            <button className="filter-select" data-select>
              <div className="select-value" data-selecct-value>
                {selectedFilter}
              </div>
              <div className="select-icon">
              <IonIcon icon={chevronDown} />
              </div>
            </button>

            <ul className="select-list">
              {filterItems.map((filter, index) => (
                <li className="select-item" key={index}>
                  <button onClick={() => setSelectedFilter(filter)}>
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <ul className="project-list">
            {filteredProjects.map((project) => (
              <li
                className="project-item active"
                data-filter-item
                data-category={project.category.toLowerCase()}
                key={project.id}
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                    </div>
                    <img
                      src={project.imgSrc}
                      alt={project.altText}
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    );
  };

  export default Portfolio;
