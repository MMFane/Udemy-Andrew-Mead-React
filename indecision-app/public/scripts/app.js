console.log("hello from app.js");

//jsx
// var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
    "p",
    null,
    "This is JSX from app.js!"
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);