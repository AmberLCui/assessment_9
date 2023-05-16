import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ newSnack, newDrink }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        recipe: "",
        serve: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmitSnack = evt => {
        evt.preventDefault();
        const snack = { ...formData, id: uuid() };
        newSnack(snack);
        setFormData({ name: "", description: "", recipe: "", serve: "" });
    };

    const handleSubmitDrink = evt => {
        evt.preventDefault();
        const drink = { ...formData, id: uuid() };
        newDrink(drink);
        setFormData({ name: "", description: "", recipe: "", serve: "" });
    };

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={formData.name}
                        id="name"
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="description"
                        id="description"
                        value={formData.description}
                    />
                </div>
                <div>
                    <label htmlFor="recipe">Recipe</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="recipe"
                        value={formData.recipe}
                        id="recipe"
                    />
                </div>
                <div>
                    <label htmlFor="serve">Serve</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="serve"
                        value={formData.serve}
                        id="serve"
                    />
                </div>
                <button onClick={handleSubmitSnack} id="newSnackButton">Add a new snack!</button>
                <button onClick={handleSubmitDrink} id="newDrinkButton">Add a new drink!</button>
            </form>
        </div>
    );
}

export default NewBoxForm;
