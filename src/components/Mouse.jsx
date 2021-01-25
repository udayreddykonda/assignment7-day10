import React, {useState} from 'react'
import "./Styles.css"

const Mouse = () => {
    const ForestGreen ="#228B22";
    const [bg,setBg] = useState(ForestGreen);
    const [name,setName]=useState("Terralogic ");
    const bgChange=()=> {
        let newBg="#34495e";
        setBg(newBg);
        setName(" Greetings ");

    };
    const bgBack = () =>
    {
        setBg(ForestGreen);
        setName("Happy New Year 🤝 ");
    };
    return (
        <div style={{backgroundColor:bg}}>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
            
        </div>
    )
}

export default Mouse