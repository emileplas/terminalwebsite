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



function getName(){
    return name;
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
        return new Promise((resolve, reject) => { 
            document.getElementById('contact' + response).innerHTML = 
                `<p><span class="user">administrator@Line-By-Line: </span><span class="location">Contact %</span></p>
        
                <div id="name">
                    <p>Please provide your name:</p>
                    <form id="name-form" name="name-form" onsubmit="nameInserted(name.value); return false">
                        <label class="user" for="name">visitor@Line-By-Line: </label>
                        <label class="location" for="name">~ %</label>
                        <input type="text" name="name" id="name" autofocus></input>
                        <input type="submit" hidden />
                    </form>
                </div>`
            
        })
    })
}
//end of first contact function

//insert name function. Called, once a name is inserted
function nameInserted(nameInserted){
    return new Promise((resolve, reject) =>{

    
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
        <div id="email">
        <p>Please provide your e-mail address:</p>
        <form id="email-form" name="email-form" onsubmit="emailInserted(email.value);return false">
            <label class="user" for="email">visitor@Line-By-Line: </label>
            <label class="location" for="email">~ %</label>
            <input type="email" name="email" id="email" autofocus></input>
            <input type="submit" hidden />
        </form>
        </div>`;
        resolve(name)
  

    })
    
})
}
//end of name inserted



//start of email function
function emailInserted(emailInserted){
    return new Promise((resolve, reject) =>{


    console.log('we inserted a email ' + emailInserted);

    var email = emailInserted;
    var name = getName();

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
        `<p><span class="user">administrator@Line-By-Line: </span><span class="location">Contact %</span></p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <div id="message">
        <p>Please provide your message:</p>
        <form id="message-form" name="messageform" onsubmit="return false">
            <label class="user" for="name">visitor@Line-By-Line: </label>
            <label class="location" for="name">~ %</label>
            <input type="text" name="name" id="name" autofocus></input>
            <input type="submit" hidden />
        </form>
        </div>`


        resolve(email)

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

function validate(){
 
    
    let x = document.forms["inputForm"]["input"].value;
    switch (x) {
        case 'dark':
            darkMode();
            insertElement('darkmode')
            clearInput(); // in order to clear input field after command is submitted
            break;

        case 'light':
            darkMode();
            insertElement('lightmode')
            clearInput(); // in order to clear input field after command is submitted
            break;

        case 'about':
            insertElement('about');
            clearInput(); // in order to clear input field after command is submitted
            break;

        case 'projects':
            insertElement('projects');
            clearInput(); // in order to clear input field after command is submitted
            break;
        case 'contact':
            contactForm();
            break;

        default:
            insertElement('error');
            clearInput(); // in order to clear input field after command is submitted
            break;
    }
}

