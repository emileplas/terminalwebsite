
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 Element.prototype.appendBefore = function (element) {
    element.parentNode.insertBefore(this, element);
  },false;

  Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
  },false;

 divArray = [];

function validate(){
 
    var latestDiv = divArray[divArray.length -1]
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
            if(divArray.length === 0){
                // document.getElementById('input-form').prepend(document.getElementById('about'));
                document.getElementById('about').style.display = 'block';
                document.getElementById('input-form').value = '';
                divArray.push('about')
                console.log("This is the divArray: " + divArray)
                break;
            }
            else{
                document.getElementById('about').appendAfter(document.getElementById(latestDiv));
                document.getElementById('about').style.display = 'block';
                document.getElementById('input-form').value = '';
                break;
            }
 
        case 'projects':
            if(divArray.length === 0){
                document.getElementById('projects').style.display = 'block';
                document.getElementById('input-form').value = '';
                divArray.push('projects')
                console.log("This is the divArray: " + divArray)
                break;
            }else if(divArray.length > 0 && divArray.includes('projects')){
                var copy = document.getElementById('projects').cloneNode(true)
                copy.appendAfter(document.getElementById(latestDiv));
                console.log("we are in the cloning zone. This is the divArray" + divArray)
            }else{
                document.getElementById('projects').appendAfter(document.getElementById(latestDiv));
                document.getElementById('projects').style.display = 'block';
                document.getElementById('input-form').value = '';
                break
            }



        default:
            break;
    }
}

