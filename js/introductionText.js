document.addEventListener('DOMContentLoaded',function(event){

    var introMessages = ["I am a developer.", "This website is my portfolio website.", "blabla.", "another message"];

    var y=0;
    
    function typeWriter(message, key){
        new Promise((resolve, reject) => {
      
        setTimeout(function() {   
            document.getElementById( `messageSpan${key}`).innerHTML += message[y]
            y++;                  
            if (y < message.length) {           
                typeWriter(message, key);            
            }
            else{
                resolve()
            }                     
        }, 100)
    })
}
    
    async function insertHead(message, key){
        new Promise((resolve, reject) => {
        userClass = 'user'
        locationClass = 'location'
        document.getElementById("introMessage").innerHTML += `<p id='messageID${key}'><span class=${userClass}>administrator@Line-By-Line: </span><span class=${locationClass}>~ %</span><span class="message" id="messageSpan${key}"></span></p>`
        resolve(typeWriter(message, key));
    })
    }

    var i = 0;               

    function introLoop(introMessages) {         
        setTimeout(async function() {   
            insertHead(introMessages[i], i)
            i++
                           
            if (i < introMessages.length) {           
                introLoop(introMessages);            
            }                     
        }, 1500)
    }

    introLoop(introMessages);

    // for(i=0;i<introMessages.length;i++){
    //     insertHead(introMessages[i], i)
        
    // }
    
})