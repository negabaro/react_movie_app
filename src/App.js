import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Old Boy",
  "Star Wars"
  ]

const movieImgs = [
  "https://images-na.ssl-images-amazon.com/images/I/813dE2pH7XL._SL1417_.jpg",
  "https://i.pinimg.com/474x/36/1e/cd/361ecdb85a3767f70810cbe2cdaaf1a4.jpg",
  "https://a.ltrbxd.com/resized/sm/upload/c9/3j/2v/r4/oldboy-1200-1200-675-675-crop-000000.jpg?k=a1b8014ebc",
  "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2017%2F05%2Fstar-wars_1024.jpg&w=800&q=85"
  ]

class App extends Component {
  render() {
    return (
      <div className="App">
        hello!
        <Movie title={movieTitles[0]} img={movieImgs[0]} />
        <Movie title={movieTitles[1]} img={movieImgs[1]} />
        <Movie title={movieTitles[2]} img={movieImgs[2]} />
        <Movie title={movieTitles[3]} img={movieImgs[3]}  />
      </div>
    );
  }
}

export default App;
