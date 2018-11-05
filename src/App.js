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

    this._getMovies();

    //fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    //.then(potato => console.log(potato)) //위URL가 정상적으로 취득시

    //.then(potato => potato.json()) //json으로 바꿔주면 data확인이 가능
    //.then(json => console.log(json)) //음..이렇게 then은 복수로 사용이 가능
    //.catch(err => console.log(err)) //에러가 발생했을시

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
  
  //async _getMovies = () => { 이거랑 밑의 행 차이는??
  _getMovies = async () => { //async자체는 비동기임 순서대로 실행하는 개념이 아님
    //async을 안쓰면 await이 작동안함
    const movies = await this._callApi()
    //await을 이용해서 부른 callApi가 정상적으로 끝날때까지 밑의 행에 있는 setState는 실행되지 않음
    this.setState({
      movies
    })
  }//_getMovies
  
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
    
  }//_callApi
  
  _renderMovie = () => {
    const movies = this.state.movies.map(movie => {
          return (<Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />);
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
