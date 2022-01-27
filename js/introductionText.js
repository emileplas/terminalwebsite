document.addEventListener('DOMContentLoaded',function(event){

    var introMessages = [ "I am a developer.", "This website is my portfolio website.", "blabla.", "another message"];

    function insertHead(message, key){
        userClass = 'user'
        locationClass = 'location'
        document.getElementById("introMessage").innerHTML += `<p id='messageID${key}'><span class=${userClass}>administrator@Line-By-Line: </span><span class=${locationClass}>~ %</span><span class="message" id="firstmessage">${message}</span></p>`
    }

    for(i=0;i<introMessages.length;i++){
        insertHead(introMessages[i], i)
    }
    
})