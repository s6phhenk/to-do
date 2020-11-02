import * as React from "react";

//components
import { Todo, ToggleTodo } from "../types";

// Typ: ToDoProps
interface ToDoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

// props wäre zu ungenau, daher übergibt man React.FC direkt ToDoListItemProps 
// mit desctructuring übergibt man nun das 
export const ToDoListItem: React.FC<ToDoListItemProps> = ({
    todo,
    toggleTodo
    }) => {
    return (
        <li>
            <label style={{textDecoration: todo.complete ? "line-through" : "none"}}>
                {/* Dem input Feld übergibt man die property complete (boolean) des todo Objekts
                Wenn complete == true, checked wird angewandt, ansonsten leeres Kästchen */}
                <input 
                type="checkbox" 
                checked={todo.complete}
                onChange={ () => toggleTodo(todo)}
                />
                {todo.text}
            </label>
        </li>
    );
}