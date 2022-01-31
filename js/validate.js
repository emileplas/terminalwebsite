
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
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
        // document.getElementById('input-form').prepend(document.getElementById('about'));
        document.getElementById(elementName).style.display = 'block';
        document.getElementById('input-form').value = '';
        divArray.push(elementName)
        console.log("We were in the first posstion")
        console.log("This is the divArray: " + divArray)
        
    }
    else if(divArray.length > 0 && divArray.includes(elementName)){
        var copy = document.getElementById(elementName).cloneNode(true)
        copy.appendAfter(document.getElementById(latestDiv));
        document.getElementById('input-form').value = '';
        console.log("We were in the second possition")
        divArray.push(elementName)
        
    }else{
        document.getElementById(elementName).appendAfter(document.getElementById(latestDiv));
        document.getElementById(elementName).style.display = 'block';
        document.getElementById('input-form').value = '';
        console.log("We were in the third possition")
        
    }
}

function validate(){
 
    
    let x = document.forms["inputForm"]["input"].value;
    switch (x) {
        case 'dark':
            darkMode();
            return false;
            // $(document).ready(function(){
            //     $.getscript("js/darkMode.js",function(){
            //         darkMode();
            //         });
            //     // $('#input').change(function(){
            //     //     alert("alert here");
            //     // });
            // });

          

            console.log("we received dark")
            console.log("this is x " + x)
            break;
        case 'light':
            darkMode();
            break;
        case 'about':
            insertElement('about');
            break;
            // if(divArray.length === 0){
            //     // document.getElementById('input-form').prepend(document.getElementById('about'));
            //     document.getElementById('about').style.display = 'block';
            //     document.getElementById('input-form').value = '';
            //     divArray.push('about')
            //     console.log("This is the divArray: " + divArray)
            //     break;
            // }
            // else if(divArray.length > 0 && divArray.includes('about')){
            //     var copy = document.getElementById('about').cloneNode(true)
            //     copy.appendAfter(document.getElementById(latestDiv));
            //     document.getElementById('input-form').value = '';
            //     divArray.push('about')
            //     break;
            // }else{
            //     document.getElementById('about').appendAfter(document.getElementById(latestDiv));
            //     document.getElementById('about').style.display = 'block';
            //     document.getElementById('input-form').value = '';
            //     break;
            // }
 
        case 'projects':
            insertElement('projects')
            break;
            // if(divArray.length === 0){
            //     document.getElementById('projects').style.display = 'block';
            //     document.getElementById('input-form').value = '';
            //     divArray.push('projects')
            //     console.log("This is the divArray: " + divArray)
            //     break;
            // }else if(divArray.length > 0 && divArray.includes('projects')){
            //     var copy = document.getElementById('projects').cloneNode(true)
            //     copy.appendAfter(document.getElementById(latestDiv));
            //     document.getElementById('input-form').value = '';
            //     divArray.push('projects')
            //     break;
            // }else{
            //     document.getElementById('projects').appendAfter(document.getElementById(latestDiv));
            //     document.getElementById('projects').style.display = 'block';
            //     document.getElementById('input-form').value = '';
            //     break
            // }



        default:
            break;
    }
}

