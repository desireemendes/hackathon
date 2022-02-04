import Axios from "axios";
import { useState } from "react";

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
    <div id="background">
      <form id="register">
        <h1>Register Now!</h1>
       <input type="text" email="email" placeholder="email" />
       <input type="password" name="password" placeholder="password"/>  
        <button onClick={register}>
          Submit
        </button>
      
      </form>
    </div>
  );


}

export default Register;