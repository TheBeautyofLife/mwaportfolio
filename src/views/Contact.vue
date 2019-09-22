<template>
 <v-content>
  <!-- -->
  <v-container grid-list-sm>
        <v-layout  column justify-center align-center>
          <v-card flat color="transparent">
            <v-layout column justify-center align-center text-center style="margin-bottom:2%;">
            <v-card-text primary-title>
               <div class="display-1 font-weight-regula">
                  PHONE NUMBER
               </div>
             </v-card-text>

               <v-card-text primary-title>
               <div class="title">
                 <a href="tel:+254723144308" class="orange--text text--darken-3"> 0723144308 </a>
              </div>

             </v-card-text>
          </v-layout>
      </v-card>
    <!-- -->
    <v-layout row justify-center align-center>
      <v-card flat v-for="(img, index) in imgs" :key="index" color="transparent">
        <img :src="img.link" :width="img.wsize" :height="img.hsize" style="margin-right:8px;" />
      </v-card>
    </v-layout>
  </v-layout>
</v-container>
 </v-content>
</template>

<script>
export default {
  data: () => ({

    title: 'Contact me'
  }
  ),
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function () {
      return {
        inner: 'Jackson Maweu',
        complement: this.title
      }
    },
    meta: [
      { name: 'description', content: 'My description', id: 'desc' }
    ]
  }
}

</script>

<style scoped>
a {
  text-decoration: none;
}

</style>
