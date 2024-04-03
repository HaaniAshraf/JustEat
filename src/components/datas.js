// Home page images
import Kfc from '../assets/foodImg/kfc.jpg';
import Dominos from '../assets/foodImg/dominos.jpg';
import BurgerLounge from  '../assets/foodImg/burgerLounge.png';
import ClubSulaimani from '../assets/foodImg/clubSulaimani.png';
import Kbc from '../assets/foodImg/kbc.png';
import Shap from '../assets/foodImg/shap.png';
import Suprabatham from '../assets/foodImg/suprabatham.png';
import Starbucks from '../assets/foodImg/starbucks.png';
import Hollywood from '../assets/foodImg/hollywood.png';
import MomoLush from '../assets/foodImg/momos.png';

// Dishes images
import Kfc1 from '../assets/foodImg/dishes/kfc-1.jpg'
import Kfc2 from '../assets/foodImg/dishes/kfc-2.jpg'
import Kfc3 from '../assets/foodImg/dishes/kfc-3.jpg'

const datas = [
  { image: Kfc, resname: 'KFC', categories: 'Fries,Strips,Burgers', rating: 4, time: '25', outlet:'Mavoor Road', dishes:[{ name:'Peri Peri 5 Leg Pc Meal' ,image:Kfc1 ,price:628 ,rating:4 },{ name:'Double Chicken Roll' ,image:Kfc2 ,price:165 ,rating:3 },{ name:'Veg Zinger Burger' ,image:Kfc3 ,price:180 ,rating:4.3 }] },
  { image: Dominos, resname: 'Dominos', categories: 'Pizza,Burgers,Rolls', rating: 2, time: '40', outlet:'Hi-Lite Mall', dishes:[{ name:'Peri Peri 5 Leg Pc Meal' ,image:{Kfc1} ,price:628 ,rating:4 },{ name:'Double Chicken Roll' ,image:{Kfc2} ,price:165 ,rating:3 },{ name:'Veg Zinger Burger' ,image:{Kfc3} ,price:180 ,rating:4.3 }] },
  { image: BurgerLounge, resname: 'Burger Lounge', categories: 'Burgers,Ice-scream,Drinks', rating: 4.2, time: '35', outlet:'Nadakkavu', dishes:[{ name:'Peri Peri 5 Leg Pc Meal' ,image:{Kfc1} ,price:628 ,rating:4 },{ name:'Double Chicken Roll' ,image:{Kfc2} ,price:165 ,rating:3 },{ name:'Veg Zinger Burger' ,image:{Kfc3} ,price:180 ,rating:4.3 }] },
  { image: ClubSulaimani, resname: 'Club Sulaimani', categories: 'Pizzas,Beverages,Rolls', rating: 2.5, time: '20', outlet:'South Beach', dishes:[{ name:'Peri Peri 5 Leg Pc Meal' ,image:{Kfc1} ,price:628 ,rating:4 },{ name:'Double Chicken Roll' ,image:{Kfc2} ,price:165 ,rating:3 },{ name:'Veg Zinger Burger' ,image:{Kfc3} ,price:180 ,rating:4.3 }] },
  { image: Kbc, resname: 'Kuttichira Biriyani Centre', categories: 'Biriyani,South Indian', rating: 4.6, time: '30', outlet:'Kuttichira', dishes:[{ name:'Peri Peri 5 Leg Pc Meal' ,image:{Kfc1} ,price:628 ,rating:4 },{ name:'Double Chicken Roll' ,image:{Kfc2} ,price:165 ,rating:3 },{ name:'Veg Zinger Burger' ,image:{Kfc3} ,price:180 ,rating:4.3 }] },
  { image: Shap, resname: 'The Shap Family Restaurant', categories: 'South Indian', rating: 3, time: '48', outlet:'South Beach', dishes:[{ name:'Peri Peri 5 Leg Pc Meal' ,image:{Kfc1} ,price:628 ,rating:4 },{ name:'Double Chicken Roll' ,image:{Kfc2} ,price:165 ,rating:3 },{ name:'Veg Zinger Burger' ,image:{Kfc3} ,price:180 ,rating:4.3 }] },
  { image: Suprabatham, resname: 'Suprabatham Veg', categories: 'Chinese,North Indian,South Indian', rating: 4.3, time: '18', outlet:'Beach Road', dishes:[{ name:'Peri Peri 5 Leg Pc Meal' ,image:{Kfc1} ,price:628 ,rating:4 },{ name:'Double Chicken Roll' ,image:{Kfc2} ,price:165 ,rating:3 },{ name:'Veg Zinger Burger' ,image:{Kfc3} ,price:180 ,rating:4.3 }] },
  { image: Starbucks, resname: 'Starbucks Coffee', categories: 'Beverages,Cafe', rating: 3, time: '23', outlet:'Olavanna', dishes:[{ name:'Peri Peri 5 Leg Pc Meal' ,image:{Kfc1} ,price:628 ,rating:4 },{ name:'Double Chicken Roll' ,image:{Kfc2} ,price:165 ,rating:3 },{ name:'Veg Zinger Burger' ,image:{Kfc3} ,price:180 ,rating:4.3 }] },
  { image: Hollywood, resname: 'Hollywood', categories: 'Ice cream,Desserts', rating: 2.5, time: '20', outlet:'Vellayil', dishes:[{ name:'Peri Peri 5 Leg Pc Meal' ,image:{Kfc1} ,price:628 ,rating:4 },{ name:'Double Chicken Roll' ,image:{Kfc2} ,price:165 ,rating:3 },{ name:'Veg Zinger Burger' ,image:{Kfc3} ,price:180 ,rating:4.3 }] },
  { image: MomoLush, resname: 'MOMO LUSH', categories: 'Chinese,Arabic', rating: 3.8, time: '15', outlet:'Mananchira', dishes:[{ name:'Peri Peri 5 Leg Pc Meal' ,image:{Kfc1} ,price:628 ,rating:4 },{ name:'Double Chicken Roll' ,image:{Kfc2} ,price:165 ,rating:3 },{ name:'Veg Zinger Burger' ,image:{Kfc3} ,price:180 ,rating:4.3 }] },
];

export default datas;
