async function loadImages(club){
    let response = await fetch('http://127.0.0.1:8090/timeline?' + club);
    if(response.ok){
      let img_name = await response.text();
      let html = `<img id='club${club}' class='card-img-top m-0' data-bs-toggle='modal' data-bs-target='#exampleModalCenter' src='./images/${img_name}'></img>`;
      document.getElementById(`timeline${club}`).innerHTML = html;
    } else{
        alert("Sorry you cannot type you have a 404");
    }
};

for (let i = 1; i <= 4; i++) {
    loadImages(i)
}