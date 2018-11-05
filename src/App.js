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
    //.then(potato => console.log(potato)) //위URL가 정상적으로 취득시

    .then(potato => potato.json()) //json으로 바꿔주면 data확인이 가능
    .then(json => console.log(json)) //음..이렇게 then은 복수로 사용이 가능
    .catch(err => console.log(err)) //에러가 발생했을시

    //console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
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
