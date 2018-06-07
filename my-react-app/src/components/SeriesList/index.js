import React from 'react';
import './style.css';

const SeriesList = (props) => {
    return (
        <div>
        <div>Series List Component</div>
        <ul className="series-list">
            {props.list.map(data => (<li key={data.show.id}>{data.show.name}</li>))}
        </ul>
        </div>
    );
}
export default SeriesList;