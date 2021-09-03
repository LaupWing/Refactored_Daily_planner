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
         class="bg-white flex-1"
      >

      </div>
      <div></div>
   </div>
</template>

<script>
import Timeline from './Timeline'

export default {
   name: 'Day',
   components:{
      Timeline
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