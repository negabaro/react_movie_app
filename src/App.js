import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {
  //Render: will mount -> render -> did mount 
  //Update: componentWillReceiveProps() -> shoudComponent() -> componentWillUpdate()
  state = {
    greeting: 'Hello!'
  }
  
  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    //console.log로 보면 promise가 보임
    // 이게 최신 모던 자바스크립트라서 에이작스가 이렇게 쉽게 쓸수있는거임
    //setTimeout(() => {
    //  this.setState({ greeting: 'Hello Again' });
    //}, 3000);
    
    
    
   // setTimeout(() => {
   //   this.state.greeting = 'something';
   // }, 5000 )
  }
  
  
  _renderMovie = () => {
    const movies = this.state.movies.map((movie,index) => {
          return (<Movie title={movie.title} poster={movie.poster} key={index} />);
    });
    return movies;
  };
  
  render() {
    console.log('render',this.state);
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies ? this._renderMovie() : "Loading" }
      </div>
    );
  }
}

export default App;
