import React from "react";

const Register = () => {
  return (
    <div>
      <form className="w-50 mx-auto">
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
