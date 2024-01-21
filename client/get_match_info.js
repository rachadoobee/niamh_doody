document.getElementById("match1").addEventListener('click',function(event){
    fetch("http://127.0.0.1:8090/match?".concat("1"))
        .then(response=>response.json())
        .then(body=>{
            document.getElementById("date").innerHTML=body[0];
            document.getElementById("opponent").innerHTML=body[1];
            document.getElementById("location").innerHTML=body[2];
            document.getElementById("score").innerHTML=body[3];
            document.getElementById("result").innerHTML=body[4];
            document.getElementById("goalsScored").innerHTML=body[5];
            document.getElementById("assists").innerHTML=body[6];
        })
        .catch(error => {
            console.error("Error:", error);
        });
});

document.getElementById("match2").addEventListener('click',function(event){
    fetch("http://127.0.0.1:8090/match?".concat("2"))
        .then(response=>response.json())
        .then(body=>{
            document.getElementById("date").innerHTML=body[0];
            document.getElementById("opponent").innerHTML=body[1];
            document.getElementById("location").innerHTML=body[2];
            document.getElementById("score").innerHTML=body[3];
            document.getElementById("result").innerHTML=body[4];
            document.getElementById("goalsScored").innerHTML=body[5];
            document.getElementById("assists").innerHTML=body[6];
        })
        .catch(error => {
            console.error("Error:", error);
        });
});

document.getElementById("match3").addEventListener('click',function(event){
    fetch("http://127.0.0.1:8090/match?".concat("3"))
        .then(response=>response.json())
        .then(body=>{
            document.getElementById("date").innerHTML=body[0];
            document.getElementById("opponent").innerHTML=body[1];
            document.getElementById("location").innerHTML=body[2];
            document.getElementById("score").innerHTML=body[3];
            document.getElementById("result").innerHTML=body[4];
            document.getElementById("goalsScored").innerHTML=body[5];
            document.getElementById("assists").innerHTML=body[6];
        })
        .catch(error => {
            console.error("Error:", error);
        });
});