import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import CreateGoal from './Components/CreateGoal';
import Goal from './Components/Goal';
// import {Routes, Route} from "react-router-dom";
import Register from './Components/Register';
// import Map from './Components/Map';
import { useEffect } from 'react';

const localStorageKey = "goals-list";

function App() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState({
    complete: false
  })

  useEffect(() => {
const storageGoals = JSON.parse(localStorage.getItem(localStorageKey))
if (storageGoals) {
  setGoals(storageGoals)
}
  }, []);

  useEffect(() => {
localStorage.setItem(localStorageKey, JSON.stringify(goals))
  }, [goals]);

  function addGoal(newGoal) {
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  function deleteGoal(id) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goalItem, index) => {
        return index !== id;
      });
    });
  }

  const completeGoal = (id) => {
    let mapped = goals.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setGoals(mapped);
  }



  return (
    <div>
      <Header />
    <Register />
      <CreateGoal onAdd={addGoal} />
      {goals.map((goalItem, index) => {
        return (
          <Goal
            key={index}
            id={index}
            title={goalItem.title}
            content={goalItem.content}
            onDelete={deleteGoal}
            onComplete={completeGoal}
          />
        );
      })}
    </div>
  );
}

export default App;
