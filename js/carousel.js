var tiles = document.getElementsByClassName('tile');
var activeTile = document.getElementsByClassName('active-tile')[0];



// var arrowUpArray = document.getElementById(`arrow-up-${indexOfActiveTile}`);
// var arrowDown = document.getElementById(`arrow-down-${indexOfActiveTile}`);




// arrowUp.addEventListener('click', function(){
//     var previousActiveTile = tiles[indexOfActiveTile];
//     var nextActiveTile = tiles[indexOfActiveTile--]

//     previousActiveTile.classList.remove('active-tile');
//     nextActiveTile.classList.add('active-tile');
//     console.log('The current active tile is ' + nextActiveTile.id)
    
// })

// arrowDown.addEventListener('click', function(){

function nextTile(){
    var indexOfNextActiveTile;

    if(indexOfActiveTile === tiles.length-1){
        indexOfNextActiveTile = 0;
        console.log("This is the index of the next active tile " + indexOfNextActiveTile)
    }else{
        indexOfNextActiveTile = indexOfActiveTile + 1;
        console.log("This is the index of the next active tile " + indexOfNextActiveTile)
    }
            
    var previousActiveTile = tiles[indexOfActiveTile];
    var nextActiveTile = tiles[indexOfNextActiveTile];

  

    previousActiveTile.classList.remove('active-tile');
    nextActiveTile.classList.add('active-tile');

    // console.log('The current active tile is ' + nextActiveTile.id);


    // console.log('This should be the new indexOfActiveTile' + indexOfActiveTile)

    // console.log(previousActiveTile.classList);

    // console.log("This is the index of the previousactive tile" + indexOfActiveTile)
    
}

var arrowDownArray = document.getElementsByClassName('arrow-down');

for (var i = 0; i < arrowDownArray.length; i++) {
    arrowDownArray[i].addEventListener('click', function(){
            var indexOfActiveTile;

            for(i=0;i<tiles.length;i++){
                var className = tiles[i].className;
                console.log(className);
                if(className.includes('active-tile')){
                    indexOfActiveTile = i;
                    console.log("This is the index of the active tile " + indexOfActiveTile)
                }
            }

       
            var indexOfNextActiveTile;
        
            if(indexOfActiveTile === tiles.length-1){
                indexOfNextActiveTile = 0;
                console.log("This is the index of the next active tile " + indexOfNextActiveTile)
            }else{
                indexOfNextActiveTile = indexOfActiveTile + 1;
                console.log("This is the index of the next active tile " + indexOfNextActiveTile)
            }
                    
            var previousActiveTile = tiles[indexOfActiveTile];
            var nextActiveTile = tiles[indexOfNextActiveTile];
        
          
        
            previousActiveTile.classList.remove('active-tile');
            nextActiveTile.classList.add('active-tile');
        
            // console.log('The current active tile is ' + nextActiveTile.id);
        
        
            // console.log('This should be the new indexOfActiveTile' + indexOfActiveTile)
        
            // console.log(previousActiveTile.classList);
        
            // console.log("This is the index of the previousactive tile" + indexOfActiveTile)
            
        }
    
    
    );
}