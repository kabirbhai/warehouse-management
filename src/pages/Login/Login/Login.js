import { useState } from "react";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let errorMessage;
  if (user) {
    navigate("/home");
  }
  if (error) {
    errorMessage = <p>oops!Wrong password</p>;
  }
  // handleLogin
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <h1 className="text-center m-2">Login here</h1>
      </div>

      <div className="form-container w-50 mx-auto border rounded  p-2 h-100 pt-5 ">
        <SocialLogin />
        <form onSubmit={handleLogin} className="form">
          <input
            className="w-100 mb-2"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <br />
          <input
            className="w-100 mb-3"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <br />
          <input
            onClick={() => signInWithEmailAndPassword(email, password)}
            className="social-btn d-flex align-items-center  justify-content-around w-50 mx-auto "
            type="submit"
            value="Login"
          />
          <p className="mt-2 text-center ">
            Don't have an account? <Link to="/register"> Register now</Link>
          </p>
        </form>
        {errorMessage}
      </div>
    </>
  );
};

export default Login;
