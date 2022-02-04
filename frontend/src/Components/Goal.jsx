import "./Goal.scss"

function Goal(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleGoal() {
    props.onComplete(props.id);
  }


 return (
 <div className="note">
   <h1>{props.title}</h1>
   <p>{props.content}</p>
   {/* <button className="fas fa-check"></button> */}
   <button onClick={handleGoal} className="complete-btn">
     <i className="fas fa-check"></i>
   </button>

   <button onClick={handleClick}>
     <i className="far fa-trash-alt">
       </i></button>
 </div>
 )
}

export default Goal