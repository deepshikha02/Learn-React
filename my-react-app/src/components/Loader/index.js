import React from 'react';
import LoaderImg from '../../assets/logo.svg';

const Loader = props => (
    <div>
        <img 
        style={{width : 75}}
        alt="loader icon loading" src={LoaderImg} />
    </div>
);

export default Loader;