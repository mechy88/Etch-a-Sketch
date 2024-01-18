const container = document.querySelector('#container');
const btn_side = document.querySelector('#btn_side');
var resolution = 100;

createCanvas();

function createCanvas(){
    for(var i = 0; i < resolution; i++){
        var newRow = document.createElement('div');
        newRow.classList.add('row');
        for(var j = 0; j < resolution; j++){
            var newItem = document.createElement('div');
            newItem.style['background-color'] = 'white';
            newItem.style['flex-grow'] = '1';
            newItem.style['flex-shrink'] = '1';
            newItem.style['flex-basis']= '0';
            newRow.appendChild(newItem);
        }
    
        container.append(newRow);
    }
}

function clearCanvas(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

container.addEventListener('mouseover', function(e){
    var pixel = e.target;
    const colors = ['black', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'violet'];

    pixel.style['background-color'] = colors[Math.floor(Math.random() * 8)];
});

btn_side.addEventListener('click', function(e){
    resolution = parseInt(prompt("How many pixels per side?"));
    clearCanvas();
    createCanvas();
});


