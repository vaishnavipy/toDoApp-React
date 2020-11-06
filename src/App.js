
import './App.css';
import ToDoList from "./todolist"

function App() {

  const todolist =[
    {id:"1",task:"Take Out Trash"},
    {id:"2",task:"Grocery Shopping"},
    {id:"3",task:"Clean Gecko Tank"},
    {id:"4",task:"Mow Lawn"},
    {id:"5",task:"Catch up On silicon Valley"}
  ]

  let rows=[];

  todolist.forEach(function(elm,index){

    rows.push(<ToDoList id={elm.id} task={elm.task}/>)


  })

  return (



    <div className="container" >
      {rows}
    </div>
  );
}

export default App;
