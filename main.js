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
          order: "viewCount"
        }
      }
    )
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

function showOutput(res) {
  window.res = res;
  console.log(res);
  var stext = document.getElementById("ytSearch").value;
  //console.log(res.data);
  //console.log(res.data.items[i].snippet.title);
  document.getElementById("res1").innerHTML = "";
  for (var i = 0; i <= 5; i++) {
    document.getElementById("res1").innerHTML += `
  <div id=${i} class="resultsDiv" onclick="openLink(id)">
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
    <div class="icont">
    <iframe class="embed-responsive-item"
    src="https://www.youtube.com/embed/${res.data.items[j].id.videoId}" width="1000px" height="500px"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    ></iframe>
    </div>
  `;
}

/*
<div class="icont">
  <div class="embed-responsive embed-responsive-21by9">
  <iframe class="embed-responsive-item"
  src="https://www.youtube.com/embed/${res.data.items[0].id.videoId}"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  ></iframe>
  </div>
  </div>


<pre>Status: ${res.data.items[0].snippet.title}</pre>
*/
