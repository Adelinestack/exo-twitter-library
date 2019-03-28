import React, { PureComponent } from 'react';
import { AppContainer, Subject } from './appStyle';
import { getTweet, searchTweets } from './services/socket';

export default class App extends PureComponent {
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
        <AppContainer>
          <Subject>
            <label>Choose a subject</label>
            <input type="text" onChange={this.onInputChange.bind(this)} />
            <button onClick={this.onClick.bind(this)}>Go !</button>
          </Subject>
          <div>
            <h1>Tweets parade</h1>
          </div>
          <div>
            <p>{tweet}</p>
          </div>
        </AppContainer>
      </div>
    );
  }
}
