import React, { Component } from 'react';
import './HomePage.css';
import { NavLink } from 'react-router-dom';
import html from '../../assets/html-logo.svg.png';
import css from '../../assets/logo-css.svg';
import jsLogo from '../../assets/Javascript-shield.png';
import turing from '../../assets/turing-logo.png';
import mdnLogo from '../../assets/mdn-logo.png';
import cssTricksLogo from '../../assets/css-tricks-logo.png';

export class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <div className="hero-image">
          <h3 className="main-text">learn the basic skills necessary to build your own website</h3>
          <p className="sub-text">Programming will challenge you to use both creativity and logic</p>
        </div>
        <div className="lessons">
          <h3 className="lessons-header">get started</h3>
          <div className="lessons-container">
          <NavLink to="/lessons_html" className="nav">
            <div className="language-container">
              <h3 className="language-title">HTML</h3>
              <div className="lesson-divider"></div>
              <div className="lesson-description">
                <div className="logo-container">
                  <img src={html} alt="HTML Logo" className="lesson-logo"/>
                  <p className="language-summary"> THE CONTENT</p>
                </div>
                <p> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself </p>
              </div>
            </div>
          </NavLink>
          <NavLink to='/lessons_CSS' className="nav">
            <div className="language-container">
              <h3 className="language-title">CSS</h3>
              <div className="lesson-divider"> </div>
              <div className="lesson-description">
                <div className="logo-container">
                  <img src={css} alt='CSS Logo' className="lesson-logo css-logo"/>
                  <p className="language-summary"> THE STYLE</p>
                </div>
                <p> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself </p>
              </div>
            </div>
          </NavLink>
          <NavLink to='/lessons_JS' className="nav">
            <div className="language-container">
              <h3 className="language-title">JAVASCRIPT</h3>
              <div className="lesson-divider"> </div>
              <div className="lesson-description">
                <div className="logo-container">
                  <img src={jsLogo} alt="JS Shield" className="lesson-logo"/>
                  <p className="language-summary"> THE LOGIC</p>
                </div>
                <p> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself </p>
              </div>
            </div>
          </NavLink>
          </div>
        </div>
        <div className="resources">
          <h3 className="resources-header">helpful resources</h3>
          <div className="resources-container">
            <a href="http://frontend.turing.io/" className="resource-link" target="_blank">
              <div className="resource">
                <img src={turing} alt="Turing logo" className="resource-logo"/>
                <p className="resource-name">TURING SCHOOL</p>
              </div>
            </a>
            <a href="https://developer.mozilla.org/en-US/" className="resource-link" target="_blank">
              <div className="resource">
                <img src={mdnLogo} alt="mdn logo" className="resource-logo"/>
                <p className="resource-name">MDN WEB DOCS</p>
              </div>
            </a>
            <a href="https://css-tricks.com/" className="resource-link" target="_blank">
              <div className="resource">
                <img src={cssTricksLogo} alt="css tricks logo" className="resource-css-logo"/>
                <p className="resource-name">CSS-TRICKS</p>
              </div>
            </a>
          </div>
        </div>
      </main>
    )
  }
}

export default HomePage;