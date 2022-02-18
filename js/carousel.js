var tiles = document.getElementsByClassName('tile');
var activeTile = document.getElementsByClassName('active-tile')[0];





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
            
        }
    
    
    );
};

var arrowUpArray = document.getElementsByClassName('arrow-up');

for (var i = 0; i < arrowUpArray.length; i++) {
    arrowUpArray[i].addEventListener('click', function(){
            var indexOfActiveTile;

            for(i=0;i<tiles.length;i++){
                var className = tiles[i].className;
                console.log(className);
                if(className.includes('active-tile')){
                    indexOfActiveTile = i;
                    // console.log("This is the index of the active tile " + indexOfActiveTile)
                }
            }

       
            var indexOfNextActiveTile;
        
            if(indexOfActiveTile === 0){
                indexOfNextActiveTile = tiles.length - 1;
                // console.log("This is the index of the next active tile " + indexOfNextActiveTile)
            }else{
                indexOfNextActiveTile = indexOfActiveTile - 1;
                // console.log("This is the index of the next active tile " + indexOfNextActiveTile)
            }
                    
            var previousActiveTile = tiles[indexOfActiveTile];
            var nextActiveTile = tiles[indexOfNextActiveTile];
            
            
            previousActiveTile.classList.remove('active-tile');
            
            nextActiveTile.classList.add('active-tile');
          
            
        }
    
    
    );
};