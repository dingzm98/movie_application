var input = document.getElementById("textinput");
var title = document.getElementById("movietitle");
var year = document.getElementById("year");
console.log(year);

function callAPI(){
    $.getJSON('http://www.omdbapi.com/?t='+ input.value + '&apikey=94ef0bff').then(function(response){
        console.log(response);
        // var image = response.Poster;
        // if(image != "N/A"){
        //     $('img').attr('src', image);
        // }

        let movieInfo = document.querySelector("#movieInfo");
        movieInfo.innerHTML = "";

        let divSection = document.createElement('div');
        movieInfo.setAttribute('class', 'movie');
        movieInfo.appendChild(divSection);

        var image = document.createElement("img");
        image.setAttribute('src', response.Poster);
        image.setAttribute('alt', 'na');
        divSection.appendChild(image);
        
        let name = document.createElement('elem');
        name.innerHTML = "<br> " + response.Title;
        
        let year = document.createElement('elem');
        year.innerHTML = "<br> " + response.Year;
        
        let score = document.createElement('elem');
        score.innerHTML = "<br> " + response.imdbRating;

        let runtime = document.createElement('elem');
        runtime.innerHTML = "<br> " + response.Runtime;
        
        let rating = document.createElement('elem');
        rating.innerHTML = "<br> " + response.Rated;

        let production = document.createElement('elem');
        production.innerHTML = "<br> " + response.Production;

        divSection.appendChild(name);
        divSection.appendChild(year);
        divSection.appendChild(score);
        divSection.appendChild(runtime);
        divSection.appendChild(rating);
        divSection.appendChild(production);
        
        // var movietitle = response.Title;
        // if(movietitle!= "N/A"){
        //     $('#movie').text("Movie Title: " + movietitle);
        // }
        // $('#name').html(response.Title);
        // $('#year').html(response.Year);
        // $('#score').html(response.imdbRating);
        // $('#runtime').html(response.Runtime);
        // $('#rating').html(response.Rated);
        // $('#production').html(response.Production);
    })
}