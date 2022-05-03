import React from "react";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-center m-2">Login here</h1>
      </div>

      <div className="w-50 mx-auto">
        <SocialLogin />
        <form className="mt-2">
          <input
            className="w-100 rounded p-2 mb-2"
            type="email"
            placeholder="email"
          />
          <br />
          <input
            className="w-100 rounded p-2 mb-2"
            type="password"
            placeholder="password"
          />
          <br />
          <input className="d-block mx-auto mb-2" type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
