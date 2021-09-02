<template>
   <div 
      class="relative overflow-y-hidden flex"
      :style="{
         height: '50vh'
      }"
   >
      <timeline/>
      <div 
         :style="{
            width: '400px'
         }"
         class="bg-white"
      >

      </div>
   </div>
</template>

<script>
import Timeline from './Timeline'

export default {
   name: 'Day',
   components:{
      Timeline
   }
}
</script>