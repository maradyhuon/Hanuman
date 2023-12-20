import React from "react";

const Login = () => {
  return (
    <div className="container">
      <section id="content">
        <form action="">
          <h1>Login Form</h1>
          <div>
            <input type="text" placeholder="Username" required id="username" />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
            />
          </div>
          <button className="btn">Login</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
