// import React , {useState} from 'react';

// export default function FormComp(){
//     const[user,setUser]=useState({
//         name:"",

//     })

//     const handleInput=(e)=>{
//         setUser(e.target.value);
//     };
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         setUser(user);
//         setUser("");
//     }
//     return(
//         <div>
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="user" value={user}  onChange={handleInput}/>
//             <input type="submit" />
//         </form>
//         <h1>{user.value}</h1>
//         </div>

//     )
// }





import React, { useState } from 'react';

export default function FormComp() {
    const [user, setUser] = useState({
        name: "",
    });
    const [submittedName, setSubmittedName] = useState(""); // New state for submitted name

    const handleInput = (e) => {
        setUser({ name: e.target.value }); // Update the state correctly
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedName(user.name); // Store the submitted name
        setUser({ name: "" }); // Clear the input after submission
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="user" 
                    value={user.name}  // Access the name property
                    onChange={handleInput} 
                />
                <input type="submit" />
            </form>
            <h1>{submittedName}</h1> {/* Display the submitted name */}
        </div>
    );
}
