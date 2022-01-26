
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
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
        default:
            break;
    }
}

