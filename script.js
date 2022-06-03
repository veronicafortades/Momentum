
// for name
function setName(){
    const firstname = document.getElementById('first-name').value;
    localStorage.setItem("FIRSTNAME", firstname);
}

//for main focus today
function setToday(){
    const mainfocus1 = document.getElementById('focus-today').value;
    localStorage.setItem("MAIN", mainfocus1);
}
function setToday1(){
    const mainfocus = document.getElementById('main-focus').value;
    localStorage.setItem("MAIN", mainfocus);
}

//for the realtime clock
function realtimeClock(){

    var rtClock = new Date();
    
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    // var day = rtClock.getUTCDay();
    // var month = rtClock.getMonth();
    // var date = rtClock.getDate();
    // var year = rtClock.getFullYear();

    //Add Am and Pm system
    var amPm =( hours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format
    hours = (hours % 12) || 12;
    //Pad the hours,minutes and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

 
    //Display  the Clock


    document.getElementById('clock').innerHTML =
        hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);


    if (hours <= "12" && amPm === "AM"){
        document.getElementById('greet').innerHTML = "Good Morning, " 
        document.body.style.background =" url(./images/bgmorning.jpg) no-repeat" 
        document.body.style.backgroundSize = "cover"
        
    }
    else if(hours == "12" && amPm === "PM" ){
        document.getElementById('greet').innerHTML = "Good AfterNoon, "
        document.body.style.background =" url(./images/bgafternoon.jpg) no-repeat" 
        document.body.style.backgroundSize = "cover"
        document.querySelector('.quote').style.color = "white"
    }
    else if(hours <= "05" && amPm === "PM" ){
        document.getElementById('greet').innerHTML = "Good AfterNoon, "
        document.body.style.background =" url(./images/bgafternoon.jpg) no-repeat" 
        document.body.style.backgroundSize = "cover"
    }
    else if(hours >= "06" && amPm === "PM"){
        document.getElementById('greet').innerHTML = "Good Evening, "
        document.body.style.background =" url(./images/bgevening.jpg) no-repeat" 
        document.body.style.backgroundSize = "cover"
    }
}


//for todo modal

var modal = document.getElementById("wrapper");

// Get the button that opens the modal
var btn = document.getElementById("todo");
var close = document.getElementById("close");


// When the user clicks the button, open the modal 
btn.onclick = ()=> {
  wrapper.style.right = "0";
  wrapper.style.transition = "all 1s ease";
}

// When the user clicks on (x), close the modal
close.onclick =()=> {
  wrapper.style.right = "-250px";
  wrapper.style.transition = "all 1s ease";
}


// for editing name
const name1 = document.getElementById('result-firstname');
const firstname = localStorage.getItem('FIRSTNAME');
const inputFirstname = document.getElementById('first-name'); 
// Get the button that opens the modal
const pen = document.getElementById("pen");
const form = document.getElementById("form1")
const close1 = document.getElementById("close1")

pen.onclick = ()=> {
    form.style.display = "block";
    inputFirstname.value = firstname;

}
close1.onclick = ()=> {
    form.style.display = "none";
}
//for main focus  input hide

