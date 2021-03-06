import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Welcome to React Fundamentals at Eleven Fifty</h1>

        <p>
          This app is intended to be a starter/tutorial app for your upcoming
          project and a learning sandbox for you in months and years to come
          should you continue to develop software with React. In this
          application we will work through some of the basic React concepts,
          build out some small applications, and then unleash you to build your
          own applications.
        </p>
        <hr />
        <h1>Important Notes</h1>
        <ol>
          <li>Being component-based, you can move onto the next module.</li>
          <li>
            The styling is intentionally bland in some spots. Just a sandbox.
          </li>
          <li>At this phase, this site is not yet responsive.</li>
          <li>
            Refactor the text on this page and make this your own project.
          </li>
          <li>
            This app scratches the surface of what is possible with React.
          </li>
          <li>The setup for this app might be confusing.</li>
          <li>
            <Link to="/resources">React Resources</Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
