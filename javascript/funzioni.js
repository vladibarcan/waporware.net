var stop=document.getElementById("audio");
var start=document.getElementById("audio");

var body=document.getElementById("corpo");
var start=document.getElementById("start");

setTimeout(function showStart()
{
   
   start.style.display="block";
   
},1500)

setTimeout(function showBody()
{
   
   body.style.display="block";

},1000)

setTimeout(function startMusic()
{
  let a= new Audio("https://www.youtube.com/watch?v=cCq0P509UL4&t=30s");
  a.play();
},1000)

function thisVolume(volume_value)
    {
        var myaudio = document.getElementById("audio");
        myaudio.volume = volume_value/100;
        
    }

function music_stop() 
{
  stop.pause();
}

function music_start()
{
  start.play();
}

function showProfilo() 
{
  var x = document.getElementById("profilo");

    x.style.display = "block";
  
}

function closeProfilo()
{
  var x = document.getElementById("profilo");

  if (x.style.display === "block") 
  {
    x.style.display = "none";
  } 
}

function showIndirizzo() 
{
  var x = document.getElementById("indirizzo");

    x.style.display = "block";
  
}

function closeIndirizzo()
{
  var x = document.getElementById("indirizzo");

    x.style.display = "none";
}

function showUmano() 
{
  var x = document.getElementById("umano");

    x.style.display = "block";
  
}

function closeUmano()
{
  var x = document.getElementById("umano");

    x.style.display = "none";
}

function showPCTO() 
{
  var x = document.getElementById("pcto");

    x.style.display = "block";
  
}

function closePCTO()
{
  var x = document.getElementById("pcto");

    x.style.display = "none";
}

function showOpzioni() 
{
  var x = document.getElementById("opzioni");

    x.style.display = "block";
  
}

function closeOpzioni()
{
  var x = document.getElementById("opzioni");

    x.style.display = "none";
}


dragElement2(document.getElementById("indirizzo"));
function dragElement2(elmnt) 
{
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "drag")) 
  {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "drag").onmousedown = dragMouseDown;
  } 
  else 
  {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) 
  {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("profilo"));
function dragElement(elmnt) 
{
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "drag")) 
  {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "drag").onmousedown = dragMouseDown;
  } 
  else 
  {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) 
  {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement3(document.getElementById("umano"));
function dragElement3(elmnt) 
{
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "drag")) 
  {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "drag").onmousedown = dragMouseDown;
  } 
  else 
  {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) 
  {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


dragElement4(document.getElementById("pcto"));
function dragElement4(elmnt) 
{
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "drag")) 
  {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "drag").onmousedown = dragMouseDown;
  } 
  else 
  {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) 
  {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


var timeDisplay = document.getElementById("tempo");
function refreshTime() 
{
  var dateString = new Date().toLocaleString("it-IT", {timeZone: "Europe/Rome"});
  var formattedString = dateString.replace(","," - ");
  timeDisplay.innerHTML = dateString;
}

setInterval(refreshTime, 1000);
