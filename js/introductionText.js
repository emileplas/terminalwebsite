document.addEventListener('DOMContentLoaded',function(event){

    var introMessages = ["I am a developer.", "This website is my portfolio website.", "blabla.", "another message"];
    var y=0;


    function insertIntroCommand(message,key){
        return new Promise((resolve, reject) => {
        var userClass = 'user'
        var locationClass = 'location'


        document.getElementById("introMessage").innerHTML += `<p id='messageID${key}'><span class=${userClass}>administrator@Line-By-Line: </span><span class=${locationClass}>~ %</span><span class="message" id="messageSpan${key}"> </span></p>`
        var i = 0;
        var txt = message; /* The text */
        var speed = 50; /* The speed/duration of the effect in milliseconds */      

        var id = `messageSpan${key}`;

        function typeWriter() {

            if (i < txt.length) {
                document.getElementById(id).innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
            else{
                
                resolve();
            }
       
           
        }

        typeWriter()
        
      
    })
    }

    var timeBetweenIndividualMessages = 2000;
        
    function insertAllMessages(){
        if(y<introMessages.length){
            insertIntroCommand(introMessages[y],y)
            .then(response => y++)
            setTimeout(insertAllMessages, timeBetweenIndividualMessages);
        }
        else{
            console.log('finished all sentences')
            document.getElementById("input-form").style.display = 'block'
        }
    }

    insertAllMessages()
   
})