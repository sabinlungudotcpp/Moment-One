import React from "react";


const login = (props) => { // Live Chat component

  return (
    <div class="overall-container">
      <h1 class="signin-title">Sign-in into your account</h1>
      <form id="signin" name="signin" method="post" action="localhost:8001/api/v1/momentone/login">
        <div class="signin-container">
          <img src="momentone.png">
          <h2 class="signin-subtitle">Sign in</h2>

          <input class="field-container-signin" type="text" placeholder="Username" name="username" id="username" required/>

          <input class="field-container-signin" type="password" placeholder="Password" name="psw" id="psw" required/>

          <button type="submit" class="btn-signin">Sign-in</button>
          <p class="container-text-signin">Don't have an account? Sign up <a href="register">here</a>!</p>
        </div>
      </form>
    </div>
    <div>
    <section class="left-container">
    <p class="left-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
    </section>
    </div>
  )
}
export default login; // Export home
