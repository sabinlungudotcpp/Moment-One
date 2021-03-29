import React from "react";


const register = (props) => { // Live Chat component

  return (
    <div>
      <form id="register" name="register" method="post" action="localhost:8001/api/v1/momentone/users/register">
        <section class="register-container" >
          <h1>User Register</h1>
          <p>Please fill in this form to create a user account.</p>
          <hr/>

          <label for="email"><b>Email</b></label>
          <input class="field-container" type="email" placeholder="Enter Email" name="email" id="email" required/>
          <div id="email_error"></div>

          <label for="username"><b>Username</b></label>
          <input class="field-container" type="username" placeholder="Enter Username" name="username" id="username" required/>

          <label for="psw"><b>Password</b></label>
          <input class="field-container" type="password" placeholder="Enter Password" name="password" id="password" required/>

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input class="field-container" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
          <div id="password_error"></div>


          <hr/>
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

          <button type="submit" class="btn">Register</button>
          <p>Already have an account? <a href="login.html">Sign in</a>.</p>
        </section>
      </form>

      <form id="register" name="register" method="post" action="localhost:8001/api/v1/momentone/therapist/register">
        <section class="register-container" >
          <h1>Therapist Register</h1>
          <p>Please fill in this form to create a therapist account.</p>
          <hr/>

          <label for="email"><b>Email</b></label>
          <input class="field-container" type="username" placeholder="Enter Email" name="email" id="email" required/>
          <div id="email_error"></div>


          <label for="username"><b>Username</b></label>
          <input class="field-container" type="email" placeholder="Enter Username" name="username" id="username" required/>
          <div id="name_error"></div>


          <label for="psw"><b>Password</b></label>
          <input class="field-container" type="password" placeholder="Enter Password" name="password" id="password" required/>


          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input class="field-container" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
          <div id="password_error"></div>

          <hr/>
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

          <button type="submit" class="btn">Register</button>
          <p>Already have an account? <a href="login.html">Sign in</a>.</p>
        </section>
      </form>
    </div>
  )
}
export default register; // Export home
