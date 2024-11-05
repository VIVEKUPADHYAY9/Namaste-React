// // const parent = React.createElement(
// //   "div",
// //   { id: "parent" },
// //   [
// //     React.createElement("div", { id: "child" }, [
// //       React.createElement("h1", { id: "subchild" }, "h1 first tag"),
// //       React.createElement("h2", {}, "h2 first tag"),
// //     ]),
// //     React.createElement("div", { id: "child2" }, [
// //       React.createElement("h1", {}, "h1 first tag"),
// //       React.createElement("h2", {}, "h2 first tag"),
// //     ]),
// //   ]
// //   // console.log(parent);
// // );
import React from "react";
import ReactDOM from "react-dom/client";
import  { useState } from "react";

// // React.createElement => obeject => HTMLElement(render)
// const heading = React.createElement("h1", {}, "hey vivek upadhya");
// console.log(heading);

// //jsx - HTMTl- like or XML-like syntax
// // jsx (transpiled before it reaches the js)-PARCEL-babel-
// const jsxHeading = <h1>Namste React using jsx Rock</h1>;

// //React component
// //There are two type of React component
// // class Based component -OLD
// //Functional component - NEW

// // here understand Fuctional component

// const HeadingComponent = () => {
//   return <h1>hey this Functional component</h1>;
// };
// // Now when we render the functional component like that
// //(<HeadingComponent/>)

let App = function App() {
  let [score, setscore] = useState(100);
  return (
    <div>
      <h1>{score}</h1>
      <button onClick={() => setscore(200)}>change here</button>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
