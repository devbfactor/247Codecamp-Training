// Represent an array of blog posts.

const allBlogs = [
    {
       author: 'Alan',
       email: 'alan@mail.com',
       blogs: [
            {
                title: 'JS Modules',
                body: 'Js is ...'
            },

            {
                title: 'Node Express',
                body: 'Express is ...'
            },
        ] 
    },
    {
        author: 'Bry',
        email: 'bry@mail.com',
        blogs: [
             {
                 title: 'Smart Contract',
                 body: 'Smart Contract is ...'
             },
 
             {
                 title: 'Blockchain',
                 body: 'Blockchain is ...'
             },
         ] 
     },
     {
        author: 'Gab',
        email: 'gab@mail.com',
        blogs: [
             {
                 title: 'Creating your own Crypto',
                 body: 'Crypto is ...'
             },
 
             {
                 title: 'Ordinal inscription',
                 body: 'Ordinal inscription is ...'
             },
         ] 
     }
]


// allBlogs.forEach(x => console.log(x.author));

// allBlogs.forEach(function(blogs) {
//     const author = blogs.author;
//     console.log(author);
// }
// );

// allBlogs.forEach((blog)=> {
//     console.log(`Author: ${blog.author}`)
// })


allBlogs.forEach(blog => {
    console.log(`Author: ${blog.author}`)

    for(let counter=0;counter< blog.blogs.length;counter++){
        console.log(`Title ${counter+1}: ${blog.blogs[counter].title}`)
    }

    console.log('=====')
});

