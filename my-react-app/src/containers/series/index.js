import React, {Component} from 'react';

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
            </div>
        );
    }
}

export default Series;

