import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodList, setFoodList] = useState(foodsJson);

  const createFood = (newFood) => {
    const copyFoodList = [...foodList, newFood];
    console.log(copyFoodList);
    setFoodList(copyFoodList);
  };

  const removeItem = (foodId) => {
    // console.log(foodId);
    const copyFoodList = [...foodList];
    const newList = copyFoodList.filter((foodcard) => {
      if (foodcard.id === foodId) {
        return false;
      }
      return true;
    });
    setFoodList(newList);
  };
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm createFood={createFood} />
      <div>
        {foodList.map((food) => (
          <FoodBox food={food} removeFood={removeItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
