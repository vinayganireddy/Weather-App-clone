var input=document.getElementById("input");
var btn=document.getElementById("btn");
var temperature=document.getElementById("tmp");
var city=document.getElementById("city");
var climate=document.getElementById("climate");

var apikey="e5a181be99f806a22efe30f31d4aee02";  

btn.addEventListener("click",()=>
{
    if(input.value=="")
    {
        alert("please enter the city");
    }
    else
    {
     var inputt=input.value
     var url=(`https://api.openweathermap.org/data/2.5/weather?q=${inputt}&appid=${apikey}`);
     fetch(url).then(result=>result.json())
     .then(data=>
        {
            console.log(data);
            const{name}=(data);
            const{feels_like}=data.main;
            const{description}=data.weather[0];
            city.innerHTML=name;
            tmp.innerHTML=Math.floor(feels_like-273);
            climate.innerHTML=description;


        })
        .catch(()=>
        {
            alert("no data found");
        })

    }
})