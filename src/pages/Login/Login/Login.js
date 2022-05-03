import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
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
    errorMessage = <p>Wrong password</p>;
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

      <div className="w-50 mx-auto">
        <SocialLogin />
        <form onSubmit={handleLogin} className="mt-2">
          <input
            className="w-100 rounded p-2 mb-2"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <br />
          <input
            className="w-100 rounded p-2 mb-2"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <br />
          <input
            onClick={() => signInWithEmailAndPassword(email, password)}
            className="d-block mx-auto mb-2"
            type="submit"
            value="Login"
          />
        </form>
        {errorMessage}
      </div>
    </>
  );
};

export default Login;
