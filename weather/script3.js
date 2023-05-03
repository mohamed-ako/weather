// function getDayName(dateStr, locale)
// {
//     var d = new Date(dateStr);
//     d.toLocaleDateString(locale, { weekday: 'long' }); 
//     console.log("this day is : "+d); // Create a new Date object with the desired date

// }

function getWeather() {

       
    // var section1 = document.querySelectorAll("section");
    // sectionL1=Array.from(section1 );


    // sectionL.forEach(function(theSec) {
    //     theSec.classList.add('hideS');
    // })

    
    // sectionL1.forEach((v )=>{
    //     // v.classList.add('hideS');

    //     v.classList.remove('showS');
    // })

    var cityName = document.getElementById("cityInput").value;
    var bigC= document.querySelector("#weatherData");
    var bigM= document.querySelector(".bigM");
    var bigS= document.querySelector(".bigS");


    var numberOfDays = 5;
    var sec =document.querySelector("section");

    var request = new XMLHttpRequest();
    // let index=5;

    request.onload = function () {
        if (request.status === 200) {
            console.log(this.response);
            var response = JSON.parse(this.responseText);
            var forecast = response.forecast.forecastday;

            var existingMainElement = document.querySelectorAll("main");
            var listex=Array.from(existingMainElement);
            // if (existingMainElement) {
                listex.forEach(function (mainElement) {
                    mainElement.remove();
                });

                
       
            forecast.forEach(function (A) {
                var date = new Date(A.date_epoch * 1000 );
                // var n = date.getTime();

    var currentDate = new Date();
    var dayN = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    console.log("this day is : "+dayN);

                
                var dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
                console.log(dayName); 
                
                console.log("Date: ", A.date);
                console.log("Temperature: ", A.day.avgtemp_c);
                console.log("Condition: ", A.day.condition.text);
                console.log("Condition: ", A.day.condition.icon);

                var cont = document.createElement("main");             
                cont.classList="main";     
                var div = document.createElement("div");
                div.textContent = dayName;
                div.classList = "date";
                var img = document.createElement("img");
                img.src = "http:"+A.day.condition.icon;
                img.classList = "icon";
                var temperature = document.createElement("p");
                temperature.textContent = A.day.avgtemp_c +"C";

              
                var sec =document.createElement("section");
                    sec.classList="section";
                var divS =document.createElement("div");
                divS.classList="divS";    

                var day=document.createElement("p");
                day.classList="day"
                day.textContent=dayName;

                var place=document.createElement("div");
                place.classList="place";
               
                
                var city=document.createElement("p");
                city.classList="city";
                city.textContent=cityName;
                var country=document.createElement("p");
                country.classList="country";
                country.textContent=response.location.country;

                var centerdiv = document.createElement("div");
                centerdiv.classList="centerdiv"
                var bigImg=document.createElement("img");
                bigImg.src="http:"+A.day.condition.icon;
                bigImg.classList="bigImg"
                var temp=document.createElement("p");
                temp.classList="temp";
                temp.textContent=A.day.avgtemp_c +"C";

                var ss =document.createElement("div");
                ss.classList="insideS";

                var s1=document.createElement("p");
                s1.textContent=" max temp : "+A.day.maxtemp_c +"C";
                img1=document.createElement("img");
                img1.src="icons2/icons8-thermometer-up-100.png";
                var d1=document.createElement("div");

                var s2=document.createElement("p");
                s2.textContent=" min temp: "+A.day.mintemp_c +"C"+"\n"
                img2=document.createElement("img");
                img2.src="icons2/icons8-thermometer-down-96.png";
                var d2=document.createElement("div");

                var s3=document.createElement("p");
                s3.textContent=" max wind : "+A.day.maxwind_mph +"mph";
                img3=document.createElement("img");
                img3.src="icons/icons8-wind-96.png";
                var d3=document.createElement("div");

                var s4=document.createElement("p");
                s4.textContent=" total precip : "+A.day.totalprecip_mm+"mm";
                img4=document.createElement("img");
                img4.src="icons2/icons8-dew-point-96.png";
                var d4=document.createElement("div");

                var s5=document.createElement("p");
                s5.textContent=" chance of rain : "+A.day.daily_chance_of_rain+"%";
                img5=document.createElement("img");
                img5.src="icons2/icons8-umbrella-96.png";
                var d5=document.createElement("div");

                var s6=document.createElement("p");
                s6.textContent=" humidity : "+A.day.avghumidity+"%";
                img6=document.createElement("img");
                img6.src="icons/icons8-wet-96.png";
                var d6=document.createElement("div");



                divS.append(day);
                sec.append(divS);

                place.append(city);
                place.append(country);

                sec.append(place);

                centerdiv.append(bigImg);
                centerdiv.append(temp);

                sec.append(centerdiv);
                // divS.append(temp);

                // divS.append(s0);
                d1.append(img1);
                d2.append(img2);
                d3.append(img3);
                d4.append(img4);
                d5.append(img5);
                d6.append(img6);

                d1.append(s1);
                d2.append(s2);
                d3.append(s3);
                d4.append(s4);
                d5.append(s5);
                d6.append(s6);

                ss.append(d1);
                ss.append(d2);
                ss.append(d3);
                ss.append(d4);
                ss.append(d5);
                ss.append(d6);
                sec.append(ss);


             
                // divS.append(ss);
                // divS.append(ss);

            

                div.append(img)
                cont.append(div);
                // cont.append(s);
                cont.append(temperature);
                bigM.append(cont);

                // cont.append(condition);
                bigS.append(sec);
                bigC.append(bigM);
                bigC.append(bigS);



                var mains = document.querySelectorAll(".main");
                var section = document.querySelectorAll("section");
                // var showS=document.querySelectorAll(".showS2");
                sectionL=Array.from(section );
                mainL=Array.from(mains );
  
                sectionL.forEach( function(theSec) {
                    // if()
                    theSec.classList.remove('showS');

                      var paragraph = theSec.querySelector('.day');
                      if (paragraph.textContent === dayN) {
                        console.log("It'd the day: " + dayN);
                        theSec.classList.remove('showS');
                      
                        theSec.classList.add('showS')
                        // theSec.classList='showS2'd
                        // theSec.classList.toggle('showS');

                      }

                  });
     

                mainL.forEach((m , i)=>{

                    m.addEventListener("click", function(m) {
                        console.log("The loop is working");
                            sectionL.forEach((m )=>{
                                m.classList.remove('showS');
                              
                                
                        section[i].classList = "showS";
                    })
                    })
                })
    

            });
        } else {
            alert("Error: " + request.status);
        }
    };


    var apiKey = "bb1029aca20b4520a19132632233004"; // Replace with your actual API key
    request.open("GET", "https://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&q=" + cityName + "&days=" + numberOfDays, true);
    request.send();



}
document.querySelector("#color").addEventListener("click",function(){
color =document.querySelector("#color").value;

if(color==="black"){
    // console.log("it's blue")

    document.documentElement.style.setProperty('--color', "black");
    document.documentElement.style.setProperty('--color-dark', "#0406005a");
    document.documentElement.style.setProperty('--bgc', "#ffffff36");
    document.documentElement.style.setProperty('--text', "white");

    // document.querySelector("body").style.color="white";




}
if(color==="white"){
    console.log("it's light")
    document.documentElement.style.setProperty('--color', "white");
    document.documentElement.style.setProperty('--color-dark', "#ffffff55");
    document.documentElement.style.setProperty('--bgc', "#04060022");
    document.documentElement.style.setProperty('--text', "black");

    // document.querySelector("body").style.color="black";

}

})
