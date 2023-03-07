//Using the MAP method, before creating something, it will create an array first

    // // example 1
    // const numbers= [1,2,3,4,5]
    // // numbers.forEach((number)=>{
    // //     console.log(number)
    // // })

    // const newSetOfNums = numbers.map((number)=>{
    //     return number + 1;
    // })

    //example 2
    const movies = [
        {
            title:'The Notebook',
            genre: 'Romance'
        },
        {
            title:'The Avengers',
            genre: 'Adventure'
        },
        {
            title:'Avatar',
            genre: 'Adventure'
        },
        {
            title:'Thor',
            genre: 'Adventure'
        }
    ]

    // const movieTitles = movies.map((movie)=>{
    //         return movie.title
    // })

//Using the filter method

const romanceGenre = movies.filter(movie => movie.genre === 'Romance')

    console.log(romanceGenre)


