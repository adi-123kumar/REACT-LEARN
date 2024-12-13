import {useState} from 'React'; 

export default function TodoList(){
    let [todos,setTodos]= useState(["sampleTodo"]);
    let [newTodo,setNewTodo]=useState("");

    function addTask(){
        setTodos([...todos,newTodo])
        setNewTodo("")
    }
    function updatTodoValue(event){
        console.log(event.target.value)
        setNewTodo(event.target.value);
    }

return (
    <div>
        <input type="text" placeholder='add a task' value={newTodo}  onChange={updatTodoValue}/><br></br>
        <button onClick={addTask}>Add Task</button>
        <h3>TodoList</h3>
        <hr />
        <ul>
            {todos.map((todo)=>(
                <li>{todo}</li>
            ))}
        </ul>
    </div>
    
)
}