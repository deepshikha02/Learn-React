import React, {Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {

    state = {
        show : null
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        // http://api.tvmaze.com/shows/1?embed=episodes
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                show : json
            })
        })
    }

    render(){
        console.log(this.props);
        const show = this.state.show;
        return (
            <div>
                <p>Single Series  : {this.props.match.params.id}</p>
                {
                    show === null && <Loader />
                }
                {
                    show !== null && <div>
                        <p> loaded </p>
                        <p>{show.name}</p>
                        <p>Premiered : {show.premiered}</p>
                        <p>Rating : {show.rating.average} </p>
                        <p> Episodes  : {show._embedded.episodes.length} </p>
                        <p>
                            <img alt="Show" src={show.image.medium}></img>
                        </p>
                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;