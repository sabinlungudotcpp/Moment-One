import React from "react";


const register = (props) => { // Live Chat component

  return (
    <div class="overall-container">
      <div>
        <h1 class="register-title">Register your account</h1>
        <form id="register" name="register" method="post" action="localhost:8001/api/v1/momentone/users/register">
          <section class="register-container-therapist">
            <img src="momentone.png">
            <h2 class="register-subtitle">Register</h2>

            <input class="field-container" type="email" placeholder="Email" name="email" id="email" required/>

            <input class="field-container" type="text" placeholder="Username" name="username" id="username" required/>

            <input class="field-container" type="password" placeholder="Password" name="password" id="password" required/>

            <input class="field-container" type="password" placeholder="Confirm Password" name="psw-repeat" id="psw-repeat" required/>

            <button type="submit" class="btn">REGISTER</button>
            <p class="container-text">Already have an account? <a href="login">Sign in</a>!</p>
          </section>
        </form>
      </div>
      <div>
      <section class="left-container">
      <p class="left-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
      </section>
      </div>
    </div>
  )
}
export default register; // Export home
