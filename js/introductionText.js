document.addEventListener('DOMContentLoaded',function(event){

    var introMessages = ["I am a full stack developer.", "You are currently on the command version of my website", `Please type one of the following commands to get to know me: **about *projects. **To contact me, insert contact in the command line.`, "another message"];
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

        function insertLetter(i){
            return new Promise((resolve, reject) => {
                if(txt.charAt(i)==='*'){
                    document.getElementById(id).innerHTML += `<br/>`;
                    console.log("we were at the line break section")
                    resolve(i)
                }else{
                    document.getElementById(id).innerHTML += txt.charAt(i);
                    resolve(i);
                } 

            })
        }

        function typeWriter(i) {

            if (i < txt.length) {
                insertLetter(i)

                .then(function(response){
                    return new Promise((resolve, reject) => { 
                        // console.log("first response " + response); 
                        var increasedNumber = response + 1
                        resolve(increasedNumber)
                        
                    })
                })
                .then(async function(response){
                    // console.log("Second respone " + response)
                    var newNumber = await response

                    setTimeout(function(){
                        typeWriter(newNumber)
                    }
                    , speed)
                })

                
            }
            else{
                
                resolve(key);
            }
       
           
        }

        typeWriter(i)
        
      
    })
    }

    var timeBetweenIndividualMessages = 2000;
        
    function insertAllMessages(y){
        var y = y;
        if(y<introMessages.length){
            insertIntroCommand(introMessages[y],y)
            .then(function(response){
                return new Promise((resolve, reject) => {
                    // console.log("We received a response " + response)
                    var newSentence = response + 1
                        resolve(newSentence)
                    })
                

            })
            .then(function(response){
                // console.log("we also received the response here " + response)
                insertAllMessages(response)
            })

        }
        else{
            console.log('finished all sentences')
            document.getElementById("input-form").style.display = 'block'
            function setFocusToTextBox(){
                document.getElementById("input").focus();
                console.log("focus function called")
            }
            setFocusToTextBox()
        }
    }

    insertAllMessages(y)
   
})