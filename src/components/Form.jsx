import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

function Form() {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="container">
      <div className="sign-up">
        <header className="App-header">
          <h4>Please {isRegister ? "Register" : "Login"} to Continue </h4>
        </header>
        <main>
          <div className="btns">
            <button
              className={`select-btn ${isRegister ? "active" : ""}`}
              onClick={toggleForm}
            >
              Register
            </button>
            <button
              className={`select-btn ${!isRegister ? "active" : ""}`}
              onClick={toggleForm}
            >
              Login
            </button>
          </div>
          {isRegister ? <Signup /> : <Signin />}
        </main>
      </div>
    </div>
  );
}

export default Form;
