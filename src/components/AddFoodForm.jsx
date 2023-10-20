// Your code here
import { useState } from "react";

function AddFoodForm({ createFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const randomId = () => {
    return Math.floor(Math.random() * 1000000000);
  };

  const handleSubmit = (inputs) => {
    inputs.preventDefault();
    const newFood = { name, image, calories, servings, id: randomId() };
    createFood(newFood);
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        name="name"
        type="text"
        placeholder="new foodname"
      />
      <label htmlFor="image">Image link url:</label>
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        name="image"
        type="URL"
        placeholder="Insert image"
      />
      <label htmlFor="calories">Calories:</label>
      <input
        onChange={(e) => setCalories(e.target.value)}
        value={calories}
        name="calories"
        type="text"
        placeholder="Insert calries"
      />
      <label htmlFor="servings">Servings:</label>
      <input
        onChange={(e) => setServings(e.target.value)}
        value={servings}
        name="servings"
        type="text"
        placeholder=" Insert servings"
      />
      <input type="submit" value={"Create"}></input>
    </form>
  );
}

export default AddFoodForm;
