import { useState } from "react";
import "./CreateGoal.scss";

function CreateGoal(props) {
  const [goal, setGoal] = useState({
        title: "",
        content: ""
        });
        

    function handleChange(event) {
      const { name, value } = event.target;

      setGoal(prevGoal => {
        return {
          ...prevGoal,
          [name]: value
        }
      });
    }

    function submitGoal(event) {
    props.onAdd(goal)
    setGoal({
      title: "",
      content: ""
    })
    event.preventDefault()
    }

  return (
    <div>
      <form className="create-goal">
        <input name="title" 
        onChange={handleChange}
        value={goal.title}
        placeholder="Title" 
        />
        <textarea 
        name="content" 
        onChange={handleChange}
        value={goal.content}
        placeholder="What's your goal?" rows="3" />
        <button onClick={submitGoal}>Add</button>
      </form>
    </div>
  );
}

export default CreateGoal;