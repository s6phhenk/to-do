import * as React from 'react';
// stateful component
import {useState, ChangeEvent, FormEvent} from 'react';

import {AddTodo} from '../types';

interface AddTodoProps {
    addTodo: AddTodo;
}

export const AddToDo: React.FC<AddTodoProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState<string>("");

    const handleChange = (e: ChangeEvent <HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    };


    return (
        <form>
            <input 
            type="text" 
            value={newTodo}
            onChange={handleChange}
            />
            <button 
            type="submit"
            onClick={handleSubmit}>Add Todo</button>
        </form>
    )
}