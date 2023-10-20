function FoodBox({ food, removeFood }) {
  return (
    <div className="card">
      <p>{food.name}</p>

      <img src={food.image} className="image" />

      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>Total Calories: {food.calories * food.servings} </b> kcal
      </p>

      <button onClick={() => removeFood(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
