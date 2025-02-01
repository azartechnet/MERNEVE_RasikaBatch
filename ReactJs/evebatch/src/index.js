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

/*const App=()=>{
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
r1.render(<App/>)*/

//React without JSX

/*const myelem1=React.createElement('h1',null,'welcome')
const myelem2=React.createElement('p',null,'This is a paragraph')
const r1=ReactDOM.createRoot(document.getElementById('root'))
const r2=ReactDOM.createRoot(document.getElementById('root1'))
r1.render(myelem1)
r2.render(myelem2)*/

//React with JSX

/*const myelem=<h1>Welcome</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem)*/

//React List
/*const Myelem=()=>{
  return(
    <div>
      <h1>My List</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
      </ol>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/

//Conditional Rendering
//if else statement
/*const x=100;
let text="";
if(x>10){
  text="Greater than 10"
  }else{
    text="Less than 10"
    }
    const Myelem=()=>{
      return(
        <div>
          <h1>Conditional Rendering</h1>
          <p>{text}</p>

        </div>
      )
    }
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/
//Nested if else 

/*const x=100;
let text="";
if(x>10){
  if(x>50){
    text="Greater than 50"
    }else{
      text="Greater than 10 but less than 50"
      }
      }else{
        text="Less than 10"
        }
        const Myelem=()=>{
          return(
            <div>
              <h1>Conditional Rendering</h1>
              <p>{text}</p>
              </div>
              )
              }
              const r1=ReactDOM.createRoot(document.getElementById('root'))
              r1.render(<Myelem/>)*/

//Else if ladder
/*const x=100;
let text="";
if(x>100){
  text="Greater than 100"
  }else if(x>50){
    text="Greater than 50"
    }else if(x>10){
      text="Greater than 10"
      }else{
        text="Less than 10"
        }
        const Myelem=()=>{
          return(
            <div>
              
              <h1>Conditional Rendering</h1>
              <p>{text}</p>
            </div>
            )
            }
            const r1=ReactDOM.createRoot(document.getElementById('root'))
            r1.render(<Myelem/>)*/
//importing css and bootstrap

/*import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
  return(
    <div>
      <h1>Conditional Rendering</h1>
      <button type="button" className="btn btn-primary">ClickHere</button>
      <button type="button" className="btn btn-danger">ClickHere</button>
      <h2 className="f1">This is Heading</h2>
      <p id="f2">This is paragraph</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Function Component

/*function Sample()
{
  return(
    <div>
      <h1>Function Component</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//class Component

/*class Sample extends React.Component
  {
      render()
      {
        return(
          <div>
            <h1>Class Component</h1>
          </div>
        )
      }
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample/>) */

  //Function component with props

  /*function Sample(props)//Argument Passing
  {
     return(
      <div>
        <h1>Function Component</h1>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
      </div>
     )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample name="Rahul" age="25"/>)*/

  //Component in Component

  /*function Component1()
  {
    return(
      <div>
        <h1>Component 1</h1>
        <Component3/>
      </div>
    )
  }
  function Component2()
  {
    return(
      <div>
        <h1>Component 2</h1>
        <Component1/>
        </div>
        )
  }
  function Component3()
  {
    return(
      <div>
        <h1>Component 3</h1>
        
      </div>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))

  r1.render(<Component2/>)*/

  //Constructor using super

  /*class Sample extends React.Component
  {
    constructor()
    {
      super()
      {
        this.state={
          name:"Rahul",
          age:25

      }
      }
    }
    render()
    {
       return(
        <div>
           <h1>Sample</h1>
           <h2>name:{this.state.name}</h2>
           <h2>age:{this.state.age}</h2>
        </div>
       )
    }
  
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample/>)*/

  //Constructor using props

  class Sample extends React.Component
  {
    constructor(props)
    {
      super(props)
      this.state={f1:'green'}
    }
    render()
    {
      return(
        <div>
          <h1>Sample</h1>
          <h2>color:{this.props.f1}</h2>
          <h3>AnotherColor::{this.state.f1}</h3>
        </div>
      )
    }
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample f1="red"/>)