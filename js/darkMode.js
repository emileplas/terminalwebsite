function darkMode() {
    var body = document.body;
    var input = document.getElementById("input")
    var user = document.getElementsByClassName('user')
    var headerDark = document.getElementById('header-dark');
    var headerLight = document.getElementById('header-light');

    body.classList.toggle("light-mode");
    input.classList.toggle("light-mode");




    //makes sure that all elements from the user class are visible when light mode is switched on.
    for(i=0;i<user.length;i++){
        user[i].classList.toggle('user-light-mode')
    }



    //sets the header to a different style for better viewing purpuses when light mode is switched on. Changes back to dark header when light mode is switched off
    if(headerDark.style.display === 'none'){
        headerDark.style.display = 'block';
        headerLight.style.display = 'none'
    }
    else{
        headerLight.style.display = 'block';
        headerDark.style.display = 'none';
    }


    
    console.log(user);
    
 }

