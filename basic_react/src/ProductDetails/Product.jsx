import ProductDecription from "./ProductDecription";
import ProductHeader from "./ProductHeader";
import ProductPrice from "./ProductPrice";

function Product({idx}){
    let styles ={
        border:"2px solid black",
          color:"black",
        backgroundColor:"#0096c7",
        margin:"2px",
        borderRadius:"30px"
    }
    let oldPrice = ["Rs 12322","Rs 45333","Rs 33222","Rs 56233"];
    let newPrice = ["Rs 2322","Rs 3433","Rs 3322","Rs 23432"];
    let productHeader = ["Apple","Motorola","Infinix","Oppo"];
    let productDecription =[
        "Camera:48MP,RAM:8GB,ROM:128GB",
        "Camera:12MP,RAM:12GB,ROM:228GB",
        "Camera:108MP,RAM:24GB,ROM:448GB",
        "Camera:68MP,RAM:16GB,ROM:96GB",
    ];
    return(
        <div style={styles}>
       <ProductHeader header={productHeader[idx]}></ProductHeader>
       <hr />
       <ProductDecription decription={productDecription[idx]}></ProductDecription>
       <hr />
       <ProductPrice oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></ProductPrice>
        </div>
    );
}
export default Product;