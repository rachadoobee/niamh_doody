for (let i = 1; i <= 4; i++) {
  const timelineElement = document.getElementById(`timeline${i}`);

  if (timelineElement) {
    timelineElement.addEventListener('click', async function (event) {
      fetch(`http://127.0.0.1:8090/club?${i}`)
        .then(response => response.json())
        .then(body => {
          document.getElementById('clubName').innerHTML = body[0];
          document.getElementById('content').innerHTML = body[1];
        })
        .catch(error => {
          alert('Unable to get information about club, please check connection!');
        });
    });
  };
}
