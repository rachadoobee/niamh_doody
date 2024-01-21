async function loadComments(match){
    let response = await fetch('http://127.0.0.1:8090/comments?' + match);
    if(response.ok){
      let comments = await response.json();

      let html = "<ul class='list-group'>\n";
      for(let comment of comments){
        html += `<li class='list-group-item'>${comment}</li>\n<br>`;
      }
      html += "</ul>\n";
      document.getElementById('comments').innerHTML = html;
    } else{
        alert("Sorry you cannot type you have a 404");
    }
};

for (let i = 1; i <= 9; i++) {
    let matchElement = document.getElementById(`match${i}`);
    if (matchElement) {
        matchElement.addEventListener('click', function(event) {
            loadComments(i);
        })
}
}

export { loadComments };