const apiKey = "a16e14a116a4ac9181140aef28c98683";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&" 

const button = document.querySelector("button");

async function checkWeather( latitude, longitude) {
    const response = await fetch(apiUrl + 'lat=' + latitude + '&lon=' + longitude + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity2").innerHTML = data.main.humidity;
    document.querySelector(".wind2").innerHTML = data.wind.speed + " kmph";
    document.querySelector(".visibility2").innerHTML = data.visibility + " m";
    document.querySelector(".direction2").innerHTML = data.wind.deg + "°"; 
    document.querySelector(".feelslike2").innerHTML = data.main.feels_like + "°C";
    document.querySelector(".pressure2").innerHTML = data.main.pressure + "mb"; 

    document.querySelector(".box").style.display = "flex";
}

/*searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

})*/ 



button.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        button.innerText = "Your browser does not support ";
    }
});

function onSuccess(position) {
    console.log(position)
    checkWeather(position.coords.latitude, position.coords.longitude)   
}
function onError(error) {
    if (error.code == 1) {
        button.innerText = "You denied the request"; 
    }else if (error.code ==2 ){
        button.innerText = "Location not available"; 
    }else{
        button.innerText = "Something went wrong"
    }
    button.setAttribute("disabled", "true"); 
}


