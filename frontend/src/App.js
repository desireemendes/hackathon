import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import CreateGoal from './Components/CreateGoal';
import Goal from './Components/Goal';
// import {Routes, Route} from "react-router-dom";
// import Register from './Components/Register';

function App() {
  const [goals, setGoals] = useState([]);

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
  return (
    <div>
      <Header />
      <CreateGoal onAdd={addGoal} />
      {goals.map((goalItem, index) => {
        return (
          <Goal
            key={index}
            id={index}
            title={goalItem.title}
            content={goalItem.content}
            onDelete={deleteGoal}
          />
        );
      })}
    </div>
  );
}

export default App;
