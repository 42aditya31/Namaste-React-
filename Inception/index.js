/*

<div id = parent >
   <div id = child>
     <h1> Namste everyOne !! this is the h1 tag </h1>
   </div>
</div>



// But when we want to add sblings with the help of React

<div id = parent >
   <div id = child>
     <h1> Namste everyOne !! this is the h1 tag </h1>
     <h2> Namste everyOne !! this is the h2 tag </h2>
   </div>
</div>


for that you can pass an array as a third elemnt of the Createelement 


*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namste everyOne !! this is the h1 tag"),
    React.createElement("h2", {}, "Namste everyOne !! this is the h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "random attributes" },
  "Namste everyOne !!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent); // object
