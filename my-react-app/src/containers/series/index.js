import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {

    state = {
        data : []
      };
    
      componentDidMount(){
      
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
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
            The length of state data array is : {this.state.data.length}
            <SeriesList list={this.state.data}></SeriesList>
            </div>
        );
    }
}

export default Series;

