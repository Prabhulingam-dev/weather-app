

 let city;

async function setWeather(event){
     event.preventDefault();
      city = document.getElementById('cityname').value
      console.log(city)
      try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc4b48323a357bebcc41d3a32137b14e&units=metric`)
        let data = await response.json()
        console.log()
        document.getElementById('cname').innerHTML=`City : ${data.name}`
        document.getElementById('temp').innerHTML = `Temperature : ${data.main.temp} °C`  
        document.getElementById('humid').innerHTML=`Humidity : ${data.main.humidity} %`
        document.getElementById('wind').innerHTML=`Wind speed: ${data.wind.speed} Km/h`
      }
      catch(error){
        console.log('error message',error)
      }
}


document.getElementById('submitbtn').addEventListener('click',setWeather)
