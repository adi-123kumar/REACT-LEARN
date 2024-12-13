import {useState} from "react";
export default function LudoBoard(){
let [colorCount,setColorCount] = useState({red:0,blue:0,green:0,yellow:0})
let [arr,setArr]= useState(["no value"])
function redButton(){
    // colorCount.red+=1;
    // setColorCount({...colorCount});
    arr.push("red");
    console.log(arr);
    setArr(arr)
    setColorCount((previColorCount)=>{
      return {...previColorCount,red:previColorCount.red+1};
    })
}
function blueButton(){
    // colorCount.blue+=1;
    // setColorCount({...colorCount});

    setColorCount((previColorCount)=>{
      
      return {...previColorCount,blue:previColorCount.blue+1};
    })
}
function greenButton(){
    // colorCount.green+=1;
    // setColorCount({...colorCount});

    setColorCount((previColorCount)=>{
      return {...previColorCount,green:previColorCount.green+1};
    })
}
function yellowButton(){
    // colorCount.yellow+=1;
    // setColorCount({...colorCount});

    setColorCount((previColorCount)=>{
      return {...previColorCount,yellow:previColorCount.yellow+1};
    })
}
    return(
        <div>
            <div className="board">
            <p>{arr}</p>
                <p>Red = {colorCount.red}</p>
                <button style={{backgroundColor:"red"}} onClick={redButton}>+1</button>
                <p>Blue = {colorCount.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={blueButton}>+1</button>
                <p>Green = {colorCount.green}</p>
                <button style = {{backgroundColor:"green"}} onClick={greenButton}>+1</button>
                <p>Yellow = {colorCount.yellow}</p>
                <button style = {{backgroundColor:"yellow"}} onClick={yellowButton}>+1</button>
            </div>
        </div>
    )
}