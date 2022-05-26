<template>
  <div class="meal">
    <div class="meal-pic">
      <img :src="this.meal.strMealThumb" />
      <div class="meal-titles">
        <div class="meal-category">{{ this.meal.strCategory }}</div>
        <div class="meal-area">{{ this.meal.strArea }}</div>
      </div>
    </div>
    <div class="meal-infos">
    <div class="meal-name">{{ this.meal.strMeal }}</div>
    <div class="meal-ins">{{ this.meal.strInstructions }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["meal"],
  data() {
    return {};
  },
};
</script>
