// Home page images
import Kfc from "../assets/foodImg/kfc.jpg";
import Dominos from "../assets/foodImg/dominos.png";
import BurgerLounge from "../assets/foodImg/burgerLounge.png";
import ClubSulaimani from "../assets/foodImg/clubSulaimani.png";
import Kbc from "../assets/foodImg/kbc.png";
import Shap from "../assets/foodImg/shap.png";
import Suprabatham from "../assets/foodImg/suprabatham.png";
import Starbucks from "../assets/foodImg/starbucks.png";
import Hollywood from "../assets/foodImg/hollywood.png";
import MomoLush from "../assets/foodImg/momos.png";

// Dishes images
import Kfc1 from "../assets/foodImg/dishes/kfc-1.jpg";
import Kfc2 from "../assets/foodImg/dishes/kfc-2.jpg";
import Kfc3 from "../assets/foodImg/dishes/kfc-3.jpg";
import Dominos1 from "../assets/foodImg/dishes/dominos-1.jpg";
import Dominos2 from "../assets/foodImg/dishes/dominos-2.png";
import Dominos3 from "../assets/foodImg/dishes/dominos-3.png";
import Burger1 from "../assets/foodImg/dishes/burger-1.jpeg";
import Burger2 from "../assets/foodImg/dishes/burger-2.jpeg";
import Burger3 from "../assets/foodImg/dishes/burger-3.jpeg";
import Club1 from "../assets/foodImg/dishes/club-1.jpeg";
import Club2 from "../assets/foodImg/dishes/club-2.jpg";
import Club3 from "../assets/foodImg/dishes/club-3.jpeg";
import Kbc1 from "../assets/foodImg/dishes/kbc-1.jpeg";
import Kbc2 from "../assets/foodImg/dishes/kbc-2.jpeg";
import Kbc3 from "../assets/foodImg/dishes/kbc-3.jpeg";
import Shap1 from "../assets/foodImg/dishes/shap-1.jpeg";
import Shap2 from "../assets/foodImg/dishes/shap-2.jpeg";
import Shap3 from "../assets/foodImg/dishes/shap-3.jpeg";
import Supra1 from "../assets/foodImg/dishes/supra-1.jpg";
import Supra2 from "../assets/foodImg/dishes/supra-2.jpg";
import Supra3 from "../assets/foodImg/dishes/supra-3.jpg";
import Starbucks1 from "../assets/foodImg/dishes/starbucks-1.jpeg";
import Starbucks2 from "../assets/foodImg/dishes/starbucks-2.jpeg";
import Starbucks3 from "../assets/foodImg/dishes/starbucks-3.jpeg";
import Hollywood1 from "../assets/foodImg/dishes/hollywood-1.jpeg";
import Hollywood2 from "../assets/foodImg/dishes/hollywood-2.jpeg";
import Hollywood3 from "../assets/foodImg/dishes/hollywood-3.jpeg";
import Momo1 from "../assets/foodImg/dishes/momo-1.jpeg";
import Momo2 from "../assets/foodImg/dishes/momo-2.jpeg";
import Momo3 from "../assets/foodImg/dishes/momo-3.jpeg";

const datas = [
  {
    image: Kfc,
    resname: "KFC",
    categories: "Fries,Strips,Burgers",
    rating: 4,
    time: "25",
    outlet: "Mavoor Road",
    dishes: [
      { name: "Peri Peri 5 Leg Pc Meal", image: Kfc1, price: 628, rating: 4 },
      { name: "Double Chicken Roll", image: Kfc2, price: 165, rating: 3 },
      { name: "Veg Zinger Burger", image: Kfc3, price: 180, rating: 4.3 },
    ],
  },
  {
    image: Dominos,
    resname: "Dominos",
    categories: "Pizza,Burgers,Rolls",
    rating: 2,
    time: "40",
    promoted:true,
    outlet: "Hi-Lite Mall",
    dishes: [
      { name: "Pepper Barbecue Chicken", image: Dominos1, price: 449, rating: 4 },
      {name: "Classic Stuffed Garlic Bread", image: Dominos2, price: 149, rating: 3.7 },
      { name: "PEPPY PANEER", image: Dominos3, price: 459, rating: 2.8 },
    ],
  },
  {
    image: BurgerLounge,
    resname: "Burger Lounge",
    categories: "Burgers,Ice-scream,Drinks",
    rating: 4.2,
    time: "35",
    outlet: "Nadakkavu",
    dishes: [
      { name: "Beef Cheese Burger", image: Burger1, price: 190, rating: 4 },
      { name: "Oreo Crunchy", image: Burger2, price: 120, rating: 4.2 },
      { name: "Zinger Loaf", image: Burger3, price: 200, rating: 3.2 },
    ],
  },
  {
    image: ClubSulaimani,
    resname: "Club Sulaimani",
    categories: "Pizzas,Beverages,Rolls",
    rating: 2.5,
    time: "20",
    outlet: "South Beach",
    dishes: [
      { name: "Loaded Fries Chicken", image: Club1, price: 300, rating: 2.8 },
      { name: "Green Apple Bubble Tea", image: Club2, price: 210, rating: 3 },
      { name: "Penne Alfredo", image: Club3, price: 380, rating: 3.4 },
    ],
  },
  {
    image: Kbc,
    resname: "Kuttichira Biriyani Centre",
    categories: "Biriyani,South Indian",
    rating: 4.6,
    time: "30",
    promoted:true,
    outlet: "Kuttichira",
    dishes: [
      { name: "Chicken Biriyani (Thalassery)", image: Kbc1, price: 169, rating: 4.1 },
      { name: "Fish Biriyani (Ayikora)", image: Kbc2, price: 286, rating: 4.4 },
      { name: "Kada Fry", image: Kbc3, price: 130, rating: 4.3 },
    ],
  },
  {
    image: Shap,
    resname: "The Shap Family Restaurant",
    categories: "South Indian",
    rating: 3,
    time: "48",
    outlet: "South Beach",
    dishes: [
      { name: "Neychor", image: Shap1, price: 120, rating: 3.4 },
      { name: "Ellum Kappayum", image: Shap2, price: 265, rating: 3.7 },
      { name: "FISH CURRY MEALS", image: Shap3, price: 189, rating: 3.5 },
    ],
  },
  {
    image: Suprabatham,
    resname: "Suprabatham Veg",
    categories: "Chinese,North Indian,South Indian",
    rating: 4.3,
    time: "18",
    outlet: "Beach Road",
    dishes: [
      { name: "Vada Set (2 Pcs)", image: Supra1, price: 50, rating: 4 },
      { name: "Onion Rava Roast", image: Supra2, price: 130, rating: 3 },
      { name: "Plain Uttappam", image: Supra3, price: 85, rating: 4.3 },
    ],
  },
  {
    image: Starbucks,
    resname: "Starbucks Coffee",
    categories: "Beverages,Cafe",
    rating: 3,
    time: "23",
    promoted:true,
    outlet: "Olavanna",
    dishes: [
      { name: "Picco Filter Coffee", image: Starbucks1, price: 185, rating: 4 },
      { name: "Picco Masala Chai", image: Starbucks2, price: 185, rating: 3.2 },
      { name: "Pepper Chicken Wrap", image: Starbucks3, price: 335, rating: 2.7 },
    ],
  },
  {
    image: Hollywood,
    resname: "Hollywood",
    categories: "Ice cream,Desserts",
    rating: 2.5,
    time: "20",
    outlet: "Vellayil",
    dishes: [
      { name: "Nutty Falooda", image: Hollywood1, price: 190, rating: 4.3 },
      { name: "Fruit Salad", image: Hollywood2, price: 110, rating: 4.6 },
      { name: "Black Forest", image: Hollywood3, price: 200, rating: 3.7 },
    ],
  },
  {
    image: MomoLush,
    resname: "MOMO LUSH",
    categories: "Chinese,Arabic",
    rating: 3.8,
    time: "15",
    outlet: "Mananchira",
    dishes: [
      { name: "Schezwan chicken momos", image: Momo1, price: 180, rating: 2.4 },
      { name: "Corn cheese momos", image: Momo2, price: 165, rating: 3.1 },
      { name: "Beef cheese momos", image: Momo3, price: 190, rating: 4.3 },
    ],
  },
];

export default datas;
