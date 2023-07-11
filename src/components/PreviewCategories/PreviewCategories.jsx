import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PreviewCategoriesSection } from "./PreviewCategories.styled";
import CategoriesBtn from "../../components/CategoriesBtn/CategoriesBtn";
import  RecipeList  from "../../components/RecipeList/RecipeList";
import getAllRecipes from "./getAllRecipes";




export default function PreviewCategories() {
   const [recipes, setRecipes] = useState([]);
   let breakfastArr = [];
   let miscellaneousArr = [];
   let chickenArr = [];
   let dessertsArr = []; 
   const categories = ['Breakfast', 'Miscellaneous', 'Chicken', 'Desserts'];
   
   useEffect(() => {
       getAllRecipes().then(resp => setRecipes(resp));
    }, []);
  
     function updateWindowWidth() {
        const width = window.innerWidth;
       
        if (width >= 0 && width <= 767) {
           
      breakfastArr = recipes.filter(el => {     
            return (el.title === "Breakfast")
         }).slice(0, 1);
           
      miscellaneousArr = recipes.filter(el => {     
            return (el.title === "Miscellaneous")
         }).slice(0, 1);
           
      chickenArr = recipes.filter(el => {     
            return (el.title === "Breakfast")
         }).slice(0, 1);
           
      dessertsArr = recipes.filter(el => {     
            return (el.title === "Miscellaneous")
         }).slice(0, 1);
           
           
           
           
        } else if (width >= 768 && width <= 1439) {
      
       breakfastArr = recipes.filter(el => {     
            return (el.title === "Breakfast")
         }).slice(0, 2);
           
      miscellaneousArr = recipes.filter(el => {     
            return (el.title === "Miscellaneous")
         }).slice(0, 2);
           
      chickenArr = recipes.filter(el => {     
            return (el.title === "Breakfast")
         }).slice(0, 2);
           
      dessertsArr = recipes.filter(el => {     
            return (el.title === "Miscellaneous")
         }).slice(0, 2);
                
               
      } else if (width >= 1440) {
           
           breakfastArr = recipes.filter(el => {     
            return (el.title === "Breakfast")
         }).slice(0, 4);
           
      miscellaneousArr = recipes.filter(el => {     
            return (el.title === "Miscellaneous")
         }).slice(0, 4);
           
      chickenArr = recipes.filter(el => {     
            return (el.title === "Breakfast")
         }).slice(0, 4);
           
      dessertsArr = recipes.filter(el => {     
            return (el.title === "Miscellaneous")
         }).slice(0, 4);
         
         }
   }
   
   updateWindowWidth();
   window.addEventListener('resize', updateWindowWidth);

    

   return (<PreviewCategoriesSection>
      <ul>
      <RecipeList
            breakfastArr={breakfastArr}
            miscellaneousArr={miscellaneousArr}
            chickenArr={chickenArr}
            dessertsArr={dessertsArr}
            title={categories} />
      </ul>
      <Link to={"#"}>
      <CategoriesBtn/>
      </Link>   
    </PreviewCategoriesSection>);
         
};