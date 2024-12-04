import Product from "./Product";

function ProductHolder(){
  
  
    let styles ={
        display:"flex",
       justifyContent:"space-between"
    }
    let idx=0;
    return(
        <div style={styles}>
        <Product idx={0} ></Product>
        <Product idx={1} ></Product>
        <Product idx={2} ></Product>
        <Product idx={3} ></Product>



        </div>
    );
}
export default ProductHolder;