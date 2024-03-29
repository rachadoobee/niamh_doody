async function loadComments (match) {
  const response = await fetch('http://127.0.0.1:8090/comments?' + match);
  if (response.ok) {
    const comments = await response.json();

    let html = "<ul class='list-group'>\n";
    for (const comment of comments) {
      html += `<li class='list-group-item'>${comment}</li>\n<br>`;
    }
    html += '</ul>\n';
    document.getElementById('comments').innerHTML = html;
  } else {
    alert('Sorry you cannot show match comments, please check connection!');
  }
};

for (let i = 1; i <= 9; i++) {
  const matchElement = document.getElementById(`match${i}`);
  if (matchElement) {
    matchElement.addEventListener('click', async function (event) {
      loadComments(i);
    });
  }
}

export { loadComments };
