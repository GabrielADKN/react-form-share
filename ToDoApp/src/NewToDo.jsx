import React, { useState } from'react';

export default function NewToDo({ addTodo }) {
    const INITIAL_STATE = {
        text: '',
        checked: false
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="text">Text : </label>
                <input
                    id="text"
                    type="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                />
            </div>
            <button>Add Todo</button>
        </form>
    );
}