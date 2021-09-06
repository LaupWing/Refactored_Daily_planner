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
         :showed_task="showed_task"
         :midpoint="midpoint"
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
            v-if="timeline_positions"
            v-for="(task, index) in tasksOfToday"
            :key="index"
            :task="task"
            :midpoint="midpoint"
            :timeline_positions="timeline_positions"
            @disable_showed_task="set_showed_task_null"
            @set_showed_task="showed_task = $event"
            @mounted="tasks_elements.push($event)"
         />
         <indicator
            v-if="container_mounted"
            :midpoint="midpoint"
            :width="width"
            :container="$refs.container"
         />
      </div>
      <controls
         v-if="container_mounted"
         :container="$refs.container"
         :tasks_elements="tasks_elements"
         :showed_task="showed_task"
      />
   </div>
</template>

<script>
import Timeline from './Timeline'
import Controls from './Controls'
import Indicator from './Indicator'
import Task from './Task'
import {days, addZero} from '@/utils/date'

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
         width: '350px',
         height: 0,
         scrolled: 0,
         midpoint: 0,
         showed_task: null,
         time: '00:00',
         tasks_elements: []
      }
   },
   methods:{
      set_showed_task_null(e){
         if(e === this.showed_task){
            this.showed_task = null
         }
      },
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
         this.scrolled = this.$el.scrollTop
         this.height = this.$el.offsetHeight
         this.midpoint = this.scrolled + (this.height/2)
      },
      getDistanceHours(){
         const currentElTime = this.timeline_positions
               .find(tl=>tl.time.split(':')[0]===String(this.hours))
         const parentElOffset = currentElTime.parentElement.offsetTop
         const distance = 
               (currentElTime.offsetTop-parentElOffset) - 
               (this.$el.offsetHeight/2) + 
               (currentElTime.offsetHeight/2)
         return distance
      },
      getMinutesDistance(){
         const li = document.querySelector('#Timeline li')
         const totalDistance = li.offsetHeight*2
         const distancePerMinute = totalDistance/60
         const distance = distancePerMinute * this.minutes
         return distance
      },
      getTime(){
         const date = new Date()
         const hours = addZero(date.getHours())
         const minutes = addZero(date.getMinutes())

         return {
            hours,
            minutes
         }
      },
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
#planner{
   scroll-behavior: smooth;
}
</style>