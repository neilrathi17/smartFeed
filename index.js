getdata()
function water()
{
    requestt("https://api.thingspeak.com/update?api_key=SUY4417W22YI4RKQ&field2=1000")
    console.log('sent water data')
}
function food()
{
    requestt("https://api.thingspeak.com/update?api_key=SUY4417W22YI4RKQ&field1=1000")
    console.log('sent food data')
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
            document.getElementById("water-refill").innerHTML = data["feeds"][1]["field2"];
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