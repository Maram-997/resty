import React from "react";
function  History(props){
    return(
        <>
        <h3>History List:</h3>
        <div>{props.history.map((element,idx)=>{
            <li key={idx}>{element}</li>
        })}</div>
        </>
    )
}

export default History;