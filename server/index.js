const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const Twitter = require('twitter');
const KEYS_AUTH = require('./utils');

const client = new Twitter(KEYS_AUTH);
const sockets = [];

const broadcast = tweet => {
  sockets.forEach(clientConnection =>
    clientConnection.emit('recentTweet', tweet)
  );
};

io.on('connection', socket => {
  sockets.push(socket);
  let stream = null;
  socket.on('tweetsSubject', keyword => {
    stream && stream.stop();
    stream = client.stream('statuses/filter', { track: keyword }, function(
      stream
    ) {
      stream.on('data', function(event) {
        broadcast(event.text);
      });
    });
  });
});

server.listen(3005);
