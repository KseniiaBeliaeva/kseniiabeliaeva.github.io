import React, { Component } from 'react';
import './SharedStyles.css';
import './Skills.css';
import Aboutme from './Aboutme';

class Skills extends Component {
  render() {

    const skill = ['HTML5', 'CSS3', 'Bootstrap', 'WordPress', 'JavaScript',
      'PHP', 'React.js', 'BEM', 'Photoshop', 'mySQL'
    ];

    const skillsList = skill.map((each, index) => {
      const style = {
        backgroundColor: 'transparent',
        color: 'black',
      };

      return (
        <li key={each} className="skills__list-item" style={style}>
          <a className="skills__list-link">
            {each}
          </a>
        </li>
      );
    });

    return (
      <div className="skills background--fixed">
        <Aboutme />
        <h2 className="heading heading--margin" id="Skills">
          {this.props.heading}
        </h2>
        <ul className="skills__list">
          {skillsList}
        </ul>
      </div>
    );
  }
}

export default Skills;