import { useState } from "react"

export default function LotteryTicket(){
    let [ticketNo,setTicketNo]= useState(0);

    function generateTicket(){
        setTicketNo((value)=>{
            value=Math.floor(Math.random()*(1000-100)+100);
            console.log(value)
            return value;

        })
       
    }
    function checkSum(value){
        let sum=0;
        let r;
        while(value>0){
            r = value%10;
            sum+=r;
            value=Math.floor( value/10);
        }
        return sum===15;
        
    }
    return (
        <div>
               <h2>Welcome to the Lottery Contest</h2>
               <h4>Lottery no = {ticketNo}</h4>
               <button onClick={generateTicket}>Generate Ticket</button>
               <p>{checkSum(ticketNo)?"hurrey...you won the lottery":ticketNo===0?"please generate a ticke first.":"Oops..you loss Better luck next time."}</p>
        </div>
    )
}