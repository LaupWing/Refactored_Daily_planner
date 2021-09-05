<template>
   <div 
      id="planner"
      class="relative overflow-y-auto flex items-start"
      :style="{
         height: '50vh'
      }"
      @scroll="handleScroll"
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
            width
         }"
         class="flex-1 mx-4 relative"
      >
         <task
            v-for="(task, index) in tasksOfToday"
            :key="index"
            :task="task"
            v-if="timeline_positions"
            :timeline_positions="timeline_positions"
         />
         <indicator
            :width="width"
            v-if="container_mounted"
            :container="$refs.container"
         />
      </div>
      <controls/>
   </div>
</template>

<script>
import Timeline from './Timeline'
import Controls from './Controls'
import Indicator from './Indicator'
import Task from './Task'
import {days} from '@/utils/date'

export default {
   name: 'Day',
   components:{
      Timeline,
      Controls,
      Task,
      Indicator
   },
   computed:{
      tasksOfToday(){
         const tasks = this.$store.state.planner.dailyTasks 

         if(tasks){
            return tasks
               .filter(task=> task.days.find(day=>day.day===this.today))
               .map(task =>{
                  task.time = task.days.find(day=>day.day===this.today)
                  delete task.days
                  return task
               })
         }
         return null
      } 
   },
   data(){
      return{
         container_mounted: false,
         timeline_positions: false,
         today: days[new Date().getDay()],
         width: '350px'
      }
   },
   methods:{
      createTimelinePositions(e){
         this.timeline_positions = Array.from(
            e.querySelectorAll('li')
         ).map((li) => {
            return {
               time: li.dataset.time,
               height: li.offsetHeight,
               midpoint: (li.offsetTop + li.offsetHeight / 2) + (this.$refs.container.offsetHeight / 2),
            }
         })
      },
      handleScroll(e){
         // console.log(e)
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