// Select an element
let heading = document.getElementById('mainHeading')

// Add an event listener
heading.addEventListener('click', function(){
    console.log('You clicked me');
    heading.style.color='green';
})