getdata()
function water()
{
    requestt("https://api.thingspeak.com/update?api_key=SUY4417W22YI4RKQ&field2=12")
    console.log('sent water data')
    gettime1()
}

function food()
{
    requestt("https://api.thingspeak.com/update?api_key=SUY4417W22YI4RKQ&field1=4")
    console.log('sent food data')
    gettime2()
}

function requestt(url)
{
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    //document.getElementById("loading").innerHTML ='<img class="preloader" src="assets/img/Eclipse-loader-200px.svg" alt="">'
    xhr.send()
    xhr.onload=function()
    {
        if(this.status==200 && this.readyState==4)
        {
            var data = JSON.parse(this.responseText)
            getdata()
            //document.getElementById("loading").innerHTML = '';
    
        }
        else if(this.status==400){
            alert('Error in getting items')
        } 
        else if(this.status==401){
         // document.getElementById("loading").innerHTML = '';
            console.log('Please authenticate user')
        }
        //getdata()
    }
}
    
function getdata()
{
    console.log("request made")
    url= "https://api.thingspeak.com/channels/1695002/feeds.json?api_key=BRUGPIARM8C5JE0O&results=2"
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    //document.getElementById("loading").innerHTML ='<img class="preloader" src="assets/img/Eclipse-loader-200px.svg" alt="">'
    xhr.send()
    xhr.onload=function()
    {
        if(this.status==200 && this.readyState==4)
        {
            var data = JSON.parse(this.responseText)
            console.log(data)
            checkpet(data);
            document.getElementById("water-refill").innerHTML = data["feeds"][0]["field2"];
            document.getElementById("food-refill").innerHTML = data["feeds"][1]["field1"];
    
        }
        else if(this.status==400){
            alert('Error in getting items')
        } 
        else if(this.status==401){
         // document.getElementById("loading").innerHTML = '';
            console.log('Please authenticate user')
        }
    }
}

function gettime1()
{
var currentdate = new Date();
var datetime =currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds()+ " on "+currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear();
+ 
console.log(datetime)
document.getElementById("water-time").innerHTML = datetime;
}

function gettime2()
{
var currentdate = new Date();
var datetime =currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds()+ " on "+currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear();
+ 
console.log(datetime)
document.getElementById("food-time").innerHTML = datetime;
}

function checkpet(data)
{
    var checker=data["feeds"][0]["field3"];
    console.log(data["feeds"][0]["field3"])
    //checker=1;
    if(checker===1)
    {
        console.log('checking')
        document.getElementById("petalert").innerHTML = "Pet is near the feeder";
       var pokemon= document.getElementsByClassName('alert');
       console.log(pokemon)
       pokemon[0].className += ' class_two'

    }
    else
    {
        console.log('checking')
        //var active = document.querySelector("alert");
        var pokemon= document.getElementsByClassName('alert');
        pokemon[0].classList.remove("class_two");
        document.getElementById("petalert").innerHTML = "Pet is not near the feeder";
    }
}