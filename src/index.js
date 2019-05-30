import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './Heading';
import Skills from './Skills.jsx';
import Portfolio from './Portfolio';
// import Aboutme from './Aboutme';
import Navigation from './Navigation';

import registerServiceWorker from './registerServiceWorker';

class App extends Component { 
    render() { 
        return (
            <React.Fragment>
                <Navigation title="Ksenia Beliaeva" />
                <Skills headding="Skills" />
                <Portfolio />
                <Heading title="Ksenia Beliaeva" button="contact me"/>
            </React.Fragment>
        );
    }
}  


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

