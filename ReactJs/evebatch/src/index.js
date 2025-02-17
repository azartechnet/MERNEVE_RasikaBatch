import React, { useState } from "react";
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

  /*class Sample extends React.Component
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
  r1.render(<Sample f1="red"/>)*/

  //React State

  /*class Sample extends React.Component
  {
    constructor(props)
    {
      super(props)
      this.state={
        name:'Rahul',
        age:35,
        color:"red"
      }
    }
    render()
    {
      return(
        <div>
        <h1>Sample</h1>
        <h2>name:{this.state.name}</h2>
        <h3>age:{this.state.age}</h3>
        <h4>color:{this.state.color}</h4>
        </div>
      )
    }
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample/>)*/

  //changing the state object

  /*class Sample extends React.Component
  {
    constructor(props)
    {
      super(props)
      this.state={
        name:'Rahul',
        age:35,
        color:"red"
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick()
  {
    this.setState({
      name:'Rahul Kumar',
      age:36,
      color:"blue"
      })
  }
  render()
  {
    return(
      <div>
        <h1>Sample</h1>
        <h2>name:{this.state.name}</h2>
        <h3>age:{this.state.age}</h3>
        <h4>color:{this.state.color}</h4>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Event

/*function Football()
{
    const shoot=()=>{
      alert("Goal scored")
    }
    return(
      <div>
        <h1>Football</h1>
        <button onClick={shoot}>Shoot</button>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React Event Argument Passing

/*function Football()
{
  const shoot=(year)=>{
    alert("Goal scored in "+year)
  }
  return(
    <div>
     <h1>Football</h1>
      
      <button onClick={()=>shoot(2022)}>Shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Conditional Rendering

/*function MissedGoal()
{
  return<h1>MissedGoal</h1>
}
function MadeGoal()
{
  return<h1>Goal Made</h1>
}
function Football(props)
{
  const isGoal=props.isGoal;
  if(isGoal)
  {
    return <MadeGoal/>
  }
  else
  {
    return <MissedGoal/>
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>)*/

//React List using Map

/*function Car(props)
{
  return<li>I am {props.b1}</li>
}
function Garage()
{
  const cars=["BMW","Audi","Toyota"]
  return(
    <div>
      <h1>Garage</h1>
      <ul>
        {cars.map((car)=><Car b1={car}/>)}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React  keys and values

/*function Car(props)
{
  return<li>{props.id}{props.name}</li>
}
function Garage()
{
  const cars=[
    {id:1,name:"BMW"},
    {id:2,name:"Audi"},
    {id:3,name:"Toyota"}
    ]
    return(
      <div>
        <h1>Garage</h1>
        <ul>
          {cars.map((car)=><Car id={car.id} name={car.name}/>)}
        </ul>
      </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//getDerivedStateFromprops

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={count:0}
  }
  static getDerivedStateFromProps(props,state)
  {
      console.log("getDerivedStatefromprops")
      return {count:props.count}
  }
  render()
  {
     return(
      <div>
        <h1>Header</h1>
        <p>Count:{this.state.count}</p>

      </div>
     )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header count={10}/>)*/

//ComponentDidMount

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={favcolor:"red"}
  }
  componentDidMount()
  {
    console.log("componentDidMount")
    setTimeout(()=>{
      this.setState({favcolor:"blue"})
    },3000)
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>My fav color is {this.state.favcolor}</p>
        </div>
        )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//shouldComponentUpdate

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {favcolor:"red"};
  }
  shouldComponentUpdate(nextProps,nextState)
  {
    console.log("shouldComponentUpdate")
  }
  changeColor=()=>{
    this.setState({favcolor:"blue"})
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>My fav color is {this.state.favcolor}</p>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    )
}
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//React useState
/*function Counter()
{
  const[count,setCount]=React.useState(0);
  return(
    <div>
      <p>Count : {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//Another Example of useState

/*function UserProfile()
{
  const [user,setUser]=useState({name:"mohamed",age:35,email:"mohamed@gmail.com"})

  const updateEmail=()=>{
    setUser({...user,email:"mohamed123@gmail.com"})
  }
  return(
    <div>
        <p>Username : {user.name}</p>
        <p>Age : {user.age}</p>
        <p>Email : {user.email}</p>
        <button onClick={updateEmail}>Update Email</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<UserProfile/>)*/

//useState with Arrays

function TodoList()
{
  const [todos,setTodos]=useState(["BuyMilk","BuyEggs","BuyBread"])

  const addTodo=()=>{
    setTodos([...todos,"BuyChicken"])
  }
  return(
    <div>
       <ul>
         {todos.map((todo,index)=>(
          <li>{index}{todo}</li>
          ))}
       </ul>
       <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<TodoList/>)