const express = require('express');
const app = express();
app.use(express.static('client'));

var clubs = require("./data/club_info.json");

app.get("/club",function(req, resp){
    clubName = Object.keys(req.query)[0]
    let info = []
    for (const club of clubs){
        if (club["tags"].includes(clubName)){
            info.push(club["club"])
            info.push(club["text"])
        }
    }
    resp.send(info)
});

app.listen(8090);