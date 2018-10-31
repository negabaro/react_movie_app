import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


const movies = [
  {
    title: "Matrix",
    poster: "https://images-na.ssl-images-amazon.com/images/I/813dE2pH7XL._SL1417_.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://i.pinimg.com/474x/36/1e/cd/361ecdb85a3767f70810cbe2cdaaf1a4.jpg"
  },
  {
    title: "Old Boy",
    poster: "https://a.ltrbxd.com/resized/sm/upload/c9/3j/2v/r4/oldboy-1200-1200-675-675-crop-000000.jpg?k=a1b8014ebc"
  },
  {
    title: "Star Wars",
    poster: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2017%2F05%2Fstar-wars_1024.jpg&w=800&q=85"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        hello!
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />;
        })};
        
      </div>
    );
  }
}

export default App;
