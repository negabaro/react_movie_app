import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render(){
        return(
        <div>
          <h1>hello this is a movie</h1>
          <MoviePoster />
        </div>
        );
    }
}

class MoviePoster extends Component {
    render(){
        return(<img src="https://imgix.bustle.com/uploads/image/2017/8/9/5846855f-3fd5-4db9-84cb-5f65ed2bd107-hunger-games.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70" />);
    }
}

export default Movie