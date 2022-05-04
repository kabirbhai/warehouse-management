import React from "react";
import "./SocialLogin.css";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Google from "../../images/social/google.png";
import GitHub from "../../images/social/github.png";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, GithubLoading, GithubError] =
    useSignInWithGithub(auth);

  let errorMessage;
  if (user || githubUser) {
    navigate("/home");
  }
  if (error || GithubError) {
    errorMessage = <div>{error?.message && error?.message}</div>;
  }

  return (
    <>
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="social-btn d-flex  align-items-center justify-content-around  w-50 mx-auto mb-1"
        >
          <img src={Google} alt="" />
          <span className="px-4 ">Continue with Google</span>
        </button>
      </div>

      <div>
        <button
          onClick={() => signInWithGithub()}
          className="social-btn d-flex align-items-center  justify-content-around w-50 mx-auto mb-1"
        >
          <img src={GitHub} alt="" />
          <span className="px-4 "> Continue with GitHub</span>
        </button>
        {errorMessage}
      </div>

      {/* OR    */}
      <div
        style={{ margin: "30px" }}
        className="d-flex align-items-center mx-2"
      >
        <div style={{ height: "1px" }} className="w-50 bg-success"></div>
        <strong className=" px-2">OR</strong>
        <div style={{ height: "1px" }} className="w-50 bg-success "></div>
      </div>
    </>
  );
};

export default SocialLogin;
