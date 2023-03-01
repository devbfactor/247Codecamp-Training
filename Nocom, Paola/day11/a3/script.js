// Products
const products = [
    {name: 'Product 1', price: 10.55},
    {name: 'Product 2', price: 20.95},
    {name: 'Product 3', price: 30.99}
]

/*

    1. Create a row element
    2. Create a td element for product name
    3. Create a td element for product price
    4. Add the td elements in the row
    5. Add the row in the table

    6. Add a td element for the btn
    7. Create an 'Add to Cart' button
    8. Add the "Add to Cart" text in the button
    9. Add the button inside the btnCell
    10. Add the functionality for the addToCart btn
    11. Create the array for the shopping cart
    12. Test if we can push in the array
    13. Create an object of products
*/

// Get the table body
const productList = document.querySelector('.product-list')

// Get the shopping cart
const productCart = []
const cartList = document.querySelector('#cart')

products.forEach(product => {
    //console.log(product.name)
    // create a row
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const priceCell = document.createElement('td');
    const btnCell = document.createElement('td');
    const addToCartBtn = document.createElement('button');

    nameCell.textContent = product.name;
    priceCell.textContent = product.price;
    addToCartBtn.innerHTML = "Add To Cart";
    btnCell.appendChild(addToCartBtn);

    addToCartBtn.addEventListener('click',()=>{
        // alert('Working!')
        // productCart.push('new product added')
        // console.log(productCart)

        let newProduct = {
            name: product.name,
            price: product.price
        }
        productCart.push(newProduct);
        console.log(productCart);

        document.querySelector('#total-items').innerHTML = productCart.length;

        // Add to shopping cart
        const cartItem = document.createElement('li')
        cartItem.textContent = `Product: ${product.name}, Price: ${product.price}`

        cartList.appendChild(cartItem)

    })

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(btnCell);

    productList.appendChild(row);
});

