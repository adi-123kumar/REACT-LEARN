import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";
import "./Holder.css";
function Holder(props){
    return (
        <div className="holder">
          <Header header={props.header}></Header>
          <Body body={props.body}></Body>
          <Footer footer={props.footer}></Footer>
        </div>
    );
}
export default Holder;