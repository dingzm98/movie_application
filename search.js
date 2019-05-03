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

  let phone = document.createElement('elem');
        phone.innerHTML = "<br>" + "Phone:" + response.businesses[0].phone + "<br>";  


  divSection.appendChild(name);
  divSection.appendChild(address);
  divSection.appendChild(phone);

//---------------------------------------------------------------------
   var img2 = document.createElement("img");
	img2.setAttribute('src', response.businesses[1].image_url);
	img2.setAttribute('alt', 'na');
	divSection.appendChild(img2);

  let name2 = document.createElement('elem');
        name2.innerHTML = "<br>" + "name:" + response.businesses[1].name;
        
  let address2 = document.createElement('elem');
        address2.innerHTML = "<br>" + "Rating: " + response.businesses[1].rating;

  let phone2 = document.createElement('elem');
        phone2.innerHTML = "<br>" + "Phone: " + response.businesses[1].phone + "<br>";  


  divSection.appendChild(name2);
  divSection.appendChild(address2);
  divSection.appendChild(phone2);


  //---------------------------------------------------------------------
   var img3 = document.createElement("img");
	img3.setAttribute('src', response.businesses[2].image_url);
	img3.setAttribute('alt', 'na');
	divSection.appendChild(img3);

  let name3 = document.createElement('elem');
        name3.innerHTML = "<br>" + "name:" + response.businesses[2].name;
        
  let address3 = document.createElement('elem');
        address3.innerHTML = "<br>" + "Rating: " + response.businesses[2].rating;

  let phone3 = document.createElement('elem');
        phone3.innerHTML = "<br>" + "Phone: " + response.businesses[2].phone + "<br>";  


  divSection.appendChild(name3);
  divSection.appendChild(address3);
  divSection.appendChild(phone3);
});
}