let redBox = document.querySelector('#red')

redBox.addEventListener('click', function(){
    redBox.style.background='red';
    redBox.innerHTML = '';
})

let blueBox = document.getElementById('blue')

blueBox.addEventListener('click', function(){
    blueBox.style.background='blue';
    blueBox.innerHTML = '';
})

let greenBox = document.getElementById('green')

greenBox.addEventListener('click', function(){
    greenBox.style.background='green';
    greenBox.innerHTML = '';
})

let yellowBox = document.getElementById('yellow')

yellowBox.addEventListener('click', function(){
    yellowBox.style.background='yellow';
    yellowBox.innerHTML = '';
})