<template>
  <v-content>
  <!-- -->
  <v-container grid-list-sm>
    <v-layout row justify-center align-center>
       <v-btn text to="/" style="margin-top:10%;">
        <v-icon   color="orange"> {{ svgPath }}</v-icon>
          Back
      </v-btn>
        <!-- -->
        <v-layout  column justify-center align-center>
          <v-card flat color="transparent">
            <v-layout column justify-center align-center>

            <v-card-text primary-title>
               <div class="title font-weight-regula">
                 DATE OF BIRTH: 1ST January 1973 <br />
                  RELIGION: Christian

               </div>
             </v-card-text>

            <v-card-text primary-title>
               <div class="title font-weight-regula">
                   AREAS OF EXPERTISE
               </div>
               <div class="subtitle font-weight-regular">
                 Driving : 19 year’s experience in driving private saloon cars  <br />
                 Garden maintenance  <br />
                 Interior and exterior Wall Painting

              </div>
             </v-card-text>

               <v-card-text primary-title>
               <div class="title font-weight-regula">
                  WHAT MOTIVATES ME
               </div>
               <div class="subtitle font-weight-regular">
                I am very passionate in work assignments<br />
                I have exceptional skills in garden maintainace, interior and exterior wall painting <br />
                I have excellent driving skills, with 19years experience of driving on our ever busy Kenyan roads.
              </div>
             </v-card-text>
          </v-layout>
      </v-card>

     <!-- -->
      </v-layout>
    <!-- -->
  </v-layout>
    </v-container>
 </v-content>
</template>

<script>
import { mdiChevronLeft } from '@mdi/js'

export default {

  data: () => ({
    ifClicked: false,
    svgPath: mdiChevronLeft,
    title: 'Resume'
  }),

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
