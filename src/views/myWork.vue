<template>
  <v-content>
  <!-- -->
  <v-container grid-list-sm>
        <v-layout  column justify-center align-center>
          <v-card flat color="transparent">
            <v-layout column justify-center align-center text-center style="margin-bottom:2%;">
            <v-card-text primary-title>
               <div class="title font-weight-regula">
                   MY WORK
               </div>
             </v-card-text>

               <v-card-text primary-title>
               <div class="subtitle font-weight-regular">
                Kindly take time to go through my portfolio where I have showcased <br/>
                 some of the works I have achieved over the years
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
    imgs: [
      { 
        link: 'https://ik.imagekit.io/qpt2onjfe/mwa/c2011f1d-4f36-40ef-b864-590481ce60e7_hponYtYe4.jpg', 
        wsize:'381',
        hsize:'auto' 
      },
      { 
        link: 'https://ik.imagekit.io/qpt2onjfe/mwa/1ea484b7-e881-41f4-848b-2f52f08c5eb5_84wV3Ytdk.jpg', 
        wsize:'350',
        hsize:'auto' 
      },
      { 
        link: 'https://ik.imagekit.io/qpt2onjfe/mwa/4eb59aac-cd68-4b30-af28-4661090b7f83_v-WYdKMAQ.jpg', 
        wsize:'350',
        hsize:'auto'  
      },
      { 
        link: 'https://ik.imagekit.io/qpt2onjfe/mwa/7c3b2c04-61dc-4d96-8bfb-24cbb4b7346a_XEZMK1xcH3.jpg', 
        wsize:'500',
        hsize:'auto'  
        },
      { 
        link: 'https://ik.imagekit.io/qpt2onjfe/mwa/78daf7d8-b29e-4c13-a7a1-220dd924a914_kWIh5MvYhx.jpg', 
        wsize:'281',
        hsize:'auto'  
      },
      { 
        link: 'https://ik.imagekit.io/qpt2onjfe/mwa/80f28537-531a-48ca-99c7-d526028e3d14__IlQx4useO.jpg', 
        wsize:'299',
        hsize:'auto'  
      },
      { 
        link: 'https://ik.imagekit.io/qpt2onjfe/mwa/449a1cfc-222e-45b4-a9a1-a46aa4702d15_DKU8xyQGJV.jpg', 
        wsize:'359',
        hsize:'auto'  
      },
      { 
        link: 'https://ik.imagekit.io/qpt2onjfe/mwa/964bf272-fa82-4f8e-854a-61913bc31bf0_hx76qDs5G.jpg', 
        wsize:'362',
        hsize:'auto'  
      },
       { 
        link: 'https://ik.imagekit.io/qpt2onjfe/mwa/a6ef33d4-259b-4a3e-914d-6bc4e2192a58_fIsrFY5Qzk.jpg', 
        wsize:'362',
        hsize:'auto'  
      },
      { 
        link: 'https://ik.imagekit.io/qpt2onjfe/mwa/aceb69d7-0243-4b1b-b039-5e3b441d0d11_nE4UBpBCjo.jpg', 
        wsize:'330',
        hsize:'auto'  
      },
      { 
        link: 'https://ik.imagekit.io/qpt2onjfe/mwa/b3071380-e692-46c6-adeb-8e9fa40cfcf8_4WEO95s2T.jpg', 
        wsize:'330',
        hsize:'auto'  
      }
    ],
        title: 'My Works'
    }),

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
