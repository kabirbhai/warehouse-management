import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <input type="email" placeholder="email" />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default Login;
