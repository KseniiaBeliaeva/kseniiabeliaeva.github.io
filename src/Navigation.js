import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        const sections = ['Home', 'Skills', 'Portfolio', 'Contact'];
        const menuLinks = sections.map(section => {
            return <li className="menu__list-item" key={section}><a className="menu__link" href={'#' + section} name={'#' + section}>{section}</a></li>
        });
      return (
        <div>
        <h1 className="nav_heading1">Ksenia Beliaeva</h1>
        <nav className="menu menu-position">
            <ul>
              {menuLinks}
                </ul>
            </nav>
        </div> 
    );
  }
}

export default Navigation;

