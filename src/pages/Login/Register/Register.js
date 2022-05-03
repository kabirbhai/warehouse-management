import React from "react";

const Register = () => {
  return (
    <>
      <div>
        <h1 className="my-2 text-center">Please Register</h1>
      </div>
      <div className="w-50 mx-auto">
        <form className="mt-2">
          <input
            className="w-100 rounded p-2 mb-2"
            type="name"
            placeholder="Name"
          />
          <br />
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

export default Register;
