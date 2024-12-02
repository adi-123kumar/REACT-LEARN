import Product from "./Product.jsx";

function ProductList(){
    return (
        <div>
            <Product name= "Iphone" price={100000}></Product>
            <Product name= "android" price={10000}></Product>
            <Product name = "laptop" price ={500000}></Product>
            <Product name ="tablet" price ={30000}></Product>
        </div>
    )
}

export default ProductList;