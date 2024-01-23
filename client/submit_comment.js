import { loadComments } from './show_comments.js';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newCommentForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const inputElement = document.getElementById('newCommentText');
    const matchDate = document.getElementById('date');
    const data = {
      date: matchDate.innerHTML,
      comment: inputElement.value
    };

    try {
      const response = await fetch('http://127.0.0.1:8090/newcomment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Process the response or handle success
        console.log('Comment posted successfully');
        const matchNo = await response.text();
        inputElement.value = '';
        loadComments(matchNo);
      } else {
        // Handle errors
        alert('Unable to post comment, please try again');
      }
    } catch (error) {
      alert('Unable to connect to server, please check connection!');
    }
  });
});
