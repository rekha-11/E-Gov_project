import React, {useState} from 'react'

export default function Meme() {
    const [Top, setTop] = useState("")
    const [Bottom, setBottom] = useState("")
    const [Rimg, setRimg] = useState({url:"http://i.imgflip.com/1bij.jpg"})
    const [Memeimg, setMemeimg] = useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes[0])
            setMemeimg({Memeimg: memes})
        })
    }, [])

   

    const handlesubmit = (event) =>{
        event.preventDefault()
        const randNum = Math.floor(Math.random() * Memeimg.Memeimg.length)
        console.log(Memeimg)
        const randMemeImg = Memeimg.Memeimg[randNum].url
        setRimg({ url: randMemeImg })
    }
   
    return (
        <div>
            <form className="meme-form" onSubmit={handlesubmit}>
                <input 
                    type="text" 
                    name="Top" 
                    value= {Top} 
                    placeholder= "Top Text"
                    onChange={(e)=>{
                        setTop(e.target.value)
                    }}
                />

                <input 
                    type="text" 
                    name="Bottom" 
                    value= {Bottom} 
                    placeholder= "Bottom Text"
                    onChange={(e)=>{setBottom(e.target.value)}}
                />

                <button>Gen</button>
            </form>
            <div className="meme">
                    <img src= {Rimg.url}/>
                    <h2 className="top">{Top}</h2>
                    <h2 className="bottom">{Bottom}</h2>
                </div>
        </div>
    )
}