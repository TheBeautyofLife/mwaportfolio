<template>
  <v-footer dark>
    <div class="flex-grow-1"></div>
    <div class="subtitle font-weight-thin">&copy; Maintained by <a href="https://alero.co.ke/" class="white--text">  Alero Group </a> {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
import { mdiCardsHeart, mdiCoffee } from '@mdi/js'

export default {
  data: () => ({
    ifClicked: false,
    love: mdiCardsHeart,
    coffee: mdiCoffee
  })
}
</script>
   <style scoped>
   a {
     text-decoration: none;
   }
   </style>
