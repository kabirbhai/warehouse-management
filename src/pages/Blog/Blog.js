import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <div className="container">
        <div className="blog-item">
          <h5>Difference between javascript and nodejs?</h5>
          <p>
            <strong>NodeJS</strong> is a cross-platform and opensource
            Javascript runtime environment that allows the javascript to be run
            on the server-side. Nodejs allows Javascript code to run outside the
            browser. Nodejs comes with a lot of modules and mostly used in web
            development. <br />
            <strong>Javascript</strong> is a Scripting language. It is mostly
            abbreviated as JS. It can be said that Javascript is the updated
            version of the ECMA script. Javascript is a high-level programming
            language that uses the concept of Oops but it is based on prototype
            inheritance. <br />
            <strong>Javascript</strong> can only be run in the browsers. <br />
            <strong>Nodejs</strong> We can run Javascript outside the browser
            with the help of NodeJS.
          </p>
        </div>

        <div className="blog-item">
          <h5>When should you use nodejs and when should you use mongodb?</h5>
          <p>
            We should use Nodejs if we want to build a real-time web
            application. it's so powerful javascript runtime environment
          </p>
          <p>
            When we want to store our data we can use any database. There are so
            many databases but 2 most popular database type called sql and
            nosql. mongodb is no sql database. it ease to use and organize
            nicely.
          </p>
        </div>

        <div className="blog-item">
          <h5> Differences between sql and nosql databases?</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            non consectetur amet deleniti! Ducimus, architecto nam. Commodi
            accusamus dolor totam est enim. Aspernatur id eveniet enim aliquid
            iusto? Ratione, excepturi!
          </p>
        </div>

        <div className="blog-item">
          <h5> What is the purpose of jwt and how does it work?</h5>
          <p>
            A JSON Web Token (JWT) is an access token standardized according to
            RFC 7519, which makes it possible for two parties to securely
            exchange data. It contains all important information about an
            entity, meaning that no database queries are necessary and the
            session doesn’t need to be saved on the server. JWT is especially
            popular in authentication processes. Its short messages can be
            encrypted and securely convey who the sender is and whether they
            have the necessary access rights. Users themselves only come into
            indirect contact with the token, for example, when they enter
            usernames and passwords into a mask. The real communication takes
            places between the client and the server.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
