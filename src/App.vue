<template>
  <v-app>
      <Header />
    <v-content  background-color="white">
      <transition
        name="fade"
        mode="out-in"
      >
     <router-view/>
     </transition>
    </v-content>
  </v-app>
</template>
<script>
import Header from '@/components/Head.vue'
export default {
   components: {
    Header
  }
}
</script>
<style>
.fade-enter-active {
    animation: fadeIn 0.2s ease-in;
  }
  @keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
  .fade-leave-active {
    animation: fadeOut .5s ease-in;
  }
  @keyframes fadeOut{
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 0;
  }
}

body {
  background-color: white !important;
}
</style>