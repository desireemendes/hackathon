import "./Goal.scss"

function Goal(props) {

  function handleClick() {
    props.onDelete(props.id);
  }
 return (
 <div className="note">
   <h1>{props.title}</h1>
   <p>{props.content}</p>
   <button onClick={handleClick}><i class="far fa-trash-alt"></i></button>
 </div>
 )
}

export default Goal