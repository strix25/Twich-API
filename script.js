//TODO:
/*
1. get streamers status from twitch api 
2. get info on what is he streaming.


User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.

User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.
*/
document.addEventListener("DOMContentLoaded", function() {
var fCCStatus = document.getElementById("freeCodecamp");
var sodaStatus = document.getElementById("sodapoppin");
var timStatus = document.getElementById("timthetatman");



function dod(el){
    

let link = `https://wind-bow.glitch.me/twitch-api/streams/${el}`;

var xhr = new XMLHttpRequest();
xhr.open('GET', link);
xhr.onload = function() {
    if (this.status === 200) {
        var data = JSON.parse(xhr.responseText);
        let statusEl = document.getElementById(`${el}`);
        let parentEl = statusEl.parentNode;
        
        if(data.stream === null){
            console.log("stream is offline");
            statusEl.innerHTML = "offline";
            parentEl.style.backgroundColor="lightcyan";
        }else{
            statusEl.innerHTML = `ONLINE : ${data.stream.game}`;
            parentEl.style.backgroundColor="greenyellow";
        }

        console.log(data);
        console.log("first part");
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
        console.log("second part");
    }
};
xhr.send(null);

}


arr = ["freeCodecamp", "sodapoppin", "timthetatman"];
arr.forEach(function(element) {
    dod(element);
    
});


function goToTwitch(){
    window.location = 'http://www.google.com';
}

});
