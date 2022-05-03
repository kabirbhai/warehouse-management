import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/home");
  }
  // handleRegister
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <>
      <div>
        <h1 className="my-2 text-center">Please Register</h1>
      </div>

      <div className="w-50 mx-auto">
        <form onSubmit={handleRegister} className="mt-2">
          <input
            className="w-100 rounded p-2 mb-2"
            type="text"
            name="name"
            placeholder="Name"
          />
          <br />
          <input
            className="w-100 rounded p-2 mb-2"
            type="email"
            name="email"
            placeholder="email"
          />
          <br />
          <input
            className="w-100 rounded p-2 mb-2"
            type="password"
            name="password"
            placeholder="password"
          />
          <br />
          <input
            className="d-block mx-auto mb-2"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </>
  );
};

export default Register;
