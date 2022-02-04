import { useState } from "react";
import "./CreateGoal.scss";

function CreateGoal(props) {
  const [goal, setGoal] = useState({
        title: "",
        content: "",
        complete: false
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
      content: "",
      complete: false
    })
    event.preventDefault()
    }

   

  return (
    <div>
      <form className="create-goal">
        <input name="title" 
        onChange={handleChange}
        value={goal.title}
        placeholder="Location" 
        />
        <textarea 
        name="content" 
        onChange={handleChange}
        value={goal.content}
        placeholder="What do you want to do there?" rows="3" />
        <button onClick={submitGoal}>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
}

export default CreateGoal;