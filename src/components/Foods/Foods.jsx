import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";


const Foods = () => {
  const foods = useLoaderData();
  console.log(foods);
  
  return (
    <div className="mt-28">
      <h3 className="text-4xl font-semibold text-center">Your Favourite Food</h3>
     <div className="mx-[150px] grid grid-cols-3 gap-6">
      {
        foods.map(food => <Food key={food.id} food={food}></Food>)
      }
     </div>
      
    </div>
  );
};

export default Foods;