import React, { Component } from 'react';
// import background from './img/bg-pink.jpg';
import './Heading.css';
import './SharedStyles.css';

        const styles = {
            height: '100vh',
            backgroundSize:'cover'
        }
        
class Heading extends Component {
    render() {

        return (
        <div className="name" id="Contact">
        <header style={styles} className="welcome-page background--fixed">
            <h1 className="heading">{this.props.title}</h1>
            <a href="mailto:ksenia.belyaewa@gmail.com?subject=I want to hire you!&body=Hi Ksenia,"
                className="welcome-page__btn-centered-md">{this.props.button}</a>
                </header>
                </div>
    );
}
}

export default Heading;

