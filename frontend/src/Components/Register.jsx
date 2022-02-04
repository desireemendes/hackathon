import Axios from "axios";
import { useState } from "react";
import "./Register.scss"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    Axios.post("http://localhost:3001/api/users", {
      email: email,
      password: password,
    })
      .then((res) => {
        const user = JSON.stringify(res.data);
        localStorage.setItem("userID", user);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };


   return (
     <div className="container">
    <div id="background">
      <form id="register">
        <h1>Register Now!</h1>
        
       <input type="text" email="email" placeholder="email" 
         onChange={(e) => {
          setEmail(e.target.value);
        }}
       />
       <input type="password" name="password" placeholder="password"
       onChange={(e) => {
        setPassword(e.target.value);
      }}
      />  
        <button onClick={register}>
          Submit
        </button>
      
      </form>
    </div>
    </div>
  );


}

export default Register;