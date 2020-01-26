import React from 'react';
import toDoData from './contents/ToDoData'
import ToDoItem from './contents/ToDoItem'
import './index.css';

class ToDoApp extends React.Component {

  //konstruktori moraju pozvat globalnu super klasu
  //u stanje uzmemo sve podatke
  //bind - funkcija stvi this na odredenu vrijednost
  constructor(){
    super()
    this.state={
      item: toDoData
    }
    this.changeClickedState = this.changeClickedState.bind(this)
  }

  //ne modificiramo stanje nego stvorimo novo stanje koje je suprotno od starog
  changeClickedState(id){
    this.setState(prevState=>{
      const updatedToDos = prevState.item.map( todo=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        item: updatedToDos
      }
    })
  }

  render(){
    //const todolist = toDoData.map(todoitem => <ToDoItem key={todoitem.id} todoitem={todoitem}/>)
    // opet listu slozimo tako da mapiramo stanje na todo po ToDoItem sablonom
    // i prosljedimo cijeli objekti funkciju
    const todolist = this.state.item.map(todo => <ToDoItem key={todo.id} 
      todo={todo} changeClickedState={this.changeClickedState}/>)
    return (
      <div className="todo-list mt-5">
        {todolist}
      </div>
    )
  }
}
export default ToDoApp;
