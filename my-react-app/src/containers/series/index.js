import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {

    state = {
        data : []
      };
    
      componentDidMount(){}

      onSeriesInputChange = e => {
          console.log(e);
          fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => {console.log(json)
        this.setState({
          data : json
        });
        });
      }

    render(){
        return (
            <div>
            <div> series container </div>
            <div>
                <input type="text" onChange={this.onSeriesInputChange} />
            </div>
            The length of state data array is : {this.state.data.length}
            <SeriesList list={this.state.data}></SeriesList>
            </div>
        );
    }
}

export default Series;

