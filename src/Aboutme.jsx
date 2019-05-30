import React, { Component } from 'react';
import './SharedStyles.css';
import './Aboutme.css';


class Aboutme extends Component {
  render() {
      return (
        <div className="about-me">
        <h1 className="about-me__text">Hi! My name is Ksenia. <br/>
                  I am a Front End Developer passionate about web-based technologies.<br />
                  I love to create UIs, to explore new technologies in web development thus improving my skills.<br />
                  It's extremely important to be up to date in this industry so hiring me is a great decision you won't regret.<br />
                Feel free to contact me if you have any questions!
     </h1>
              </div>
    );
  }
}

export default Aboutme;