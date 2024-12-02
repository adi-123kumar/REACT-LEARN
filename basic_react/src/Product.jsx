import Title from "./Title.jsx"
import "./Product.css";
import "./Title.css";
import Decription from "./Decription.jsx"
function Product(props){
    return (
        <div className="product">
            <Title name = {props.name}></Title>
            <Decription price= {props.price}></Decription>
        </div>
    )
}

export default Product;