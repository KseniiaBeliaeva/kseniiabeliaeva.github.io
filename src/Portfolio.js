import React, { Component } from 'react';
import './Portfolio.css';
import './Heading.css';
import './SharedStyles.css';
import impossibleTriangle from './img/portfolio/imp.png';
import puddypaws from './img/portfolio/pud.png';
import lollascoffee from './img/portfolio/lolla.png';
import loginForm from './img/portfolio/login.jpg';
// import furniture from './img/portfolio/furn.png';
import eureka from './img/portfolio/eureka.png';
import furnstore from './img/portfolio/furnstore.png';
import math from "./img/portfolio/math.png";

const portfolio = [
    {
        img: impossibleTriangle,
        link: 'http://www.kseniiabeliaeva.com/impossible_triangle/',
        text: 'This website was created on React.js as a Single Page Application for easy navigation and to prevent page reloading. All of the parts of the website were made upon a client\'s breef (as a part of my assessment).'
    },
    {
        img: furnstore,
        link: 'http://www.kseniiabeliaeva.com/furniturestore/',
        text: 'A static website for a furniture store. Was created using Bootstrap',

    },
      {
          img: loginForm,
          link: 'http://www.kseniiabeliaeva.com/member_login/',
          text: 'While studying at TAFE we were learning how work with server-side technologies. Here I created a member login form, where people can sign-in or register and all of the data is stored on the server'
      },
       {
           img: puddypaws,
           link: 'http://www.kseniiabeliaeva.com/puddypaws/',
           text: 'The Puddy Paws website is one of my very first websites and it\'s made on pure HTML/CSS and a little of JavaScript'
    },
        {
            img: lollascoffee,
            link: 'https://kseniiabeliaeva.github.io/lollascoffee/',
            text: 'A React project, fully responsive due to usage of Bootstrap.'
    },
         {
             img: eureka,
             link: 'https://kseniiabeliaeva.github.io/buildingeureka22/',
             text: 'Another React project.'
    },
          {
              img: math,
              link: 'http://www.kseniiabeliaeva.com/math/',
              text: 'This website was made for educational purposes for my 5 y.o. daughter to study maths.The program picks random numbers and words every time the page loads.'
          }
];

const getExamples = portfolio.map((element) => {
    return <div key={element.link} className="portolio-block__item">
        <a href={element.link} className="img-link">
            <img src={element.img} alt={element.text} className="img" />
        </a>
            <div className="item-description">
             <span className="portfolio-block__description">{element.text}</span>
            </div>
     
    </div>
});
class Portfolio extends Component { 
    render() { 
        return (
            <div className="portfolio background--fixed" id="Portfolio">
            <h2 className="heading heading--margin">Portfolio</h2>
            <div id="portfolio-block">
                {getExamples}
                </div>
                </div>
        );
    }

}

export default Portfolio;