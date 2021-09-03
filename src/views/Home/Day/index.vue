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
            width: '400px'
         }"
         class="bg-white flex-1 mx-4"
      >

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