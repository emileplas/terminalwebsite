document.addEventListener('DOMContentLoaded',function(event){

    var introMessages = ["I am a developer.", "This website is my portfolio website.", "blabla.", "another message"];



    function insertIntroCommand(message,key){
        document.getElementById("introMessage").innerHTML += `<p id='messageID${key}'><span class=${userClass}>administrator@Line-By-Line: </span><span class=${locationClass}>~ %</span><span class="message" id="messageSpan${key}"> </span></p>`
        var i = 0;
        var txt = message; /* The text */
        var speed = 50; /* The speed/duration of the effect in milliseconds */      
        var userClass = 'user'
        var locationClass = 'location'
        var id = `messageSpan${key}`

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById(id).innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter()
    }

    insertIntroCommand(introMessages[0],1)

   
    
    // function typeWriter(message, key){
    //     // new Promise((resolve, reject) => {
    //         // message.forEach(letter => document.getElementById( `messageSpan${key}`).innerHTML += letter)
    //             var message = message;
    //             var speed = 50;
    //             var userClass = 'user'
    //             var locationClass = 'location'
    //             document.getElementById("introMessage").innerHTML += `<p id='messageID${key}'><span class=${userClass}>administrator@Line-By-Line: </span><span class=${locationClass}>~ %</span><span class="message" id="messageSpan${key}"></span></p>`
          
    //             if (y < message.length) {
    //               document.getElementById(`messageSpan${key}`).innerHTML += message.charAt(y);
    //               y++;
    //               setTimeout(typeWriter, speed);
    //             }
    //             else if(y===message.length -1){
    //                 resolve(true)
    //             }
    //           }

    // typeWriter("I am a developer.", 1)
      
    //     setTimeout(function() {   
    //         document.getElementById( `messageSpan${key}`).innerHTML += message[y]
    //         y++;                  
    //         if (y < message.length) {           
    //             typeWriter(message, key);            
    //         }
    //         else{
    //             resolve()
    //         }                     
    //     }, 100)
    // })



    
    // async function insertHead(message, key){
    //     new Promise((resolve, reject) => {
    //         userClass = 'user'
    //         locationClass = 'location'
    //         document.getElementById("introMessage").innerHTML += `<p id='messageID${key}'><span class=${userClass}>administrator@Line-By-Line: </span><span class=${locationClass}>~ %</span><span class="message" id="messageSpan${key}"></span></p>`
    //         var response = await typeWriter(message, key);
    //         if(response === true){
    //             resolve(true)
    //         }
    // })
    // }

    // var i = 0;               

    // function introLoop(introMessages) {         
    //     setTimeout(async function() {   
    //         insertHead(introMessages[i], i)
    //         .then((response){
    //             if(response === true){
    //                 i++
    //             }
    //         })
         
                           
    //         if (i < introMessages.length) {           
    //             introLoop(introMessages);            
    //         }                     
    //     }, 1500)
    // }

    // introLoop(introMessages);

    // for(i=0;i<introMessages.length;i++){
    //     insertHead(introMessages[i], i)
        
    // }
    
})