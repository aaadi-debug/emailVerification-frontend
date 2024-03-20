import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import "./signup.css";
import { useState } from "react";

function Signin(){
    const apiUrl = 'https://emailverification-2h0x.onrender.com'; // Update this URL with your backend URL
    
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    async function handleSubmit(e) {
        e.preventDefault();
    
        const formData = { email, password };
        console.log(formData);
    
        try {
            const response = await fetch(`${apiUrl}/user/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            console.log(data);
    
            // Add logic to handle the response, such as showing a success message or handling errors
            if(response.ok) alert("Successfully Logged in!");
            else alert("Not Logged in!")
        } catch (error) {
            console.error('Error submitting form:', error);
            // Add logic to handle errors, such as displaying an error message to the user
            alert("Not Logged in!")
        }
    }
    
    return(
    <div className="container">
        <div className="sign-up">
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="form-cntrl">
                        <MdEmail className="icon"/>
                        <input type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <div className="form-cntrl">
                        <FaLock className="icon"/>
                        <input type="password" placeholder="Password"  name={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                    </div>
                    
                    <button  type="submit" className="submit" >Submit </button>
                </form> 
            </main>
    </div>
    </div>
    );
}
export default Signin;