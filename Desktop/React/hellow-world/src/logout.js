import React from 'react'

function Logout(props) {
    
    return(
        <div>
            <p>You are currently Logged Out</p>
            <button onClick = {()=> {props.handleclick()}}>Log In</button>
        </div>
    )
    
}

export default Logout