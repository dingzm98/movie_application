var input = document.getElementById("textinput");
console.log("testing");

function searchItunes() {
    console.log(input.value);
    fetch('https://itunes.apple.com/search?term=' + input.value + "&limit=20")
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log("error " + response.status);
                return;
            }
            
            response.json().then(function(data) {
                console.log(data.results);
            })
        }
    )
    .catch(function(err) {
        console.log("Fetch error " + err);
    });
}