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
         v-if="container_mounted"
         :container="$refs.container"
         ref="timeline"
         @mounted="createTimelinePositions"
      />
      <div 
         :style="{
            width: '350px'
         }"
         class="flex-1 mx-4 relative"
      >
         <task
            v-if="timeline_mounted"
         />
      </div>
      <controls/>
   </div>
</template>

<script>
import Timeline from './Timeline'
import Controls from './Controls'
import Task from './Task'

export default {
   name: 'Day',
   components:{
      Timeline,
      Controls,
      Task
   },
   data(){
      return{
         container_mounted: false,
         timeline_mounted: false,
      }
   },
   methods:{
      createTimelinePositions(e){
         console.log(e)
      }
   },
   mounted(){
      this.container_mounted = true
   }
}
</script>

<style scoped>
#planner::-webkit-scrollbar {
   width: 0px;
}
   
</style>