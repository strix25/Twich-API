//TODO:
/*
1. get streamers status from twitch api 
2. get info on what is he streaming.


User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.

User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.
*/
function dod(){
    

let link = `https://wind-bow.glitch.me/twitch-api/channels/freecodecamp`;

var xhr = new XMLHttpRequest();
xhr.open('GET', link);
xhr.onload = function() {
    if (this.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
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
dod();