var input = document.getElementById("textinput");
console.log("testing");

function searchItunes() {
    console.log(input.value);
    fetch('https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=' + input.value + "&limit=10")
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log("error " + response.status);
                return;
            }
            
            response.json().then(function(data) {
                let musicList = document.querySelector("#songList");
                musicList.innerHTML = "";
                
                if (data.resultCount === 0) {
                    musicList.innerHTML = "<br> NO songs were found from the movie...";
                }
                let songResults = data.results;
                
                songResults.map((val) => {
                    let divSection = document.createElement('div');
                    musicList.setAttribute('class', 'songlist');
                    musicList.appendChild(divSection);
                    
                    
                    let backgroundImg = document.createElement('ItuneImg');
                    backgroundImg.setAttribute('src', val.artworkUrl100);
                    
                    let artist = document.createElement('elem');
                    artist.innerHTML = "<br> " + val.artistName;
                    
                    let albumn = document.createElement('elem');
                    albumn.innerHTML = "<br> " + val.collectionName;
                    
                    let songName = document.createElement('elem');
                    songName.innerHTML = "<br> " + val.trackName;
                    
                    divSection.appendChild(backgroundImg);
                    divSection.appendChild(artist);
                    divSection.appendChild(albumn);
                    divSection.appendChild(songName);
                    
                })
                console.log(data.results);
            })
        }
    )
    .catch(function(err) {
        console.log("Fetch error " + err);
    });
}
