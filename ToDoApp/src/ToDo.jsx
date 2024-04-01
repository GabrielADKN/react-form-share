import React, { useState } from "react";

export default function ToDo({ id, text, checked, onChecked, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    const toggleEdit = () => setIsEditing(!isEditing);

    const handleChange = (e) => {
        setEditText(e.target.value);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEdit(id, editText);
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <li>
                <form onSubmit={handleEditSubmit}>
                    <input type="text" value={editText} onChange={handleChange} />
                    <button type="submit">Save</button>
                    <button onClick={toggleEdit}>Cancel</button>
                </form>
            </li>
        );
    }

    return (
        <li style={{ textDecoration: checked ? "line-through" : "none" }} className="todo-item">
            <input type="checkbox" checked={checked} onChange={() => onChecked(id)} />
            {text}
            <button onClick={toggleEdit} className="edit-button">Edit</button>
            <button onClick={onDelete} className="delete-button">X</button>
        </li>
    );
}
