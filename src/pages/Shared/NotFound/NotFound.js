import React from "react";

const NotFound = () => {
  return (
    <>
      <section
        style={{ height: "100vh" }}
        className="px-4 py-32 mx-auto d-flex justify-content-center align-items-center  max-w-7xl"
      >
        <div>
          <p className="text-center h2">Error 404</p>
          <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
            Oops! The page you're looking for isn't here.
          </h1>
          <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
            You might have the wrong address, or the page may have moved.
          </p>
        </div>
      </section>
    </>
  );
};

export default NotFound;
