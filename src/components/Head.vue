<template>
  <v-content style="margin-top:1%;">
        <v-toolbar dense flat color="transparent">
          <v-toolbar-title style="margin-left:2%;">
              <div class="display-1">
                  <span class="title_ ">Jackson</span>
              </div>

          </v-toolbar-title>
          <v-spacer/>
          <v-layout row  justify-center hidden-xs-only>
             <v-btn small to="/" text>Home</v-btn>
             <v-btn small  to="/porfolio" text>My work</v-btn>
             <v-btn small  to="/contact" outlined>Contact</v-btn>

          </v-layout>

       <v-layout justify-end hidden-sm-and-up>
       <v-menu offset-y>
         <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-icon>{{ svgPath }}</v-icon>
        </v-btn>
        </template>
         <v-list>
           <v-list-item  v-for="(link, index) in links"
          :key="index" >
             <v-list-item-title >
               <v-btn text :to="link.to">
                 {{ link.title }}
               </v-btn>
               </v-list-item-title>
           </v-list-item>
         </v-list>
       </v-menu>
         </v-layout>
        </v-toolbar>
  </v-content>
  </template>

<script>
import { mdiMenu } from '@mdi/js'

export default {
  data: () => ({
    ifClicked: false,
    svgPath: mdiMenu,
    links: [
      { title: 'Home', to: '/' },
      { title: 'My work', to: '/porfolio' },
      { title: 'contact', to: '/contact' }
    ]
  })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');

.title_ {
    font-family: 'Abril Fatface', cursive;
}

</style>
