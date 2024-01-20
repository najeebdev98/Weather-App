var apiKey="1dc01d89d2e18b866b17b32cfb78bcb1";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const city=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const icon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const respose=await fetch(`${url}${city}&appid=${apiKey}&units=metric`);
    if(respose.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await respose.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        if(data.weather[0].main=="Clouds"){
            icon.src="images/clouds.png";
        }else if(data.weather[0].main=="Clear"){
            icon.src="images/clear.png";
        }else if(data.weather[0].main=="Rain"){
            icon.src="images/rain.png";
        }else if(data.weather[0].main=="Drizzle"){
            icon.src="images/drizzle.png";
        }else if(data.weather[0].main=="Mist"){
            icon.src="images/mist.png";
        }else if(data.weather[0].main=="Haze"){
            icon.src="images/mist.png";
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        
    }   

}

btn.addEventListener("click",()=>{
    checkWeather(city.value);
});

