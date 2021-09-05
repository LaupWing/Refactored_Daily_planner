<template>
   <div
      class="absolute w-full flex justify-between flex-col duration-500 select-none h-36 bg-main-task-pink border-2 border-main-font rounded-xl py-1 px-2"
      :class="show ? 'opacity-100 shadow' : 'opacity-25' "
      :style="{
         top: `${top}px`,
         height: `${height}px`
      }"
   >
      <h2 class="text-sm font-bold">{{task.task}}</h2>

      <h3 class="text-xs">{{task.time.begin}} - {{task.time.end}}</h3>
   </div>
</template>

<script>
export default {
   name: 'Task',
   props:{
      timeline_positions:{
         type: Array,
         required: true
      },
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
      top(){
         return this.calculatePoint(this.task.time.begin)
      },
      height(){
         return this.calculatePoint(this.task.time.end) - this.calculatePoint(this.task.time.begin)
      },
      show(){
         if(this.midpoint >= this.top && this.midpoint <= (this.top + this.height)){
            this.$emit('set_show_task', this.$el)
            return true
         }
         return false
      }
   },
   methods:{
      calculatePoint(state) {
         const li = this.timeline_positions.find((li) => {
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
   }
}
</script>