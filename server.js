const express = require("express");

const app = express();

const foodItems = [
  {
    id: "1",
    imageUrl:
      "https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg",
    name: "Home made Spaghetti",
    description: "Very Delicious Spaghetti",
  },
  {
    id: "2",
    imageUrl:
      "https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg",
    name: "Home made Spaghetti",
    description: "Very Delicious Spaghetti",
  },
  {
    id: "3",
    imageUrl:
      "https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg",
    name: "Home made Spaghetti",
    description: "Very Delicious Spaghetti",
  },
  {
    id: "4",
    imageUrl:
      "https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg",
    name: "Home made Spaghetti",
    description: "Very Delicious Spaghetti",
  },
];

const getFoodItems = (req, res, next) => {
  res.json({ foodItems, success: true });
};
const addFoodItem = (req, res, next) => {
  console.log(req.body);
  const { name, imageUrl, description } = req.body;
  foodItems.push({ name, imageUrl, description });
  res.json({ foodItems });
};
const deleteFoodItem = (req, res, next) => {
  // foodItems.splice()
  // Splice away from the foodItems

  // Return deleted Item
  res.json({});
};
const updateFoodItem = (req, res, next) => {
  res.json({});
};
app.use(express.json());

app
  .route("/food-items")
  .get(getFoodItems)
  .post(addFoodItem)
  .delete(deleteFoodItem)
  .put(updateFoodItem);

app.listen(3000, () => {
  console.log("App listening on Port 3000");
});
