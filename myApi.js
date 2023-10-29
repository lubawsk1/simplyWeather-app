
const apiKey = "dc56566b6c577a9b74cd2be6d2e2636a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.getElementById("icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.getElementById("error").style.display='block';
        document.getElementById("weather").style.display='none';
    }else{
        let data = await response.json();
        const status = data.weather[0].main;
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
       switch (status) {
        case 'Clouds':
            weatherIcon.src='images/clouds.png';
            break;
        case 'Clear':
            weatherIcon.src='images/clear.png';
            break;
        case 'Drizzle':
            weatherIcon.src='images/drizzle.png';
            break;
        case 'Mist':
            weatherIcon.src='images/mist.png';
            break;
        case 'Rain':
            weatherIcon.src='images/rain.png';
            break;
        default:
            weatherIcon.src='images/snow.png';
       }
       document.getElementById("weather").style.display='block';
       document.getElementById("error").style.display='none';


    }

  
}


document.addEventListener("DOMContentLoaded", function() {
    let bttn = document.getElementById("button");
    if (bttn) {
        bttn.addEventListener("click", function() {
            city = document.getElementById('search').value;
            checkWeather(city);

        }); 
    }
});

