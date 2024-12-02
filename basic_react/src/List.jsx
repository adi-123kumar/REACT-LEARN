function List({names,age}){
// let newList = names.map((name)=><a href="https://www.facebook.com/"><li>{name}</li></a>);

let styles = {
    backgroundColor:age>18?"yellow":"pink",
    fontSize:"30px",
    fontWeight:"bold",
    padding:"0px"
};
let styles2 = {
    font:"white"
}
    return (      
<>
<ol type="I" style={styles}>
    {names}
    {age > 18 ? <p><b>you can vote</b></p>:<p>you cannnot vote.</p>}
    
</ol>

</>
    );
}
export default List;