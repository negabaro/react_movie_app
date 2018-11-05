import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}) {
    
        return(
          <div>
            <h1>{title}</h1>
            <MoviePoster poster={poster} alt={title}  />
          </div>
        );
}


function MoviePoster({poster,alt}){
    return (
      <img src={poster} alt={alt} />
    )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Movie