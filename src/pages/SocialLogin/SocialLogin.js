import React from "react";

const SocialLogin = () => {
  // CUSTOM CSS WITH VARIABLE
  const buttonStyle = {
    border: "none",
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px ",
    padding: "10px",
  };

  return (
    <>
      <div>
        <button style={buttonStyle} className="d-block mx-auto mb-1">
          Continue with Google
        </button>
      </div>

      <div>
        <button style={buttonStyle} className="d-block mx-auto mb-1">
          Continue with GitHub
        </button>
      </div>

      {/* OR    */}
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-success"></div>
        <strong className=" px-2">OR</strong>
        <div style={{ height: "1px" }} className="w-50 bg-success "></div>
      </div>
    </>
  );
};

export default SocialLogin;
