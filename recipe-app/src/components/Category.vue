<template>
  <div  class="category" @click="sendId">
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
         
      }
  },
};
</script>
