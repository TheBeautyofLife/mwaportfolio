<template>
 <v-content>
  <!-- -->
  <v-container grid-list-sm>
    <v-layout row justify-center align-center>
        <!-- -->
        <v-layout  column justify-center align-center>
          <v-card flat color="transparent">
            <v-layout column justify-center align-center>
              <div v-if="ifClicked">
              <img height="300" src="../assets/Screenshot_20190919-144331_Gallery.jpg"/>
              </div>
        
            <v-card-title primary-title>
             <div class="display-2">
                 Hi,
             </div>
            </v-card-title>
            <v-card-text primary-title>
              <div class="display-2 text-center">
                 I'm Jackson Maweu
              </div>
              <div class="title text-center font-weight-regular">
                 a gardener 
              </div>
             </v-card-text>
          </v-layout>
      </v-card>

     <!-- -->
      <v-card flat  style="margin-top:6%;" color="transparent">
        <v-layout column justify-center align-center>
          <v-btn icon @click="ifClicked = !ifClicked">
             <v-icon  color="orange" class=" animated shake">{{ svgPath }}</v-icon>
           </v-btn>
           <v-card-text>
            <div class="subtitle">click on the icon to see me </div>
           </v-card-text>
        </v-layout>
      </v-card>
      </v-layout>
      <v-btn text to="/resume" style="margin-top:10%;">
         About me 
        <v-icon   color="orange"> {{ iconPath }}</v-icon>
      </v-btn>
  </v-layout>
    </v-container>
 </v-content>
</template>

<script>
import { mdiMouse, mdiChevronRight } from '@mdi/js'
import  Resume from './Resume'

export default {
   data: () => ({
      ifClicked: false,
      svgPath: mdiMouse,
      iconPath: mdiChevronRight,
      title: 'Home'
    }),

  components: {
      Resume
  },

  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function () {
      return {
        inner:"Jackson Maweu",
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
@import '../assets/animate.css';
</style>