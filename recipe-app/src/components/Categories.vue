<script>
import Category from "../components/Category.vue";
import Meal from "../components/Meal.vue";
import Choosenmeal from "../components/Choosenmeal.vue";
import { RouterLink, RouterView } from "vue-router";

async function fetchData(api) {
  let response = await fetch(api);
  let data = await response.json();
  return data;
}

export default {
  components: { Category, Meal, Choosenmeal },
  data() {
    return {
      categories: [],
      selectedMeals: [],
      choosenMeal: false,
    };
  },
  async created() {
    let data = await fetchData(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    this.categories = data.categories;
  },
  methods: {
    async getCategoryId(value) {
      let data = await fetchData(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + value.name
      );
      this.selectedMeals = data;
      this.activeCategory = value.name;
    },

    async getMealId(value) {
      let data = await fetchData(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + value
      );
      this.choosenMeal = data.meals[0];
      let ingredients = [];
      let measures = [];
      for (const [key, value] of Object.entries(this.choosenMeal)) {
        if (
          value !== "" &&
          value != " " &&
          value != null &&
          key.includes("Ingredient")
        ) {
          ingredients.push(value);
        }
        if (value !== "" && value != " " && key.includes("Measure")) {
          measures.push(value);
        }
      }

      let all = [];
      ingredients.forEach((element, index) => {
        let obj = { name: element, measure: measures[index] };
        all.push(obj);
      });
      this.choosenMeal = { meal : data.meals[0] , ingredients : all}
     
    },
  },
};
</script>

<template>
  <div class="category-container">
    <div class="categories-title">
      <h3>Based on the type of food you like</h3>
      <RouterLink to="/favorite"
        ><span>Go to your Favorites -></span></RouterLink
      >
    </div>
    <div class="categories">
      <template v-for="category in categories">
        <Category
          :name="category.strCategory"
          :id="category.idCategory"
          :src="category.strCategoryThumb"
          @categoryId="getCategoryId"
        ></Category>
      </template>
    </div>
  </div>

  <div class="meal-container">
    <div>
      <template v-for="meal in selectedMeals.meals">
        <div class="meal">
          <Meal
            :meal="meal.strMeal"
            :src="meal.strMealThumb"
            :id="meal.idMeal"
            @sendId="getMealId"
          ></Meal>
        </div>
      </template>
    </div>
    <div class="selected-meal" v-if="this.choosenMeal">
      <Choosenmeal :meal="this.choosenMeal"></Choosenmeal>
    </div>
  </div>
</template>

<style>
@import "../assets/categories.css";
</style>
