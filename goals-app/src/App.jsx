import { useState } from 'react'

import './App.css'

function GoalForm(props){

  const [formData, setFormData] = useState({goal:"", by: ""})
  {/*we create the handler with the copy inside of it, then set the value and the target of it */}
  function changeHandler(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  {/*Function of submit, prevent the reload and action for the button */}
  function submitHandler(e){
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal:"" , by:""})
  }

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
      {props.allGoals.map((g) => {
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      })}
    </ul>
  )
  
}

function App() {
  const[allGoals, upadteAllGoals] = useState([]);

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
