import React, { useState } from'react';

export default function NewBox({ addBox }) {
    const INITIAL_STATE = {
        width: '',
        height: '',
        color: ''
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
        const newBox = {
            ...formData,
            width: Number(formData.width),
            height: Number(formData.height)
        };
        addBox(newBox);
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="width">Width : </label>
                <input
                    id="width"
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="height">Height : </label>
                <input
                    id="height"
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="color">Color : </label>
                <input
                    id="color"
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>
            <button>Add Box</button>
        </form>
    );
}