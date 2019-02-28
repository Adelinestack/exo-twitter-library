import socketIOClient from 'socket.io-client';
const socket = socketIOClient('http://localhost:3005');

const getTweet = cb => {
  socket.on('recentTweet', tweet => cb(tweet));
};

const searchTweets = keyword => socket.emit('tweetsSubject', keyword);

export { getTweet, searchTweets };
