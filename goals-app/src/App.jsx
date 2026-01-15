import { useState } from 'react'

import './App.css'

function GoalForm(props){

  const [formData, setFormData] = useState({goal:"", by: ""})
  {/*we create the handler with the copy inside of it, then set the value and the target of it */}
  function changeHandler(e){
    {/*e.target.name -> reads the targe name and then sets the value of its property with e.target.value*/}
    {/*this works because it allows us to determine the targe of the name dynamically, so i do not have to create on for each one*/}
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  {/*Function of submit, prevent the reload and action for the button */}
  function submitHandler(e){
    e.preventDefault();
    {/* this props.onAdd, basically waits until the props is passed trough and then updates the informaiton of the all goals state variable in the app component.*/}
    props.onAdd(formData);
    {/*reset the form data, so it gets blancked for better using experience */}
    setFormData({goal:"" , by:""})
  }
 {/*render all the the stuff we want to show in the screen  */}
  return(
    <>
      <h1>My little Lemon Goals:</h1>
      <form onSubmit={submitHandler}>
        <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler}/>
        <input type='text' name='by' placeholder='By...' value={formData.by} onChange={changeHandler} />
        <button>Submit Goal</button>
      </form>
    
    </>
  )
}

function ListOfGoals(props){
  return(
    <ul>
      {/* according to the syntax of arrow functions, we create a new variable to pass assign the copy and then printed on the screen*/}
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  )
  
}

function App() {
  const[allGoals, upadteAllGoals] = useState([]);
  {/*this function acepts the goal as entry and updates the value of goal */}
  function addGoal(goal){upadteAllGoals([...allGoals, goal])}
  return (
    <>
      <div className="App">
        <GoalForm onAdd={addGoal}/>
        <ListOfGoals allGoals={allGoals}/>
      </div>
    </>
  )
}

export default App
