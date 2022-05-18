
import { useState } from "react"
import "./add.css"

export const UserList = ({main,mainemail,number})=>{

    const [active,setActive] = useState(true)



    return(
        <div className="main">
            <h1>{main}</h1>
            <h3>{mainemail}</h3>
            <div className="click_hover">
            {active ? (<div onClick={()=>setActive(!active)}>
                Click to show more
            </div>):(<div onClick={()=>setActive(!active)}>{number}</div>)}
            </div>
        </div>
    )
}