



document.addEventListener('DOMContentLoaded',function getYear(){
    console.log("the year function was called")
    var year = new Date().getFullYear();
    document.getElementById('year').innerHTML = `${year}`;
    
}



)