import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component {

    state = {
        data : [],
        seriesName : "",
        isFetching : false
      };
    
      componentDidMount(){}

      onSeriesInputChange = e => {
          console.log(e);
          this.setState({
              seriesName : e.target.value,
              isFetching : true
          });
          fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => {console.log(json)
            this.setState({
            data : json,
            isFetching : false
            });
            });
      }

    render(){
        const { data, seriesName, isFetching} = this.state;
        return (
            <div>
            <Intro message="custom message using props" />
            <div> series container </div>
            {
                data.length === 0 && seriesName.trim() === '' && 
                <p>Please enter series name into the input</p>
            }
            {
                data.length === 0 && seriesName.trim() !== '' && !isFetching &&
                <p> Series not found </p>
            }
            {
                isFetching &&  <Loader></Loader>
            }
            {
                !isFetching && <p>Loaded</p>
            }
            <div>
                <input type="text" onChange={this.onSeriesInputChange}  value={this.state.seriesName}/>
            </div>
            The length of state data array is : {this.state.data.length}
            
            <SeriesList list={this.state.data}></SeriesList>
            </div>
        );
    }
}

export default Series;

