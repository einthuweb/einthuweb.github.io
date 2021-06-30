const array = [{name: "title1"},{name: "title2"},{name: "title3"}];

var getJSON = function(query, url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send(query + "/malayalam");
};


function getSearch(){
  var search = document.getElementById('SearchBox').value;
  console.log(search)
  getJSON(String(search) + '/malayalam', 'http://192.168.1.122:8080/search',
  function(err, data) {
    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {
      document.getElementById("deck").innerHTML = "";
      data.forEach(arr => 
        document.getElementById("deck").insertAdjacentHTML("beforeend",`<div class="card" style="width: 18rem; margin-bottom: 20px;">
        <img class="card-img-top" src="https://${arr.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${arr.title}</h5>
          <p class="card-text">${arr.desc}</p>
          <!-- <a href="#" class="btn btn-primary" id="playButton">Play</a> -->
          <form action="http://192.168.1.122:8080/play" method="post" id="PlayForm">
              <button type="submit" id="playBtn" class="btn btn-primary" name="play" value="${arr.url}">Play</button>
          </form>
        </div>
      </div>`));
    }
  });
}
document.getElementById('SearchButton').addEventListener('click', getSearch);





  