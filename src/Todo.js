import React from 'react'

const Todos =({todos,deleteTodo}) =>{
    const todoList=todos.length?(
      todos.map(todo=>{
        return(
          <div className="collection-item" id={todo.id} key={todo.id}>
          <span >{todo.content}<i className="fa fa-window-close fa-2x close-button" aria-hidden="true"  onClick={()=>{deleteTodo(todo.id)}}></i></span>
          </div>
        )
      })
    ):(
      <p className="center">You have No Todos Left.</p>
    )
    return (
      <div className="todos collection">
       {todoList}
      </div>
    )
}

export default Todos;