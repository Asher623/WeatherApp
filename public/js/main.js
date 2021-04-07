var weatherValue;
var weatherData;
var weatherArray = [];



$(function(){
    
    $("ul #cardItem").click(function(e){
        $(e).remove();
    })

    
    $("#searchForm").submit(function(e){
        e.preventDefault();
        weatherValue = $("#cityInput").val();
        weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherValue}&appid=acb29936a61605fc79d8db611c8d3c8b&units=metric`).then(response=> response.json()).then(data =>{
            console.log(data);
            
            
            if(data.cod == "404"){
                
                $("#notFoundLabel").text("Please enter a valid city")
                $("#notFoundLabel").css('visibility', 'visible')
                

            }else{
                if(weatherArray.includes(data.id)){
                    $("#notFoundLabel").text("This city has already been added.") 
                    $("#notFoundLabel").css('visibility', 'visible')
                }else{
                    $(".weatherList").append(` 
                <li id = "cardItem">
                    <div class="card" style="width: 15rem; height: 18rem; border-radius: 25px;">
                        <div class="card-body">
                            <h5 class="card-title">${data.name} <sup id = "supCountry">${data.sys.country}</sup></h5>
                            <spam>${data.main.temp}</spam>
                            <sup id = "supTemp">°C</sup>
                            <br>
                            <img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width = "80" height = "80"></img>
                            <p class="card-text">${data.weather[0].main} </p>
                            
                        </div>
                    </div>
                </li>`);
                weatherArray.push(data.id);
                $("#notFoundLabel").css('visibility', 'hidden')
                }
                
                
            }
    
        });
        console.log(weatherValue);
    })
    

   

});


