<template>
   <div 
      id="planner"
      class="relative overflow-y-auto flex items-start"
      :style="{
         height: '50vh'
      }"
      ref="container"
   >
      <timeline
         v-if="mounted"
         :container="$refs.container"
      />
      <div 
         :style="{
            width: '350px'
         }"
         class="flex-1 mx-4 relative"
      >
         <div
            class="w-full absolute rounded h-72 border-2 border-main-font"
            :style="{
               top: '250px'
            }"
         >

         </div>
      </div>
      <controls/>
   </div>
</template>

<script>
import Timeline from './Timeline'
import Controls from './Controls'

export default {
   name: 'Day',
   components:{
      Timeline,
      Controls
   },
   data(){
      return{
         mounted: false
      }
   },
   mounted(){
      this.mounted = true
   }
}
</script>

<style scoped>
#planner::-webkit-scrollbar {
   width: 0px;
}
   
</style>