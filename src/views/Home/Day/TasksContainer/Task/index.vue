<template>
   <div
      data-task
      class="absolute text-main-font w-full flex justify-between flex-col select-none h-36 bg-white border-main-font rounded-md overflow-hidden"
      :class="show ? 'opacity-100 shadow border-2' : 'opacity-25 border' "
      :style="{
         top: `${top}px`,
         height: `${height}px`
      }"
      @click="show_context_menu = true"
   >
      <context-menu
         v-if="show_context_menu"
      />
      <h2 
         :class="`text-sm font-bold bg-main-task-${task.color.color} px-2 py-1 border-main-font ${show ? 'border-b-2' : 'border-b'}`"
      >
         {{task.task}}
      </h2>

      <h3 class="text-xs ml-2 mb-1">{{task.time.begin}} - {{task.time.end}}</h3>
   </div>
</template>

<script>
import ContextMenu from './ContextMenu'

export default {
   name: 'Task',
   components:{
      ContextMenu
   },
   props:{
      task:{
         type: Object,
         required: true
      },
      midpoint:{
         type: Number,
         required: true
      },
   },
   computed:{
      showed_task(){
         return this.$store.state._day.showed_task
      },
      top(){
         return this.calculatePoint(this.task.time.begin)
      },
      height(){
         return this.calculatePoint(this.task.time.end) - this.calculatePoint(this.task.time.begin)
      },
      show(){
         return this.midpoint >= this.top && this.midpoint <= (this.top + this.height)
      }
   },
   data(){
      return{
         show_context_menu: false
      }
   },
   methods:{
      calculatePoint(state) {
         const li = this.$store.state._day.timeline_positions.find((li) => {
            const liHour = li.time.split(":")[0]
            const taskHour = state.split(":")[0]
            if (liHour === taskHour) {
               return li
            }
         })
         const calcMinutes = ((li.height * 2) / 60) * state.split(":")[1]
         const point = li.midpoint + calcMinutes
         return point
      },
   },
   mounted(){
      this.$emit('mounted', {
         el: this.$el,
         task: this.task
      })
   }
}
</script>