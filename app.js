const express = require('express');
const app = express();
app.use(express.static('client'));
app.use(express.json());
const fs = require('fs');

const commentsFile = 'data/match_comments.json';
const matchComments = JSON.parse(fs.readFileSync(commentsFile));

const clubs = require('./data/club_info.json');
const matches = require('./data/match_info.json');

app.get('/timeline', function (req, resp) {
  const entityNo = Object.keys(req.query)[0];
  for (const club of clubs) {
    if (club.id === entityNo) {
      resp.send(club.img);
    }
  }
});

app.get('/club', function (req, resp) {
  const clubNo = Object.keys(req.query)[0];
  const clubInfo = [];
  for (const club of clubs) {
    if (club.id === clubNo) {
      clubInfo.push(club.name);
      clubInfo.push(club.text);
    }
  }
  resp.send(clubInfo);
});

app.get('/match', function (req, resp) {
  const matchNo = Object.keys(req.query)[0];
  const matchInfo = [];
  for (const match of matches) {
    if (match.match === (matchNo)) {
      for (const i in match) {
        if (i !== 'match') {
          matchInfo.push(match[i]);
        }
      }
    }
  }
  resp.send(matchInfo);
});

app.get('/comments', function (req, resp) {
  const matchNo = Object.keys(req.query)[0];
  for (const matchComment of matchComments) {
    if (matchComment.match === matchNo) {
      resp.send(matchComment.comments);
    }
  }
});

app.post('/newcomment', function (req, resp) {
  const newComment = req.body.comment;
  const matchDate = req.body.date;
  for (const match of matches) {
    if (match.date === matchDate) {
      const matchNo = match.match;
      for (const matchComment of matchComments) {
        if (matchComment.match === matchNo) {
          matchComment.comments.push(newComment);
          fs.writeFileSync(commentsFile, JSON.stringify(matchComments));
          resp.send(matchNo);
        }
      };
    }
  };
});

module.exports = app;
