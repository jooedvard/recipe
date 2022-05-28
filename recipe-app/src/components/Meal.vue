<template>
  <div class="meal-title">
    <div  ref="container">{{ meal }}</div>
    <div><button @click="getMealId">Click here</button></div>
  </div>
  <div><img :src="src" /></div>
</template>

<script>
export default {
  props: ["meal", "src", "id"],

  emits: ["sendId"],
  methods: {
      getMealId(){
        this.$emit("sendId",this.id);
       
      },
      
  },
  
};
</script>
