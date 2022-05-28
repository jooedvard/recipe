<template>
  <div  class="category" @click="sendId" ref="container">
    <div><img :src="src"/></div>
    <div>{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: ["name", "src","id"],
  methods: {
      sendId(event){
          this.$emit("categoryId",{name:this.name,id:this.id})
          this.colorThis();
         
      },
      colorThis(){
          let element = this.$refs.container;
          let categoryElements = document.querySelectorAll(".category");
          for (const category of categoryElements) {
              category.classList.remove("selected-category");
          }
          element.classList.add("selected-category");
      }
      
  },
};
</script>
