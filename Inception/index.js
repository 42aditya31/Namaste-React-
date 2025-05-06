import {React} from 'react';
import {ReactDOM} from 'react-dom'

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


// The main behind the sence of the making the Component is the below 

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Namste everyOne !! this is the h1 tag"),
//     React.createElement("h2", {}, "Namste everyOne !! this is the h2 tag"),
//   ])
// );

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "random attributes" },
//   "Namste everyOne !!"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// root.render(parent); // object



// But In the production build project we can use that but it's mess up the things!! That's why we will use the Component 


const HeaderComponent = () => {

  return (
    <div>
      <h1 key="1" className = " class-1"> hello </h1>
      <h1 key="2" className = " class-2"> hello 2 </h1>
    </div>
  )
}

{/* <HeaderComponent/> */}
root.render(<HeaderComponent/>);
