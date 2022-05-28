<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
 
<div class="container">   
     <nav>
          <div><span class="icon-part1">eat</span><span class="icon-part2">dish._</span></div>
          <RouterLink to="/">Categories</RouterLink>
     </nav>
     <div>
     <RouterView />
     </div>
    
</div>  
</template>

<style>
@import './assets/nav.css';
@import './assets/app.css';

</style>
