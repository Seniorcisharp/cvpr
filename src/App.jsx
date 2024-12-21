import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <img
            src="/4.jpg" 
            alt="Profile"
            className="profile-img"
          />
          <div>
            <h1 className="name">Sharko Aleksey</h1>
            <p className="title">Full Stack Developer</p>
          </div>
        </div>
      </header>

      <aside className="sidebar">
        <section className="section contact">
          <h2 className="section-title">Contact</h2>
          <ul className="contacts-list">
            <li>
              <a href="https://t.me/Otechsa" target="_blank" rel="noopener noreferrer" className="contact-item">
                <i className="fab fa-telegram-plane"></i> Telegram
              </a>
            </li>
            <li>
              <a href="https://github.com/Seniorcisharp" target="_blank" rel="noopener noreferrer" className="contact-item">
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
          </ul>
        </section>

        <section className="section location">
          <h2 className="section-title">Location</h2>
          <p>Belarus, Minsk</p>
        </section>

        <section className="section skills-lang">
          <h2 className="section-title">Skills</h2>
          <div className="skills-list technology-stack">
            <span>C#</span>
            <span>React</span>
            <span>C++</span>
            <span>Node.js</span>
            <span>Asp.Net</span>
            <span>Tilda</span>
            <span>MsSql</span>
            <span>TypeScript</span>
          </div>
          <h2 className="section-title">Languages</h2>
          <div className="skills-list technology-stack">
            <span>English-B2</span>
            <span>Russian-C1</span>
          </div>
        </section>
      </aside>

      <div className="main-content">
        <section className="section about">
          <h2 className="section-title">About Me</h2>
          <p>
            I am a passionate Full Stack Developer with expertise in modern
            lang like Js, C#, and C++. I thrive in creating scalable
            applications, collaborating with teams, and delivering clean and
            maintainable code. Outside of work, I love exploring new technologies
            and mentoring aspiring developers.
          </p>
        </section>

        <section className="section experience">
          <h2 className="section-title">Work-Experience</h2>
          <div className="jobs">
            <h3>Freelance</h3>
            <ul>
              <li>
                I made websites for beauty salons and beauty blogs on Tilda
              </li>
            </ul>
          </div>

          <div className="jobs">
            <h3>Working at BSU.</h3>
            <ul>
              <li>
                I developed applications in js and React, in web programming classes.
                I made beautiful website designs.
                I wrote applications in c++
              </li>
            </ul>
          </div>
        </section>

        <section className="section experience">
          <h2 className="section-title">Works</h2>
          <div className="job">
            <h3>Notion</h3>
            <ul>
              <li>
                Created using React and Redux, the project aims to improve the user experience.
                and it offers integration with other productivity tools. The project includes Registration, logging, personal account and notes that you can freely edit, add, etc.
              </li>
            </ul>
            <img
              src="/2.jpg" 
              alt="Screenshot of ToDoList project"
              className="job-image"
            />
            <p>
              You can view the project and contribute to it on{' '}
              <a href="https://github.com/Seniorcisharp/NotionRedux" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>.
            </p>
          </div>

          <div className="job">
            <h3>Lamoda</h3>
            <ul>
              <li>
                Here you can look at a thing for yourself, also choose a color, a price category (from how many to how many), and view the popularity of this product. I used React + Vite to write this project.
              </li>
            </ul>
            <img
              src="/3.jpg" 
              alt="Screenshot of ToDoList project"
              className="job-image"
            />
            <p>
              You can view the project and contribute to it on{' '}
              <a href="https://github.com/Seniorcisharp/Lamoda" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>.
            </p>
          </div>

          <div className="job">
            <h3>ToDoList</h3>
            <ul>
              <li>
                In this project you can create notes, edit them, select their categories. Also, this is not just an ordinary to-do list, but it can handle 100, 1000 and even 10,000 thousand notes.
              </li>
            </ul>
            <img
              src="/1.jpg" 
              alt="Screenshot of ToDoList project"
              className="job-image"
            />
            <p>
              You can view the project and contribute to it on{' '}
              <a href="https://github.com/Seniorcisharp/ToDoList" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>.
            </p>
          </div>
        </section>

        <section className="section experience">
          <h2 className="section-title">Education</h2>
          <div className="jobs">
            <ul>
              <li>
                I am a second-year student at BSU at the Faculty of Mechanics and Mathematics 
                <a href="https://www.bsu.by" target="_blank"> Visit BSU Website</a>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
