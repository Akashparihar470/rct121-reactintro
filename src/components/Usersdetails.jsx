import { useState } from "react"
import {UserList} from "./UserList"

const initState = [
    {
        id:1,
        name:"Akash",
        email:"acky@gmail.com",
        phone:816894895
    },
    {
        id:2,
        name:"Vikash",
        email:"vicky@gmail.com",
        phone:936894895
    },
    {
        id:3,
        name:"Dimesh",
        email:"dimy@gmail.com",
        phone:756894895
    },]

export const Userdetails = () =>{
   
     const [data,setData] = useState(initState);

     

    return <div>
       {data.map((item)=>
           <UserList mainemail = {item.email} main = {item.name} number = {item.phone}/>
       )}
    </div>
}