import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render(){
        console.log(this.props);
        return(
        <div>
          <h1>{this.props.title}</h1>
          <MoviePoster poster={this.props.img} />
        </div>
        );
    }
}

class MoviePoster extends Component {
    render(){
        return(<img src={this.props.poster} />);
    }
}

export default Movie