//mapping; List Rendering; add unique key/ID addtribute
const Product = () => {
    //add unique ID
    const products = [
        { id: 1, name: 'Laptop', price: 500 },
        { id: 2, name: 'Phone', price: 200 },
        { id: 3, name: 'Modem', price: 50 },
        { id: 4, name: 'Laptop', price: 900 },
    ];

    //render list of objects
    const productList = products.map((product) =>
        <h3 key={product.id}>{product.name}: ${product.price}
        </h3>
    );
    return <div>{productList}</div>

    //rendering array w/ no key
    // const fruits = ['Apple', 'mango', 'banana'];

    // const fruitsList = fruits.map((fruit, index) =>
    //     //console.log(index);
    //     <h3 key={index}> {fruit} </h3>
    // );
    // return <div>{fruitsList}</div>

    // const products = ['Laptop', 'Phone', 'Modem', 'Computer'];
    // const productList = products.map((product) => <h3>{product}</h3>);
    // return <div>{productList}</div>

    // return (
    //     <div>
    //         {products.map((product) =>
    //             <h3>{product}</h3>
    //         )}
    //     </div>
    // )
}

export default Product;
