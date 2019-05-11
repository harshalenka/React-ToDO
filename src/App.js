import React,{Component} from 'react';
import Todos from './Todo'
import AddTodo from './AddForm'
import "./index.css"
class App extends Component {
  state={
    todos:[

    ]
  }
  deleteTodo=(id)=>{
   const todos= this.state.todos.filter(
     todo =>{
       return todo.id !== id
     }
   );
   this.setState({
     todos
   })
  }
  addTodo=(todo)=>{
   todo.id=Math.random();
   let todos=[...this.state.todos,todo];
   this.setState({
     todos
   })
  }
  render(){
    return (
      <div className="Todo-App container">
      
        <h1 className="center blue-text">ToDo List</h1>
        <span>No Of Items: {this.state.todos.length}</span>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        
      </div>
    );
  }
}

export default App;
