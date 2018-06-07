import React from 'react';

const Intro = (props)=> (
    <div>
    <p className="App-intro">
        First functional component
    </p>
    <h2>
        {props.message}
    </h2>
    </div>
  )

  export default Intro;