var city = document.getElementById("location");

function cinema(){
console.log(city);
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+city.value+"&term=movie&limit=3",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer 3lPrK-f6RW-wZ-NmDBAOWNw_VQ_Kj_-H1jtwYC2beUVHptMntr3uOw8UjZMInKlmr-TEYpsXxbik_omSjZOpELUYyqQOjtXnd-ynGvDdw4V6f4cKv1Zpgr6k1hTLXHYx"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
}