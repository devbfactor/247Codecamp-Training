//alert('hello')

/*
DOM - Document Object Model
    - an interface that allows programs and scripts (like JS) to dynamically select and manipulate the content, structure and style of a document.

        eg. let name = document.getElementById('mainHeading')   

 * EVENTS - click, hover, press, etc.
        - any interaction

        - CLICK EVENT 
        //Select an element
            let heading = document.getElementById('mainHeading')
        //add an event listener
            heading.addEventListener('click',function() {
                console.log('h1 Clicked');
                heading.style.color = 'green'
            })
        
*/

let cell1 = document.querySelector('#redcol')
redcol.addEventListener('click', () => {
    redcol.style.backgroundColor = 'red'
    redcol.style.color = 'transparent'
})

let cell2 = document.getElementById('grcol')
grcol.addEventListener('click', function() {
    grcol.style.backgroundColor = 'green'
    grcol.style.color = 'transparent'
})

let cell3 = document.getElementById('blcol')
blcol.addEventListener('click', function() {
    blcol.style.backgroundColor = 'blue'
    blcol.style.color = 'transparent'
})

let cell4 = document.getElementById('yelcol')
yelcol.addEventListener('click', function() {
    yelcol.style.backgroundColor = 'yellow'
    yelcol.style.color = 'transparent'
})


let cells = document.querySelectorAll('.box')