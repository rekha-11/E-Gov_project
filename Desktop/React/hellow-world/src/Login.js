import React from 'react'

function Login(props) {
    
    return(
        <div>
            <p>You are currently Logged In</p>
            <button onClick = {()=> {props.handleclick()}}>Log Out</button>
        </div>
    )
    
}

export default Login