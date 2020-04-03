function getTodos() {
  var stext = document.getElementById("ytSearch").value;
  axios
    .get(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBOxtVp_Q9hRdHYDGjXcpzOgrzJ5hy3qyQ",
      {
        params: {
          part: "snippet",
          maxResults: 3,
          q: stext,
          order: "viewCount"
        }
      }
    )
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

function showOutput(res) {
  var obj = JSON.parse(res);
  console.log(obj.data);
  /*
  document.getElementById("res").innerHTML = `
  <div>
    <pre>Status: ${res.data.items}</pre>
  </div>
`;
*/
}
