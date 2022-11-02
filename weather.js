// // https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=a682103fe439c6c482c31b5544441977
// // apiKey=a682103fe439c6c482c31b5544441977
// let weather={
//     fetchweather:function(city){
//         fetch(
//             "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=a682103fe439c6c482c31b5544441977" 
//         )
//         .then((response)=>response.json())
//         .then((data)=>this.displayweather(data));
//     },
//     displayweather: function(data){
//   const { name }= data;
//   const{icon,description}=data.weather[0];
//   const{temp,humidity}=data.main;
//   const{speed}=data.wind;

//   console.log(name,icon,description,temp,humidity,speed);
//     }
// }
{/* <input type="text" placeholder="Search">
        <button class="fas fa-search" ></button>
        <h2 class="city">weather in Delhi</h2>
        <div class="temp"><h1>30°C</h1></div>
        <img src="" alt="" class="icon">
        <div class="Humidity"> Humidity = 40%</div>
        <div class="description">description</div>
        <div class="wind">wind speed:30km/h</div>
let  */}
let search=document.querySelector('#input');
let Btn=document.querySelector('#Btn');
let city=document.querySelector('.city');

Btn.addEventListener('click',()=>{
    let city_Name=search.value;
    let finalURL=`https://api.openweathermap.org/data/2.5/weather?q=${city_Name}&units=metric&appid=a682103fe439c6c482c31b5544441977`
    console.log(finalURL);
    fetch(finalURL)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        console.log(data.name)
        console.log(data.main.temp)
        console.log(data.main.humidity)
        console.log(data.wind.speed);
        console.log(data.weather.description);
        document.body.style.backgroundImage="Url('https://source.unsplash.com/random/1600x900/?landscape')"
        // console.log(data.base[1]);

        // document.querySelector('.icon').src=
        city.innerHTML=`
        <h2 class="city">weather in ${data.name}</h2>
        <div class="temp"><h1>${data.main.temp}°C</h1></div>
        <div class="Humidity"> Humidity = ${data.main.humidity}%</div>
        <div class="wind">wind speed:${data.wind.speed}km/h</div>
        
        `
    })
})










