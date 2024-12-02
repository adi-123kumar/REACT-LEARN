import "./Header.css"
function Header(props){
    return (
        <>
         <h2 className="header">{props.header}</h2>
        </>
    );
}

export default Header;