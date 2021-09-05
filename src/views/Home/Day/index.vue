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
            v-for="(task, index) in tasksOfToday"
            :key="index"
            :task="task"
            v-if="timeline_positions"
            :timeline_positions="timeline_positions"
         />
      </div>
      <controls/>
   </div>
</template>

<script>
import Timeline from './Timeline'
import Controls from './Controls'
import Task from './Task'
import {days} from '@/utils/date'

export default {
   name: 'Day',
   components:{
      Timeline,
      Controls,
      Task
   },
   computed:{
      computed:{
         tasksOfToday(){
            const tasks = this.$store.state.planner.dailyTasks 

            if(tasks){
               return tasks
                  .filter(task=>{
                     const date = new Date()
                     const dateNumber =  date.getDay()
                     const currentDay = days[dateNumber]
                     
                     const checkDay = task.days.some(day=>day.day===currentDay)
                     if(checkDay){
                        return task
                     }
                  })
            }
            return null
         }
      }
   },
   data(){
      return{
         container_mounted: false,
         timeline_positions: false,
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
               midpoint: li.offsetTop + li.offsetHeight / 2,
            }
         })
      }
   },
   mounted(){
      this.container_mounted = true
      console.log(days)
      console.log(this.$store.state.planner.dailyTasks)
   }
}
</script>

<style scoped>
#planner::-webkit-scrollbar {
   width: 0px;
}
</style>