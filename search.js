var city = document.getElementById("location");

function cinema(){
console.log(city);
var settings = {
  dataType: "json",
  url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+city.value+"&term=movie&limit=3",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer 3lPrK-f6RW-wZ-NmDBAOWNw_VQ_Kj_-H1jtwYC2beUVHptMntr3uOw8UjZMInKlmr-TEYpsXxbik_omSjZOpELUYyqQOjtXnd-ynGvDdw4V6f4cKv1Zpgr6k1hTLXHYx"
  }
}

$.ajax(settings).done(function (response) {
    console.log(response);
  let locationList = document.querySelector("#locationList");
        locationList.innerHTML = "";
  let divSection = document.createElement('div');
        locationList.setAttribute('class', 'locationList');
        locationList.appendChild(divSection);
  var img1 = document.createElement("img");
	img1.setAttribute('src', response.businesses[0].image_url);
	img1.setAttribute('alt', 'na');
	divSection.appendChild(img1);

  let name = document.createElement('elem');
        name.innerHTML = "<br>" + "name:" + response.businesses[0].name;
        
  let address = document.createElement('elem');
        address.innerHTML = "<br>" + "Rating: " + response.businesses[0].rating;

  divSection.appendChild(name);
  divSection.appendChild(address);
});
}