

const products = [
    {name: 'Product 1', price: 10.55},
    {name: 'Product 2', price: 20.99},
    {name: 'Product 3', price: 30.99}
]



const productList = document.querySelector('.product-list')
const productCart = [];
const addedProduct = document.querySelector('#cart')

products.forEach((product)=>{

   
    const row = document.createElement('tr')
   
    const nameCell = document.createElement('td')
    const priceCell = document.createElement('td')   
    
    const btnCell = document.createElement ('td')
    const addToCartBtn =  document.createElement('button')
    const addProdlist = document.createElement('li')


    addToCartBtn. innerHTML= 'Add to Cart'
    btnCell.appendChild(addToCartBtn)
    addedProduct.appendChild(addProdlist)

    addToCartBtn.addEventListener('click',()=>{
       
        let newProduct = {
            name:product.name,
            price:product.price
        }
        productCart.push(newProduct)
        console.log(productCart)

        document.querySelector('#total_items').innerHTML = productCart.length

       
    })

     
    nameCell.textContent = product.name;
    priceCell.textContent = product.price



    row.appendChild(nameCell)
    row.appendChild(priceCell)
    row.appendChild(btnCell)

   
    productList.appendChild(row)
    

  



})



//---------------------









