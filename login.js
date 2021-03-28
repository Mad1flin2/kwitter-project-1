function login()
{
   var uname = document.getElementById("unamein").value;
localStorage.setItem("uname",uname);
window.location.assign("http://127.0.0.1:5500/room/room.html");
};
