function ProductPrice({newPrice,oldPrice}){
    let styles = {
        color:"black",
        backgroundColor:"#90e0ef",
        borderBottomLeftRadius:"30px",
        borderBottomRightRadius:"30px"
        
    }
    return(
        <div style={styles}>
           <span>{oldPrice}</span> 
           <span>{newPrice} </span>
        </div>
    );
}

export default ProductPrice;