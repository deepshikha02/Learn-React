import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const greeting  = React.createElement('h1',{}, 'hello world');
// React.createElement(<element>,<props {}>, <value_in_the_element>);

ReactDOM.render(greeting, document.getElementById('root'));
registerServiceWorker();
