<template>
  <div class="meal">
    <div class="meal-pic">
      <img :src="this.meal.meal.strMealThumb" />

      <div class="meal-titles">
        <div class="meal-tags">{{ this.meal.meal.strTags }}</div>
        <div class="meal-category">{{ this.meal.meal.strCategory }}</div>
        <div class="meal-area">{{ this.meal.meal.strArea }}</div>
      </div>
      <div>
        <a :href="this.meal.meal.strYoutube"
          ><img src="../logo/youtube.png" class="youtube"
        /></a>
      </div>
    </div>
    <div class="meal-infos">
      <div class="meal-name">{{ this.meal.meal.strMeal }}</div>
      <div class="meal-all-ins">
      <div class="meal-ins">{{ this.meal.meal.strInstructions }}</div>

      <div>
      <div class="meal-ingredients">{{ "Ingredients:" }}</div>
        <ul v-for="item in this.meal.ingredients">
          <li>{{ item.name + " " + item.measure }}</li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["meal"],
  
};
</script>
