//Async and Sync in Js


//Synchronous code
    // const job1 = ()=>{
    //     console.log('I am task 1')
    // }

    // const job2 = ()=>{
    //     console.log('I am task 2')
    // }

    // const job3 = ()=>{
    //     console.log('I am task 3')
    // }


    // 
    // console.log('task 0')
    // job1()
    // job2()
    // job3()


// //Asynchrounous - can be removed from the line, when done loading, will return to main line
//example with using setTimeout


//     const job1 = ()=>{
//         console.log('I am task 1')
//     }

//     const job2 = ()=>{
//         console.log('I am task 2')
//     }

//     const job3 = ()=>{
//         console.log('I am task 3')
//     }


   
//     job1()
//     setTimeout(()=>{
//         console.log('This is from set time out')
//     }, 2000)
//     job2()
//     job3()

//     // I am task 1
//     // I am task 2
//     // I am task 3
//     // This is from set time out


// //Example of Asynchronous where we can't see addedNewMember 
// let members = ["John doe", "Sam Smith", "Allie Cartel"]

    // const addNewMember = (newUser) => {
    //      setTimeout(()=>{            
    //          members.push(newUser)
    //          console.log('New member added')
    //          callback()
    //      },3000)    
    // }

    // const getAllMembers = () => {
    //  console.log(members)
    // }

    // addNewMember('Stephanie')
    // getAllMembers(),



// //Example of Asynchronous where we can't see addedNewMember 
// //this can be solved using callbacks
// //CALLBACK (callback can be anything, it can be "x" etc...)
//     let members = ["John doe", "Sam Smith", "Allie Cartel"]

//    const addNewMember = (newUser, callback) => {
//         setTimeout(()=>{            
//             members.push(newUser)
//             console.log('New member added')
//             callback()
//         },3000)    
//    }

//    const getAllMembers = () => {
//     console.log(members)
//    }

//    addNewMember('Stephanie', getAllMembers)




    // const changeColor = (color,delay, callback) => {
    //     setTimeout(()=>{
    //         document.body.style.background = color;
    //         callback()
    //     },delay)    
    // }

    // changeColor('red',1000)

    // changeColor('blue',2000)

    // changeColor('green',3000)


// // try to make a callback within a call back... 
//     const changeColor = (color,delay, callback) => {
//         setTimeout(()=>{
//             document.body.style.background = color;
//             callback()
//         },delay)    
//     }

//     changeColor('red',1000, ()=>{
//         changeColor()
//     })

//     changeColor('blue',2000)

//     changeColor('green',3000)


//Promises (promises are meant to replace callbacks(to avoid callback hell))

    // -pending
    // -fulfilled/resolved
    // -rejected

    // let myPromise = new Promise ((resolve, reject)=>{
    //     const number1 = 2;
    //     const number2 = 4;

    //     if(number1 == number2){
    //         resolve('yes they are equal');
    //     }else{
    //         //error occured
    //         reject('a problem occurred');
    //     }
    // })

    // // myPromise.then(()=>{
    // //     console.log('thank you for resolving it')
    // // })   

    // myPromise
    //     .then((res)=>{
    //         console.log(`${res}, thank you for fulfilling it.`)
    //     })   
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    // let todo = fetch('https://jsonplaceholder.typicode.com/todos/1')

    // todo
    //     .then((res)=>{
    //     // console.log(res)
    //     return res.json()
    //     })
    //     .then((data)=>{
    //         console.log(data)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    // let todo = fetch('https://jsonplaceholder.typicode.com/todos/1')

    // todo
    //     .then(res=> res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log (err))

    // let users = fetch('https://jsonplaceholder.typicode.com/users')

    // users
    //     .then(res=> res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log (err))

//Async and Await - better way to consume promises (than making a lot of .then)(perfect for getting network requests, it also should be promised based)

const getAllUsers = async () => {    
    try{
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
    let usersData = await users.json()
    console.log(usersData)
    }
    catch(err){
        // console.log(`${err}there's an error`)
        console.log(err)
    }
    
}
console.log(getAllUsers());


// const getUser = async () => {
//     try{
//         let user = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
//         let userData = await user.json()
//         console.log(userData)
//     }
//     catch(err){
//         console.log(err)
//     }
// }


// //HOisting

// let x = 20;
// let y = 10;


// //want to use something, make sure it's declared first
// let add = (a,b) => {
//         return a+b
//     } 

// let result = add(x,y)
// console.log(result)


// //hoisted
// // function add(a, b){
// //     return a+b;
// // }

// //function exprerssion, not hoisted, cannot access before initialization
// // let add = (a,b) => {
// //     return a+b
// // } 


    