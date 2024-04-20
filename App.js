const parent = React.createElement("div",
{id: "parent"},
[React.createElement("div", {id: "child"}, React.createElement("h1", {}, "I am h1 tag")),
React.createElement("div", {id: "child"}, React.createElement("h2", {}, "I am h2 tag"))
])
// const heading = React.createElement('h1', {id: "heading"}, 'Hello World From React!!');
// console.log(heading);
//heading is an object and a React element and while rendering in the DOM then converts into html element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);