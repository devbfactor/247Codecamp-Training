//ASYNC and SYNC

/*  SYNCHRONOUS -- [linear]
const job1 = () => {
    console.log('I am task 1')
}

const job2 = () => {
    console.log('I am task 2')
}

const job3 = () => {
    console.log('I am task 3')
}

job1()
job2()
job3() */


//ASYNCHRONOUS 
/*  --- using SETTIMEOUT
    const job1 = () => {
        console.log('I am task 1')
    }

    const job2 = () => {
        console.log('I am task 2')
    }

    const job3 = () => {
        console.log('I am task 3')
    }

    job1()
    setTimeout( ( ) => {
        console.log('This is from setTimeout')
    }, 2000)
    job2()
    job3()

/* OUTPUT:
I am task 1
I am task 2
I am task 3
This is from setTimeout [after 2 ms]
*/

/*--- using CALLBACK FUNCTION
    let members = ['John Doe', 'Sam Smith', 'Allie Cartel']

    const addNewMember = (newUser, callback) => {
        setTimeout(() => {
            members.push(newUser)
            console.log('new member added')
            callback()
        }, 3000)
    }

    const getAllMembers = () => {
        console.log(members)
    }

    addNewMember('Steff', getAllMembers);
    
===========================================
eg2:   const changeColor = (colorr, delay) => {
        setTimeout(() => {
            document.body.style.background = colorr
        }, delay)
        
    }

    changeColor('red', 1000)
    changeColor('blue', 2000)
    changeColor('green', 3000)

*/

/* PROMISES
    -   pending state --> processing if conditions are met
    -   fulfilled/resolved state --> result
    -   rejected state
    - [meant to replace callbacks; avoid messy callbacks]
    -   either resolved or rejected
    - if resolved, then what to do next.



let myPromise = new Promise((resolve, reject) => {
    const num1 = 2;
    const num2 = 2;

    if(num1 == num2) {
        resolve('Yes they are equal.');
    } else{
        //error occured
        reject('A problemm occured.');
    }
})

myPromise
    .then((res) => {  
        console.log(`${res} Thank you for fulfilling it.`)
    })
    .catch((err) => {
        console.log(err)
    })



let users = fetch('https://jsonplaceholder.typicode.com/users');
users.then(res => res.json())
    .then((data) => console.log(data))
    .catch(err => console.log(err))

*/

//ASYNC and AWAIT ---> better way to consume promises

const getAllUsers = async () => {
    try {
       let users = await fetch('https://jsonplaceholder.typicode.com/users');
    let usersData = await users.json()
    console.log(usersData) 
    } 
    catch(err) {
    console.log(err)
    }
}


// let btn1 = document.querySelector('#btn1')
// btn1.addEventListener('click',getUsers)

let getUsers = async() => {
    try {
        let results = '';
        let users2 = await fetch('https://jsonplaceholder.typicode.com/users')
        let usersData2 = await users2.json()
        //console.log(usersData2)
        .then((users2)=>{
            users2.forEach((usersData2) => {
                console.log(usersData2.name)
                //console.log(user.email)
                //console.log('====')
            
            results += `<li>${usersData2.name}</li>`
            document.querySelector('#output').innerHTML = results 
            })
        })
    }
    catch(err) {
        console.log(err)
        }
        
}

let btn1 = document.querySelector('#btn1')
btn1.addEventListener('click',getUsers)

// const getUsers = () => {
//     let results = '';
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response)=>{
//             return response.json()
//         })
//         .then((users)=>{
//             users.forEach((user)=>{
//                 // console.log(user.username)
//                 // console.log(user.email)
//                 // console.log('====')

//                 results += `<li>${user.username}</li>`
//             })
//             console.log(results)
//             document.querySelector('#output').innerHTML = results 

//         })
// }


//HOISTING
// let x =20
// let y = 10

// let result = add(x,y)
// console.log(result)

// function add(a, b) {
//     return a + b;
// }

// let add = (a, b) =>  { return a + b }







const getData = async() => {
    try {
        let barrelName = await fetch('https://api.openbrewerydb.org/breweries?by_name=10-56 Brewing Company&by_state=Indiana')
        let barrelData = await barrelName.json()
        //console.log(barrelData)
        .then((barrelName)=>{
            barrelName.forEach((barrelData) => {
                console.log(barrelData.name)
                console.log(barrelData.state)
                console.log('====')
            
            })
        })
    }
    catch(err) {
        console.log(err)
        }
}


const getWData = async() => {
    try {
        let locName = await fetch('http://api.weatherapi.com/v1/current.json?key=880c43a219434e40b6d74505230603&q=Philippines')
        let locData = await locName.json()
        console.log(locData.location)
        .then((locName)=>{
            locName.forEach((locData) => {


                // if(locData.location.localtime == ' ') {

                // } else {

                // }
            
            })
        })
    }
    catch(err) {
        console.log(err)
        }
}
