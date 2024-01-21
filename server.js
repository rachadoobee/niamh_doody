const express = require('express');
const app = express();
app.use(express.static('client'));

var clubs = require("./data/club_info.json");
var matches = require("./data/match_info.json");

app.get("/club",function(req, resp){
    clubName = Object.keys(req.query)[0]
    let timeline_info = []
    for (const club of clubs){
        if (club["tags"].includes(clubName)){
            timeline_info.push(club["club"])
            timeline_info.push(club["text"])
        }
    }
    resp.send(info)
});

app.get("/match",function(req, resp){
    matchNo = Object.keys(req.query)[0]
    let match_info = []
    for (const match of matches){
        if (match["match"]===(matchNo)){
            for (let i in match){
                if (i!="match"){
                    match_info.push(match[i])
                }
            }
        }
    }
    resp.send(match_info)
});

app.listen(8090);