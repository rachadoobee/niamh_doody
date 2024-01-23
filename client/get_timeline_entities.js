async function loadImages (club) {
  const response = await fetch('http://127.0.0.1:8090/timeline?' + club);
  if (response.ok) {
    const imgName = await response.text();
    const html = `<img id='club${club}' class='card-img-top m-0' data-bs-toggle='modal' data-bs-target='#exampleModalCenter' src='./images/${imgName}'></img>`;
    document.getElementById(`timeline${club}`).innerHTML = html;
  } else {
    alert('Sorry cannot load timeline images, please check connection!');
  }
};

for (let i = 1; i <= 4; i++) {
  loadImages(i);
}
