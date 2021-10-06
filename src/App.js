import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
//class component with a constructor method and the state change.
class App extends React.Component{

    constructor(){
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange=this.handleChange.bind(this)//binding of the function inside the class component
    }
    handleChange(id){
        this.setState(prevState =>{
            const updateTodos=prevState.todos.map(todo=>{
                if(todo.id==id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                
                todos:updateTodos
                
            }
        })
    }


    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
        handleChange={this.handleChange}/>)
    
        return (
            <div>
            <h1 class="h1">My First App in React---To-Do List </h1>
            <div className="todo-list">
                {todoItems}
            </div>
            </div>
        )
    }
   
}

export default App