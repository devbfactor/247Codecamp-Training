//Products

const products = [
    {name: 'Product 1', price: 10.55},
    {name: 'Product 2', price: 20.99},
    {name: 'Product 3', price: 30.99}
]

// products.forEach(function(products){
//     const name = products.name
//     console.log(name);
// });



const productList = document.querySelector('.product-list')
//This is the shopping cart
const productCart = []; //this is where we will push all the products in this empty array

// to add the product name and price
// Step 1: create a row Element
// Step 2: create a td element for product name
// Step 3: create a td element for product name
// Step 4: Add the td lements in the row
// Step 5: Add the row in the (productList)

// Step 6: Add a new td for the button
// Step 7: Add the Add to Cart button
// Step 8: Add the Add to Cart text in the button
// Step 9: Add the button inside the btn cell

// Step 10: Add the functionality for the Add to Cart button

// Step 11: Create the array for the Shopping Cart
// Step 12: test if we can push in the array
// Step 13: Create an object of products

//===================

//display 

products.forEach((product)=>{
    // console.log(product.name)

    // create a row
    const row = document.createElement('tr')
    const list = document.createElement('li')
    //create an cells
    const nameCell = document.createElement('td')
    const priceCell = document.createElement('td')    
    
    // //adding a button
    // const btnCell = document.createElement ('td')
    // const addToCartBtn =  document.createElement('button')

    // addToCartBtn. innerHTML= 'Add to Cart'
    // btnCell.appendChild(addToCartBtn)

    // addToCartBtn.addEventListener('click',()=>{
    //     // alert('working')
    //     // productCart.push('new product added')
    //     // console.log(productCart)
    //     let newProduct = {
    //         name:product.name,
    //         price:product.price
    //     }
    //     productCart.push(newProduct)
    //     console.log(productCart)

    //     //display total number of items
    //     document.querySelector('#total_items').innerHTML = productCart.length

    //     //display contents in cart ul
        

        
    // })

    //add a content in those cells
    nameCell.textContent = product.name;
    priceCell.textContent = product.price


    //next step is to put those cells in the row
    row.appendChild(nameCell)
    row.appendChild(priceCell)

    row.appendChild(btnCell)

    //Add the row in the productList
    productList.appendChild(row)

  



})

//---------------------
//When clicking add to cart, it should go to the shopping cart 


//display the contents below "My Shopping Cart"

//displayed in bullets
//with total amount
// display with line 
//add a remove function?










