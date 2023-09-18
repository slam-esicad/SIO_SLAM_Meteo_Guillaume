async function getvalue() {

    var city = document.getElementById("city").value;

    var response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=14d4d94cf3bfbf3e9e35e7155e243848&units=metric");
    var  data = await response.json();

    var temp = Math.floor(data.main.temp)
    document.getElementById("temp").innerHTML= "La température à " + city +" est de " + temp + "°C";

    var icon = data.weather[0].icon
    document.getElementById("icon").innerHTML= "<img id='iconimg'src='https://openweathermap.org/img/w/"+icon+".png'>";

    console.log(data)
}