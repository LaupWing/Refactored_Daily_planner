<template>
   <div 
      id="planner"
      class="relative flex items-start"
      :class="$store.state._day.locked ? 'overflow-y-hidden' : 'overflow-y-auto' "
      :style="{
         height: '50vh'
      }"
      @scroll="handleScroll"
      ref="container"
   >
      <timeline
         v-if="$store.state._day.container_el"
         :container="$refs.container"
         :showed_task="showed_task"
         :midpoint="midpoint"
         ref="timeline"
         @mounted="(e)=>{
            createTimelinePositions(e)
            $store.dispatch('_day/moveToCurrentTime')
         }"
      />
      <div 
         :style="{
            width: $store.state._day.task_width
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
            v-if="$store.state._day.container_el"
            :midpoint="midpoint"
            :container="$refs.container"
         />
      </div>
      <controls
         v-if="$store.state._day.container_el"
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
         timeline_positions: false,
         today: days[new Date().getDay()],
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
         this.$store.commit('_day/setProp',{
            value: this.timeline_positions,
            type: 'timeline_positions'
         })
      },
      handleScroll(e){
         this.scrolled = this.$el.scrollTop
         this.height = this.$el.offsetHeight
         this.midpoint = this.scrolled + (this.height/2)
      },
      moveToCurrentTime(){
         const {hours, minutes} = this.$store.getters['_day/time']

         const distanceHours = this.timeline_positions
            .find(tl=>tl.time.split(':')[0]===String(hours))
            .midpoint
               
         const li = this.$refs.timeline.$el.querySelector('li')
         const totalDistance = li.offsetHeight * 2
         const distancePerMinute = totalDistance/60
         const distanceMinutes = distancePerMinute * minutes
         const moveTo = ((distanceHours + distanceMinutes) - this.$refs.container.offsetHeight / 2)
         
         setTimeout(()=>{
            this.$el.scrollTo(0, moveTo)
         })
      },
      converDateToMS(time){
         const date = new Date()
         const day = date.getDate()
         const month = date.getMonth()+1
         const year = date.getFullYear()
         if(time){
            const dateToConvert = new Date(`${month}/${day}/${year} ${time}:00`)
            const milliseconds = dateToConvert.getTime()
            return milliseconds
         }
         return date.getTime()
      },
      taskWatcher(){
         const findTask = this.tasksOfToday.find((task)=>{
            const begin = this.converDateToMS(task.time.begin)
            const end = this.converDateToMS(task.time.end)
            const currentTimeInMS = this.converDateToMS()
            if(begin <= currentTimeInMS && end >= currentTimeInMS){
               return task
            }
         })
         if(findTask){
               this.changeTimeSize(findTask)
               // For the message under the current time
               this.currentTask = findTask.task
               this.$emit('setTask', this.currentTask)
         }else{
               document.querySelectorAll('#Timeline li').forEach(li=>{
                  li.classList.remove('highlight')
               })
               // For the message under the current time
               this.currentTask = 'No Tasks Right now!'
               this.$emit('setTask', this.currentTask)
         }

      },
   },
   mounted(){
      this.$store.commit('_day/setProp',{
         value: this.$el,
         type: 'container_el'
      })
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