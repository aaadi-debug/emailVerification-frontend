import { FaUserLarge } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";

import "./signup.css";
import { useState } from "react";

function Signup(){
    const apiUrl = 'https://emailverification-2h0x.onrender.com'; // Update this URL with your backend URL

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [dateOfBirth,setDateOfBirth]=useState("");

    async function handleSubmit(e) {
        e.preventDefault();
    
        const formData = { name, email, password, dateOfBirth };
        console.log(formData);
    
        try {
            const response = await fetch(`${apiUrl}/user/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            console.log(data);
    
            // Add logic to handle the response, such as showing a success message or handling errors
            if(response.ok) {
                alert("You have registered! Please verify your email to continue");
            }
            else alert("You have not registered!")
        } catch (error) {
            console.error('Error submitting form:', error);
            // Add logic to handle errors, such as displaying an error message to the user
            alert("You have not registered!")
        }
    }
    
    return(
    <div className="container">
        <div className="sign-up">
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="form-cntrl">
                        <FaUserLarge  className="icon"/>
                        <input type="text"  placeholder="Name" required name={name} onChange={(e)=>setName(e.target.value)}></input>
                    </div>
                    <div className="form-cntrl">
                        <MdEmail className="icon"/>
                        <input type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <div className="form-cntrl">
                        <FaLock className="icon"/>
                        <input type="password" placeholder="Password"  name={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                    </div>
                    <div className="form-cntrl">
                        <BsCalendarDateFill  className="icon" />
                        <input type="date"  placeholder="MM/DD/YYYY" required value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)}></input>
                    </div>
                    <button  type="submit" className="submit" >Submit </button>
                </form> 
            </main>
    </div>
    </div>
    );
}
export default Signup;