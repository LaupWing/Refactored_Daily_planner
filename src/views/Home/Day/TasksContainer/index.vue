<template>
   <div 
      id="planner"
      class="relative flex items-start"
      :class="$store.state._day.locked ? 'overflow-y-hidden' : 'overflow-y-auto' "
      :style="{
         height: '50vh'
      }"
      @scroll="handleScroll"
   >
      <timeline
         v-if="$store.state._day.container_el"
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
            v-if="$store.state._day.timeline_positions"
            v-for="(task, index) in tasksOfToday"
            :key="index"
            :task="task"
            :midpoint="midpoint"
            @disable_showed_task="set_showed_task_null"
            @set_showed_task="showed_task = $event"
            @mounted="tasks.push($event)"
         />
         <indicator
            v-if="$store.state._day.container_el"
            :midpoint="midpoint"
         />
      </div>
      <controls
         v-if="$store.state._day.container_el"
         :tasks_elements="tasks.map(x=>x.el)"
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
         return this.$store.getters['planner/tasksOfToday']
      } 
   },
   watch:{
      midpoint(){
         const showed_task = this.tasks.find(x=> this.midpoint >= x.el.offsetTop && this.midpoint <= (x.el.offsetTop + x.el.offsetHeight))
         
         if(showed_task){
            this.$store.commit('_day/setProp',{
               value: showed_task,
               type: 'showed_task'
            })
         }else{
            this.$store.commit('_day/setProp',{
               value: {
                  el: null,
                  task: null
               },
               type: 'showed_task'
            })
         }
      }
   },
   data(){
      return{
         height: 0,
         scrolled: 0,
         midpoint: 0,
         showed_task: null,
         time: '00:00',
         tasks: [],
         new_task: {
            starting: false,
            ending: null,
            ended: false,
            color: null,
            task: '',
            notes: ''
         }
      }
   },
   methods:{
      set_showed_task_null(e){
         if(e === this.showed_task){
            this.showed_task = null
         }
      },
      createTimelinePositions(e){
         this.$store.commit('_day/setProp',{
            value: Array.from(e.querySelectorAll('li'))
               .map((li) => {
                  return {
                     time: li.dataset.time,
                     height: li.offsetHeight,
                     midpoint: (li.offsetTop + li.offsetHeight / 2) + (this.$el.offsetHeight / 2),
                  }
               }),
            type: 'timeline_positions'
         })
      },
      handleScroll(e){
         this.scrolled = this.$el.scrollTop
         this.height = this.$el.offsetHeight
         this.midpoint = this.scrolled + (this.height/2)
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
      creatingTask(section){
         const containerCoords = this.$el.getBoundingClientRect()
         const yValInContainer = (this.$el.scrollTop + event.y) - containerCoords.top 
         const min = fiveMinuteCoords()[0].coord 
         
         if(
            (min-5) > yValInContainer ||
            (this.createTask.starting && this.createTask.starting.coord > yValInContainer) ||
            this.createTask.ended
         ){
               return
         }
         if(this.createTask.ending && section === 'ending'){
            const overlapping = pointOverlappedTask(this.createTask.starting.coord, yValInContainer)

            if(overlapping){
               return
            }
         }
         this.createTask[section] = getClosestCoord(yValInContainer)
      },
      taskWatcher(){
         const find_task = this.tasksOfToday.find((task)=>{
            const begin = this.converDateToMS(task.time.begin)
            const end = this.converDateToMS(task.time.end)
            const currentTimeInMS = this.converDateToMS()
            if(begin <= currentTimeInMS && end >= currentTimeInMS){
               return task
            }
         })

         if(find_task){
            this.$store.commit('_day/setProp',{
               value: find_task.task,
               type: 'current_task'
            })
         }else{
            this.$store.commit('_day/setProp',{
               value: 'No task right now!',
               type: 'current_task'
            })
         }
      },
   },
   mounted(){
      this.taskWatcher()
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