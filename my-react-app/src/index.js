import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const greeting  = React.createElement('h1',{}, 'hello world');
// React.createElement(<element>,<props {}>, <value_in_the_element>);

const getCurrentDate = () => {
    return (new Date()).toDateString();

}

const greetingJsx = <h1>jsx hello world Current Date : {getCurrentDate()}</h1>;


// jsx also completely supports javascript. 
// Read about babel script too
ReactDOM.render(greetingJsx, document.getElementById('root'));
registerServiceWorker();
