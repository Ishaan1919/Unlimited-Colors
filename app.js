const body = document.querySelector('body');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

let startInterval;

start.addEventListener('click',function(){
    if(!startInterval){
        startInterval = setInterval(code,1000);
    }
},false);

stop.addEventListener('click',function(){
    clearInterval(startInterval);
    startInterval = null;
});

const hex = '123456789ABCDEF'

const code = function colorCode(){
    let colorName = '#';
    for(let i=0;i<6;i++){
        let random = Math.floor(Math.random()*15);
        colorName += hex[random];
    }
    console.log(colorName);
    body.style.backgroundColor = colorName;
}

// console.log(random);