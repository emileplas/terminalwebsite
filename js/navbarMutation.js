    //TODO: add function to check whether other sections are visible and adapt navbar for each section
    let isAboutVisible = false;

    function setAboutToVisible(){
        return isAboutVisible = true;
    }
    function setAboutIsNotVisible(){
        return isAboutVisible = false;
    }

    const inViewObserver = new IntersectionObserver(entries => 
        { entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`${entry.target.id} is visible`);
                setAboutToVisible()
               
            } else {
                console.log(`${entry.target.id} is NOT visible`);
                setAboutIsNotVisible()
               
            }
        })
    }, { threshold: .5 })

    const about = document.getElementById('about1');
    var myNav = document.getElementById('gui-nav');

  

    document.body.addEventListener('scroll', function(){
        
        inViewObserver.observe(about)
        if(isAboutVisible){
            myNav.classList.add("nav-colored");
        }else{
            myNav.classList.remove("nav-colored");
        }
    })
    
    