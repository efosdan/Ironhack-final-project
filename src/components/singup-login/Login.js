import React from "react";
import "./SignUp.css";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
></link>;

function Login() {
  return (
    <div>
      <div class="container">
        <input type="checkbox" id="flip" />

        <div class="forms">
          <div class="form-content">
            <div class="login-form">
              <div class="title">Login</div>

              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div class="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div class="button input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div class="text sign-up-text">
                    Don't have an account?{" "}
                    <label>
                      <a href="/signup">Sigup now</a>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
