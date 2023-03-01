//JS DOM 
//Document Object Model
//The DOM is an interface, that allows programs and scripts (like JS) to dynamically select and manipulate the content, structure, and style of a document

    // let name = document.getElementById("mainHeading")
    // let name = document.getElementById("mainHeading")
    // name.style.color = 'red'

//Events 
    // Click Event


//Select an event

    let heading = document.getElementById("mainHeading")

    //add an event listener
    heading.addEventListener('click', function(){
        console.log('You clicked me')
        heading.style.color = 'green'
    })

    // heading.addEventListener('click', function(){
    //     console.log('You clicked me')
    //     heading.style.color = 'green'
    // })




