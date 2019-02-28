import React, { Component } from 'react';
import './App.css';
import { getTweet, searchTweets } from './services/socket';

class App extends Component {
  state = {
    tweet: '',
    tweetToSearch: '',
  };

  componentDidMount() {
    getTweet(tweet => {
      this.setState({ tweet });
    });
  }

  onInputChange({ target: { value } }) {
    this.setState({ tweetToSearch: value });
  }

  onClick() {
    const keywords = this.state.tweetToSearch;
    searchTweets(keywords);
  }

  render() {
    const { tweet } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={this.onInputChange.bind(this)} />
          <button onClick={this.onClick.bind(this)}>Go !</button>
          <h1>Dernier Tweet</h1>
          <div>
            <p>{tweet}</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
