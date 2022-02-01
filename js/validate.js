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

//array that holds an overview of all the divs that are present on the page
divArray = [];

//function that takes care of displaying and/or inserting new divs
function insertElement(elementName){
    var latestDiv = divArray[divArray.length -1]

    if(divArray.length === 0){
        //    function inserts first element
        document.getElementById(elementName + 1).style.display = 'block';
        
        //divarray is updated
        divArray.push(elementName + 1)
        console.log("These are the divs present at the page " + divArray)

        //input field is cleared
        
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

        //the input field is cleared:
        clearInput();
        
    }else{
        // function inserts object for first time if there is already an object printed
        document.getElementById(elementName+1).appendAfter(document.getElementById(latestDiv));
        document.getElementById(elementName+1).style.display = 'block';

        //divarray is updated
        divArray.push(elementName+1)

        //input field is cleared
        clearInput();

        console.log("These are the divs present at the page " + divArray)
     
        
    }
}

function validate(){
 
    
    let x = document.forms["inputForm"]["input"].value;
    switch (x) {
        case 'dark':
            darkMode();
          
            break;
        case 'light':
            darkMode();
            break;
        case 'about':
            insertElement('about');
            break;


 
        case 'projects':
            insertElement('projects')
            break;




        default:
            break;
    }
}

