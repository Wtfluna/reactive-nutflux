import { useState } from "react";

export default function LogIn(){
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async () => {
    try {
     catch (error) {
  }

    return (
    <div>
            <div className="title">
              <h3>Welcome back!</h3>
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login to your account</button>
            </div>
    </div> 

    );
  }   
}
}