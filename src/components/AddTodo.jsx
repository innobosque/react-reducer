import { useState, useRef } from 'react'
import { Button } from 'react-bootstrap';

export const AddTodo = ({onAddTodo,loading}) => {
    const [value, setValue] = useState('');
    const inputEl = useRef(null);

    const handleSubmit = e => {
        const currentValue = value.trim();
        if(Boolean(currentValue.length)){
            onAddTodo(currentValue);
            setValue("");
        }
        inputEl.current.focus();
        e.preventDefault()
    }

    const handleChange = e => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-2 p-2 border rounded">
                <label className='form-label' htmlFor="new-data">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="new-data" 
                    onChange={handleChange}
                    ref={inputEl}
                    value={value}
                    placeholder="Nuevo item"
                />
            </div>
            <Button
                variant="primary"
                type="submit"
                disabled={loading}>
                Añadir item
            </Button>
        </form>
    )
}
