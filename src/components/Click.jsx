import React, { useState } from 'react'
import "./Styles.css"
import "./Mouse"

     const Click = () =>{
         const darkorange ="#FFA500";
         const [bg,setBg] = useState(darkorange);
         const [name,setName]=useState(" Click Here 🎧😍");

     
     const bgChange=()=> {
         let newBg="#34495e";
         setBg(newBg);
         setName("Double Click Here  🥰");

     };
     const bgBack = () =>
     {
         setBg(darkorange);
         setName("Thank you 🤝 Now you click mouse event ");
     };
        return (
            <div style={{backgroundColor:bg}} className="a">
            <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button><br /><br />
            <a href="#Mouse" className="anchor">open Mouse event</a>
                
            </div>
        )
    
        }

export default Click