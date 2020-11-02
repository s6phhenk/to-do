import * as React from 'react';

//components
import {ToDoListItem} from './ToDoListItem';
import {Todo, ToggleTodo} from '../types';

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const ToDoList: React.FC <TodoListProps> = ({todos, toggleTodo}) => {
    return (
    <ul>
        {/* für jedes todo, mappe ein neues list item */}
        {todos.map(todo => {
            
            <ToDoListItem 
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo} 
            />
        })}
    </ul>
    );
};