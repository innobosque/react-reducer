import { useReducer } from "react";
import { useState } from "react";
import { todoReducer, types } from '../helpers';

export const useData = () => {
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useReducer(todoReducer, {
    })

    const handleAddTodo = value => {
        setLoading(true);

        // En este método pasamos un objeto llamada action 
        // Propiedades: type y payload
        dispatch({
            type: types.add,
            payload: {
                id: Date.now(),
                value
            }
        });

        // Simulación async
        setTimeout(() => {
            setLoading(false);
        }, 500);

    }

    const handleDelete = id => {
        setLoading(true);
        dispatch({
            type: types.delete,
            payload: id
        });
        setLoading(false);
    }
    return {
        handleAddTodo,
        handleDelete,
        loading,
        state,
    }
}
