import React from "react";
import ReactDOM from "react-dom/client";

//Basic Rendering
/*const App=()=>{
  return(
    <div>
      <h1>React App</h1>
      <p>This is a paragraph</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/
//Function Rendering

/*function Sample()
{
  return(
    <div>
      <h1>Sample App</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Dynamic Rendering

const App=()=>{
  const name="Rahul"
  return(
    <div>
      <h1>Dynamic App</h1>
      <p>My name is {name}</p>
      <p>Today date:{new Date().toDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)