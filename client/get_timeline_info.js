document.getElementById("du1s").addEventListener('click',function(event){
    fetch("http://127.0.0.1:8090/club?".concat("du1s"))
    .then(response=>response.json())
    .then(body=> {
        document.getElementById("clubName").innerHTML=body[0];
        document.getElementById("content").innerHTML=body[1];
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

document.getElementById("drb").addEventListener('click',function(event){
    fetch("http://127.0.0.1:8090/club?".concat("drb"))
    .then(response=>response.json())
    .then(body=> {
        document.getElementById("clubName").innerHTML=body[0];
        document.getElementById("content").innerHTML=body[1];
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

document.getElementById("su21").addEventListener('click',function(event){
    fetch("http://127.0.0.1:8090/club?".concat("su21"))
    .then(response=>response.json())
    .then(body=> {
        document.getElementById("clubName").innerHTML=body[0];
        document.getElementById("content").innerHTML=body[1];
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

document.getElementById("sua").addEventListener('click',function(event){
    fetch("http://127.0.0.1:8090/club?".concat("sua"))
    .then(response=>response.json())
    .then(body=> {
        document.getElementById("clubName").innerHTML=body[0];
        document.getElementById("content").innerHTML=body[1];
    })
    .catch(error => {
        console.error("Error:", error);
    });
});