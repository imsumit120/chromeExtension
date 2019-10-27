var timeleft = 6;
var downloadTimer = setInterval(function() {
  timeleft--;
  var str = "Countdown";
  var div = document.getElementById("lga");
  div.textContent = `${str} ${timeleft} sec`;
  div.style = "color:red";
  div.style.fontWeight = "bold";
  div.style.fontSize = "40px";
  if (timeleft <= 0) {
    clearTimeout(timer);
    Redirect();
  }
}, 1000);

function Redirect() {
  window.location = "http://www.news.google.co.in";
}
setTimeout("Redirect()", 5000);
