const btn = document.getElementById("messages");
function getmessage(){
    document.getElementById("output").innerHTML ="Your name is : " + btn.value;
    btn.value ="";
}