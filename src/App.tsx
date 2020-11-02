import * as React from "react";
//hooks
import {useState} from 'react';
// css
import './App.css';
// type file
import {Todo, ToggleTodo, AddTodo} from './types';
// components
import { ToDoListItem } from "./components/ToDoListItem";
import { ToDoList } from "./components/ToDoList";
import { AddToDo } from "./components/AddToDo";

// stateful component

// sample data
// todos is of type Todo, takes an array of todos 
const initialTodos: Array<Todo> = [
  {
    id: 1,
    text: "Lernen",
    complete: false
  }, 
  {
    id: 2,
    text: "Einkaufen",
    complete: true
  },
  {
    id: 3,
    text: "Joggen",
    complete: false
  }
]

// Typescript: App ist vom Typ React.FunctionComponent
const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  // Funktion, um Todos umzuschalten: Ist das Todo complete oder nicht mehr? 
  const ToggleTodo: ToggleTodo = selectedTodo => {

    // neues Todos Array --> map over existing todos array 
    const newTodos = todos.map(todo => {
      // für jedes Todo Item, falls es ausgewählt ist, gebe das Gegenteil von complete (true, false) aus 
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo; 
    });
    // update the state 
    setTodos(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, 
                {id: 1, text: newTodo, complete: false }]);
  };

    return (
        <div className="Background">
        <div className="Header">
          <div className="Title">To Do List Application</div>
        </div>
  
        <div className="Main">
          <>
            <ToDoList 
              todos={todos}
              toggleTodo={ToggleTodo} 
              />
              <AddToDo 
              addTodo={addTodo}
              />
          </>
        </div>
      </div>
    )
}

export default App; 