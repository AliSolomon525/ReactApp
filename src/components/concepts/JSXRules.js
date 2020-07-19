import React from "react";

const JSXRules = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="section-title">JSX</h1>
        <dl>
          <dt>Resembles HTML</dt>
          <dd>It's not. It's actually closer to JS.</dd>
          <dt>"React elements"</dt>
          <dd>
            These are used to construct and update the DOM, or what you see on
            the screen.
          </dd>
          <dt>Not required</dt>
          <dd>You can write in vanilla JS, but most sane people use JSX.</dd>
        </dl>
        <hr />
      </div>
      <NormalComponent />
      <CreateElementComponent />
    </div>
  );
};

export default JSXRules;

const NormalComponent = () => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h1>Normal Functional Component</h1>
      <p>This was constructed with JSX in the return.</p>
      <img
        src="data:image/png;base64,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"
        alt="jsx logo"
      />
    </div>
  );
};

const CreateElementComponent = () => {
  return React.createElement(
    "div",
    { style: { border: "2px solid black" } },
    React.createElement("h1", null, "CreateElement Component"),
    React.createElement(
      "p",
      null,
      "This was constructed with CreateElement calls in the return."
    ),
    React.createElement(
      "img",
      {
        src:
          "https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png",
      },
      null
    )
  );
};
