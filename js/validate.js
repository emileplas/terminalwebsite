//function to switch between dark and light mode
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
}

//function to clear the input field after the command is submitted
function clearInput(){
    document.getElementById('input-form').reset();
}

//functions to guarantee that element is inserted before or after
Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
  },false;

Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
  },false;


//variables for completing contact form
var name;
var email;
var message;



function getName(){
    return name;
}

function getEmail(){
    return email;
}

function getMessage(){
    return message;
}

function setName(nameInput){
    return name = nameInput;
}

function setEmail(emailInput){
    return email = emailInput;
}

function setMessage(messageInput){
    return message = messageInput;
}

//first function for contact form responsible for creating a contact form and allowing the visitor to insert the their name
function contactForm(){
    function createNewContactDiv(){
        return new Promise((resolve, reject) => {
            insertElement('contact')
            .then(function(response){
                document.getElementById('input-form').style.display = 'none';
                return true;
            })
            .then(function defineLatestContactDiv(response){                     
                
        
                //define what is the latest contact form
                var allElements = []
                
                for(i=0; i<divArray.length; i++){
                    if(divArray[i].includes('contact'))
                    allElements.push(divArray[i])
                }
                var lastContactDiv = allElements[allElements.length -1];
        
                //get the id of the latest contact form
                var existingId = document.getElementById(lastContactDiv).id;
            
                var existingIDNumber = parseInt(existingId.match(/\d/g));
        
                // console.log("this is the latest id number of the contact form" + existingIDNumber)
        
                resolve(existingIDNumber)
                
                })
           })

    }
    


    
    createNewContactDiv()
    .then(function(response){
        console.log("we also received the response here" + response)
        return new Promise((resolve, reject) => { //@TODO: clean up unnecessary promise function
            document.getElementById('contact' + response).innerHTML = 
                `<p><span class="user">administrator@Line-By-Line: </span><span class="location">Contact %</span></p>
        
                <div id="name-form-div">
                    <p>Please provide your name:</p>
                    <form id="name-form" name="name-form" onsubmit="nameInserted(name.value); return false">
                        <label class="user" for="name">visitor@Line-By-Line: </label>
                        <label class="location" for="name">~ %</label>
                        <input type="text" name="name" id="name" autocomplete="off"></input>
                        <input type="submit" hidden />
                    </form>
                </div>`
            
            //to ensure that contact section is fully visible    
            document.getElementById('contact' + response).scrollIntoView() 
            
            function setFocusToNameInput(){
                console.log("setFocusToName called");
                document.getElementById("name").focus();
            }

            setFocusToNameInput();
            
            
            
        })
    })
    
}
//end of first contact function

//insert name function. Called, once a name is inserted
function nameInserted(nameInserted){
    return new Promise((resolve, reject) =>{

    setName(nameInserted);

    console.log('we inserted a name ' + nameInserted);

    var name = nameInserted;

    function defineLatestContactDiv(){                     
        return new Promise((resolve, reject)=>{

        //define what is the latest contact form
        var allElements = []
        
        for(i=0; i<divArray.length; i++){
            if(divArray[i].includes('contact'))
            allElements.push(divArray[i])
        }
        var lastContactDiv = allElements[allElements.length -1];

        //get the id of the latest contact form
        var existingId = document.getElementById(lastContactDiv).id;
    
        var existingIDNumber = parseInt(existingId.match(/\d/g));

        // console.log("this is the latest id number of the contact form" + existingIDNumber)

        resolve(existingIDNumber)
        }) 
    }

    defineLatestContactDiv()
    .then(function(response){
        document.getElementById('contact' + response).innerHTML = 
`        <p><span class="user">administrator@Line-By-Line: </span><span class="location">Contact %</span></p>
        <p>Name: ${name}</p>
        <div id="email-form-div">
        <p>Please provide your e-mail address:</p>
        <form id="email-form" name="email-form" onsubmit="emailInserted(email.value);return false">
            <label class="user" for="email">visitor@Line-By-Line: </label>
            <label class="location" for="email">~ %</label>
            <input type="email" name="email" id="email" autocomplete="off"></input>
            <input type="submit" hidden />
        </form>
        </div>`;


        //to ensure that contact section is fully visible
        document.getElementById('contact' + response).scrollIntoView() 
        
        document.getElementById("email").focus();

    })
    
})
}
//end of name inserted



//start of email function
function emailInserted(emailInserted){
    return new Promise((resolve, reject) =>{

    setEmail(emailInserted);

    console.log('we inserted a email ' + emailInserted);

    
    var name = getName();
    var email = emailInserted;

    function defineLatestContactDiv(){                     
        return new Promise((resolve, reject)=>{

        //define what is the latest contact form
        var allElements = []
        
        for(i=0; i<divArray.length; i++){
            if(divArray[i].includes('contact'))
            allElements.push(divArray[i])
        }
        var lastContactDiv = allElements[allElements.length -1];

        //get the id of the latest contact form
        var existingId = document.getElementById(lastContactDiv).id;
    
        var existingIDNumber = parseInt(existingId.match(/\d/g));

        // console.log("this is the latest id number of the contact form" + existingIDNumber)

        resolve(existingIDNumber)
        }) 
    }

    defineLatestContactDiv()
    .then(function(response){
        document.getElementById('contact' + response).innerHTML = 
        `<p><span class="userform">administrator@Line-By-Line: </span><span class="location">Contact %</span></p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <div id="message-form-div">
        <p>Please provide your message:</p>
        <form id="message-form" name="messageform" onsubmit="messageInserted(message.value);return false">
            <label class="user" for="message">visitor@Line-By-Line: </label>
            <label class="location" for="message">~ %</label>
            <input type="text" name="message" id="message" autocomplete="off"></input>
            <input type="submit" hidden />
        </form>
        </div>`

        //to ensure that contact section is fully visible
        document.getElementById('contact' + response).scrollIntoView() 

        document.getElementById("message").focus();

        // resolve(message)

    })
    
})
}

function messageInserted(messageInserted){
    return new Promise((resolve, reject) =>{

        setMessage(messageInserted);

        console.log('we inserted a message ' + messageInserted);
    
        var email = getEmail();
        var name = getName();
        var message = messageInserted;
        
        function defineLatestContactDiv(){                     
            return new Promise((resolve, reject)=>{
    
            //define what is the latest contact form
            var allElements = []
            
            for(i=0; i<divArray.length; i++){
                if(divArray[i].includes('contact'))
                allElements.push(divArray[i])
            }
            var lastContactDiv = allElements[allElements.length -1];
    
            //get the id of the latest contact form
            var existingId = document.getElementById(lastContactDiv).id;
        
            var existingIDNumber = parseInt(existingId.match(/\d/g));
    
            // console.log("this is the latest id number of the contact form" + existingIDNumber)
    
            resolve(existingIDNumber)
            }) 
        }
    
        defineLatestContactDiv()
        .then(function(response){
            
            document.getElementById('contact' + response).innerHTML = 
            `<p><span class="user">administrator@Line-By-Line: </span><span class="location">Contact %</span><span class="message"> You inserted the following message</span></p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            <div id="review-form-div">
            <p>Please confirm the message to send. Type YES or NO:</p>
            <form id="review-form" name="reviewform" onsubmit="reviewInserted(review.value);return false">
                <label class="user" for="review">visitor@Line-By-Line: </label>
                <label class="location" for="review">~ %</label>
                <input type="text" name="review" id="review" autocomplete="off"></input>
                <input type="submit" hidden />
            </form>
            </div>`
    
    
            //to ensure that contact section is fully visible
            document.getElementById('contact' + response).scrollIntoView() 

            document.getElementById("review").focus();
            
        })
    
    })
}

function reviewInserted(reviewAnswerInserted){
    return new Promise((resolve, reject) =>{

        console.log("this is the reviewanser " + reviewAnswerInserted)

        var reviewAnswer = reviewAnswerInserted;

        var email = getEmail();
        var name = getName();
        var message = getMessage();
        // var existingIDNumber

        // function getExistingIDNumber(){
        //     return existingIDNumber
        // }

        var reviewCleaned = (reviewAnswer.replace(/\s/g, '')).toLowerCase();
        
        function defineLatestContactDiv(){                     
            return new Promise((resolve, reject)=>{
    
            //define what is the latest contact form
            var allElements = []
            
            for(i=0; i<divArray.length; i++){
                if(divArray[i].includes('contact'))
                allElements.push(divArray[i])
            }
            var lastContactDiv = allElements[allElements.length -1];
    
            //get the id of the latest contact form
            var existingId = document.getElementById(lastContactDiv).id;
        
            var existingIDNumber = parseInt(existingId.match(/\d/g));
    
            // console.log("this is the latest id number of the contact form" + existingIDNumber)
    
            resolve(existingIDNumber)
            }) 
        }

        var existingIDNumber = defineLatestContactDiv()
       


        defineLatestContactDiv()
        .then(function(response){  
            var idNumber = response;

            if(reviewCleaned === 'yes'){
                console.log("this should be reviewCleanded " + reviewCleaned)
                console.log(typeof reviewCleaned);
               
                console.log("this should be the id number" + idNumber)
                var formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('message',message);

                /* Issue "ajax request" to server. Change /post-to-url to the appropriate 
                url on your server */
                fetch('../contact.php', {
                    body: formData, // body: ['name': getName(), 'email': getEmail(), 'message': getMessage()],
                    method: "post"
                })
                .then(function(response) {
                    console.log(response);
                    if(response.ok === true){
                        console.log('form submitted succesfully');
                        console.log(response)

                        //insert success message
                        document.getElementById('contact' + idNumber).innerHTML = 
                        `<p><span class="user">administrator@Line-By-Line: </span><span class="location">Contact %</span><span class="message">Your message was send succesfully. I will contact you soon.</span></p>`;
                        
                        //make input form visible again and focus on input form
                        document.getElementById('input-form').style.display = 'block';
                        document.getElementById('input-form').focus()
    
                        //to ensure that contact section is fully visible
                        document.getElementById('contact' + response).scrollIntoView() 

                    }else{
                        var error = {status: response.status, statusText: response.statusText}

                        throw error;
                        
                    }


                })
                .catch(function(error) {

                    console.log(JSON.stringify(error));
                    // console.log(error.status)

                    var errorCode = JSON.stringify(error.status);
                    var errorMessage = error.statusText;
                    
                    document.getElementById('contact' + idNumber).innerHTML = 
                    `<p><span class="user">administrator@Line-By-Line: </span><span class="location">Contact %</span><span class="contact-error"> Something went wrong while submitting the contact form. We received the following error:<br/><br/>${errorCode}: ${errorMessage} <br/><br/>Please try again later.</span></p>`;
                    

                    // to ensure that contact section is fully visible
                    document.getElementById('contact' + response).scrollIntoView() 
                    
                    // redirect to input
                    document.getElementById('input-form').style.display = 'block';
                    document.getElementById('input-form').focus();


                });
            }else if(reviewCleaned ===  'no'){
                document.getElementById('contact' + idNumber).innerHTML = 
                `<p><span class="user">administrator@Line-By-Line: </span><span class="location">Contact %</span><span class="message"> You decided to not send the message. If you want to send a message later on, you can type contact in the command line to send a new message.</span></p>`;
                
                document.getElementById('input-form').style.display = 'block';
                document.getElementById('input-form').focus()

                //to ensure that contact section is fully visible
                document.getElementById('contact' + response).scrollIntoView() 
            }
            else{
                console.log("we were in the last section")
                var message = getMessage();
                // document.getElementById('contact' + idNumber).innerHTML = 
                // `<p><span class="user">administrator@Line-By-Line: </span><span class="location">Contact %</span><span class="contact-error"> This command is not recognized. Please type YES or NO to submit the form. To leave the form, without submitting the message, type NO. Redirecting to submit question in </span><span class="" id="redirect-count-down"></span></p>`;
                

                var timeleft = 10;
                var redirectTimer = setInterval(function(){
                    if(timeleft <= 0){
                        clearInterval(redirectTimer);
                        // document.getElementById("redirect-count-down").innerHTML = "Finished";
                        messageInserted(message);
                    } else {
                        document.getElementById('contact' + idNumber).innerHTML = 
                        `<p><span class="user">administrator@Line-By-Line: </span><span class="location">Contact %</span><span class="contact-error"> This command is not recognized. Please type YES or NO to submit the form. To leave the form, without submitting the message, type NO. Redirecting to submit question in ${timeleft} seconds</span></p>`;
                        
                        //to ensure that contact section is fully visible
                        document.getElementById('contact' + response).scrollIntoView() 

                        // document.getElementById("redirect-count-down").innerHTML = timeleft + " seconds";
                     }
                timeleft -= 1;
                }, 1000);
            }


    })



    })
}

//array that holds an overview of all the divs that are present on the page
divArray = [];

//function that takes care of displaying and/or inserting new divs
function insertElement(elementName){
    return new Promise((resolve,reject) => { 
    var latestDiv = divArray[divArray.length -1]

    if(divArray.length === 0){
        //    function inserts first element
        document.getElementById(elementName + 1).style.display = 'block';
        
        //divarray is updated
        divArray.push(elementName + 1)
        console.log("These are the divs present at the page " + divArray)
        resolve(true)

        // //input field is cleared
        // clearInput()
    }
    else if(divArray.length > 0 && divArray.includes(elementName + 1)){
        // function takes care of multiple requests for same div (e.g. about - about - about - projects - about), each time sorting after the latest div.
        var allElements = []
        
        for(i=0; i<divArray.length; i++){
            if(divArray[i].includes(elementName))
            allElements.push(divArray[i])
        }
        var lastDiv = allElements[allElements.length -1];

        //first a new id number is defined
        var existingId = document.getElementById(lastDiv).id;
    
        var existingIDNumber = parseInt(existingId.match(/\d/g));

        var newIdNumber = existingIDNumber+1;

        
        //second: the id is changed
        var copy = document.getElementById(elementName + 1).cloneNode(true)
        copy.id = elementName + newIdNumber;

        //third: the element is inserted
        copy.appendAfter(document.getElementById(latestDiv));
        

        //fourth: divarray is updated
        divArray.push(copy.id)
        console.log("These are the divs present at the page " + divArray)

        resolve(true)
        
    }else{
        // function inserts object for first time if there is already an object printed
        document.getElementById(elementName+1).appendAfter(document.getElementById(latestDiv));
        document.getElementById(elementName+1).style.display = 'block';

        //divarray is updated
        divArray.push(elementName+1)
        console.log("These are the divs present at the page " + divArray)

        resolve(true)


     
        
    }
})
}

//function to guarantee that latest inserted div is visible for user:
function scrollToLatestDiv(){
    document.getElementById(divArray[divArray.length -1]).scrollIntoView();
}

function validate(){
 
    
    let x = document.forms["inputForm"]["input"].value;
    switch (x) {
        case 'dark':
            darkMode();
            insertElement('darkmode');
            clearInput(); // in order to clear input field after command is submitted
            scrollToLatestDiv();
            break;

        case 'light':
            darkMode();
            insertElement('lightmode')
            clearInput()// in order to clear input field after command is submitted
            scrollToLatestDiv()
            break;

        case 'about':
            insertElement('about');
            clearInput(); // in order to clear input field after command is submitted
            scrollToLatestDiv()
            break;

        case 'projects':
            insertElement('projects');
            clearInput(); // in order to clear input field after command is submitted
            scrollToLatestDiv()
            break;
        case 'contact':
            contactForm();
            clearInput(); // in order to clear input field after command is submitted
            scrollToLatestDiv();
            break;

        default:
            insertElement('error');
            clearInput(); // in order to clear input field after command is submitted
            scrollToLatestDiv()
            break;
    }
}

