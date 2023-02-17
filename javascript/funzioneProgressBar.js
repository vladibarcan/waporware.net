var i = 0;
function move() 
{
  if (i == 0) 
  {
    i = 1;
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() 
    {
      if (width >= 100) 
      {
        clearInterval(id);
        i = 0;
        document.getElementById("button").disabled = false;
      } 
      else 
      {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

}

function vai()
{
    window.open('home.html','_self');
}

