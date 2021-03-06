import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import  { BrowserRouter } from 'react-router-dom';

// const greeting  = React.createElement('h1',{}, 'hello world');
// React.createElement(<element>,<props {}>, <value_in_the_element>);

const getCurrentDate = () => {
    return (new Date()).toDateString();

}

const greetingJsx = <h1>jsx hello world Current Date : {getCurrentDate()}</h1>;


// jsx also completely supports javascript. 
// Read about babel script too
// ReactDOM.render(greetingJsx, document.getElementById('root'));
// ReactDOM.render(<div>greetingJsx<App/></div>, document.getElementById('root'));

ReactDOM.render(
<BrowserRouter><App/></BrowserRouter>, 
document.getElementById('root')
);

registerServiceWorker();
