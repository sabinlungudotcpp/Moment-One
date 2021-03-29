import React from "react";


const login = (props) => { // Live Chat component

  return (
    <div>
      <form id="login" name="login" method="post" action="localhost:8001/api/v1/momentone/login">
        <div class="login-container">
          <h1>User Login</h1>
          <p>Please fill in your account details below.</p>
          <hr />

          <label for="username"><b>Username</b></label>
          <input class="field-container" type="text" placeholder="Enter Username" name="username" id="username" required/>

          <label for="psw"><b>Password</b></label>
          <input class="field-container" type="password" placeholder="Enter Password" name="psw" id="psw" required/>

          <hr/>
          <p>Trouble <a href="#">logging in?</a>.</p>

          <button type="submit" class="btn">Login</button>
          <p>Don't have an account? <a href="register">Register here</a>.</p>
        </div>
      </form>

      <form id="login" name="login" method="post" action="localhost:8001/api/v1/momentone/login">
        <section class="login-container">
          <h1>Therapist Login</h1>
          <p>Please fill in your account details below.</p>
          <hr/>

          <label for="username"><b>Username</b></label>
          <input class="field-container" type="text" placeholder="Enter Username" name="username" id="username" required/>

          <label for="psw"><b>Password</b></label>
          <input class="field-container" type="password" placeholder="Enter Password" name="psw" id="psw" required/>

          <hr/>
          <p>Trouble <a href="#">logging in?</a>.</p>

          <button type="submit" class="btn">Login</button>
          <p>Don't have an account? <a href="register">Register here</a>.</p>
        </section>
      </form>
    </div>
  )
}
export default login; // Export home
