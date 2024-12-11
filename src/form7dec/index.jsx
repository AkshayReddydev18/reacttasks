import React , {useState} from 'react';

export default function FormComp(){
    const[user,setUser]=useState({
        name:"",

    })

    const handleInput=(e)=>{
        setUser(e.target.value);

    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser(user);
        setUser("");
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="user" value={user}  onChange={handleInput}/>
            <input type="submit" />
        </form>
        <h1>{user.value}</h1>


        </div>

    )
}