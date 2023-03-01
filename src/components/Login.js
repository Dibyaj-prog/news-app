import React, { useState } from 'react'
const Login =()=>{
    const [Credentials, setCredentials] = useState({email:"", password:""})
    const handleSubmit= async (e)=>{
        e.preeventDefault();
        const response = await fetch("https://fakestoreapi.com/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email: Credentials.email,
                password: Credentials.password
            })
        });
        const json = await response.json()
        console.log(json);
        
    }
    const onChange = (e) =>{
        setCredentials({...Credentials,[e.target.name]:e.target.value})
    }
	return(
		<div>
			<form>
                <div class="mb-3">
                    <lebel for="email" class="form-lebel">Email address</lebel>
                    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">we will never share your email with anyone</div>
                </div>
                <div class="mb-3">
                    <lebel for="exampleinputpassword" class="form-lebel">Password</lebel>
                    <input type="password" class="form-control" name="password" id="exampleinputpassword"/>
                </div>
                <button type="submit" class="btn btn-primary" onSubmit={handleSubmit}>submit</button>
            </form>
		</div>
	)
}


export default Login