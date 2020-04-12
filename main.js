function getTodos() {
  var stext = document.getElementById("ytSearch").value;
  axios
    .get(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyD6mUR1KuljIVgDFGEQGhY-UwZrTCu_MxQ",
      {
        params: {
          part: "snippet",
          q: stext,
          type: "video",
          maxResults: 6,
          order: "relevance",
          safeSearch: "moderate"
        }
      }
    )
    .then(res => showOutput(res))                    
    .catch(err => console.error(err));
}

function showOutput(res) {
  window.res = res;
  var stext = document.getElementById("ytSearch").value;
  document.getElementById("res1").innerHTML = "";
  for (var i = 0; i <= res.data.items.length; i++) {
    document.getElementById("res1").innerHTML += `
  <div id=${i} class="resultsDiv" onclick="openLink(id) ">
  <p>
  <img class="thumbImg" style="vertical-align:middle" src="http://img.youtube.com/vi/${res.data.items[i].id.videoId}/sddefault.jpg" alt="alt image" width="100">
  <span>${res.data.items[i].snippet.title}</span>
  </p>
  </div>
  `;
  }
}

function openLink(j) {
  document.getElementById("res").innerHTML = "";
  document.getElementById("res").innerHTML = `
    <div class="vid-container">
    <iframe class="frame-container"
    src="https://www.youtube.com/embed/${res.data.items[j].id.videoId}"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    ></iframe>
    <h1>${res.data.items[j].snippet.title}</h1>
    <h5>${res.data.items[j].snippet.description}</h5>
    </div>
  `;
}
