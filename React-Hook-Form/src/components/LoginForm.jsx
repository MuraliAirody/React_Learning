import React from "react";

function LoginForm() {
  return (
    <div>
      <h1>Login Form</h1>

      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
