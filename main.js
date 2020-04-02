function getTodos() {
  var stext = document.getElementById("ytSearch").value;
  axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: "AIzaSyBOxtVp_Q9hRdHYDGjXcpzOgrzJ5hy3qyQ",
        part: "snippet",
        maxResults: 3,
        q: stext,
        order: "viewCount"
      }
    })
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}

function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div>
    <pre>Status: ${res.data}</pre>
  </div>
`;
}
