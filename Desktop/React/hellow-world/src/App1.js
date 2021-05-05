import React, {useState} from "react"
// import Login from './Login'
// import Logout from './logout'

function App1() {
    const [Login, setLogin]= useState(false)

    const handleclick = () => {
        setLogin(!Login)
    }
    let text = Login ? "LOG OUT" : "LOG IN"
    let greet = Login ? "You are currently Logged In": "You are currently Logged Out"
    
    return (
        <div>
            <p>{greet}</p>
            <button onClick = {handleclick}>{text}</button>
        </div>
    )
}

export default App1
