import React from 'react';
import './style.css';

const SeriesListItem = ({data}) => (
    <li key={data.show.id}>{data.show.name}</li>
)

const SeriesList = (props) => {
    return (
        <div>
        <div>Series List Component</div>
        <ul className="series-list">
            {
                props.list.map(data => (
                    <SeriesListItem key={data.show.id} data={data}></SeriesListItem>
                    )
                )
            }
        </ul>
        </div>
    );
}
export default SeriesList;