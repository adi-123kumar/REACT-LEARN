function clickEvent(){
    console.log("button clicked");
}
function dblClick(){
    console.log("dbl click event");
}
function mouseOver(){
    console.log("mouseOver event")
}
function mouseUp(){
    console.log("mouseUp event")
}

export default function Events(){
    return (
        <div>
         <button onClick={clickEvent}>Click Me!</button>
         <button onDoubleClick={dblClick}>dblclick Me!</button>
         <button onMouseOver={mouseOver}>mouseover Me!</button>
         <button onMouseUp={mouseUp}>mouseup Me!</button>
        </div>
    );
}