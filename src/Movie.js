import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
    }
    
    render(){
        return(
        <div>
          <h1>{this.props.title}</h1>
          <MoviePoster poster={this.props.poster} alt={this.props.title} />
        </div>
        );
    }
}

class MoviePoster extends Component {
    render(){
        return(<img src={this.props.poster} alt={this.props.alt} />);
    }
}

export default Movie