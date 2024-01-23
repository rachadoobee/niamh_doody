const express = require('express');
const app = express();
app.use(express.static('client'));
app.use(express.json());
const fs = require('fs');

const commentsFile = "data/match_comments.json";
const matchComments = JSON.parse(fs.readFileSync(commentsFile));


var clubs = require("./data/club_info.json");
var matches = require("./data/match_info.json");

app.get("/timeline",function(req, resp){
    entityNo = Object.keys(req.query)[0]
    for (const club of clubs){
        if (club["id"]===entityNo){
            resp.send(club["img"])
        }
    }
})

app.get("/club",function(req, resp){
    clubNo = Object.keys(req.query)[0]
    let club_info = []
    for (const club of clubs){
        if (club["id"]===clubNo){
            club_info.push(club["name"])
            club_info.push(club["text"])
        }
    }
    resp.send(club_info)
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

app.get("/comments",function(req,resp){
    matchNo = Object.keys(req.query)[0]
    for (const matchComment of matchComments){
        if (matchComment["match"]===matchNo){
            resp.send(matchComment["comments"])
        }
    }
});

app.post("/newcomment",function(req,resp){
    const newComment=req.body["comment"];
    const matchDate=req.body["date"];
    for (match of matches){
        if (match["date"]===matchDate){
            matchNo = match["match"];
        }
    };
    for (matchComment of matchComments){
        if (matchComment["match"]===matchNo){
            matchComment["comments"].push(newComment);
            fs.writeFileSync(commentsFile,JSON.stringify(matchComments));
            resp.send(matchNo);
        }
    };
});

app.listen(8090);
module.exports = app;