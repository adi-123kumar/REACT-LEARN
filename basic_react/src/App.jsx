import './App.css';
// import "./ProductList"
// import ProductList from './ProductList';
import List from "./List.jsx";

import "./Holder.css";
import Holder from "./Holder.jsx";


// App component is the root component of all the component.
function App() {
//   let mobileHeader="Mobile";
//   let mobileBody="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat tempora est magni cupiditate, vitae sequi, voluptatibus dolorem dignissimos earum officiis explicabo vero sit temporibus recusandae architecto eveniet nemo. Possimus, ad.";
  
//   let laptopHeader="Laptop";
//   let laptopBody="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat tempora est magni cupiditate, vitae sequi, voluptatibus dolorem dignissimos earum officiis explicabo vero sit temporibus recusandae architecto eveniet nemo. Possimus, ad.";
//   let macHeader="MACBOOK";
//   let macBody="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat tempora est magni cupiditate, vitae sequi, voluptatibus dolorem dignissimos earum officiis explicabo vero sit temporibus recusandae architecto eveniet nemo. Possimus, ad.";
//   let footer="Thank You";
//   return (
// <div>
//   <Holder header={mobileHeader} footer={footer} body={mobileBody}></Holder>
//   <Holder header={laptopHeader} footer={footer} body={laptopBody}></Holder>
//   <Holder header={macHeader} footer={footer} body={macBody}></Holder>
// </div>
//   );

// return (
//   <>
//    {/* <img src={url} className='image'></img> */}
//   </>
// );
let features = ["aditya", "aman","chaman","amit"];
return(
  <>
   <List names={features[0]} age={34}></List>
   <List names={features[1]} age={12}></List>
   <List names={features[2]} age={19}></List>
  </>
)
}


export default App;
