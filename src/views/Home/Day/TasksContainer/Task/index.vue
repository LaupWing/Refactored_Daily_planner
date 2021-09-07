<template>
   <div
      data-task
      class="absolute text-main-font w-full flex justify-between flex-col select-none h-36 bg-white border-main-font rounded-md overflow-hidden"
      :class="show ? 'opacity-100 shadow border-2' : 'opacity-25 border' "
      :style="{
         top: `${top}px`,
         height: `${height}px`
      }"
   >
      <h2 
         class="text-sm font-bold bg-main-task-pink px-2 py-1 border-main-font"
         :class="show ? 'border-b-2' : 'border-b' "
      >
         {{task.task}}
      </h2>

      <h3 class="text-xs ml-2 mb-1">{{task.time.begin}} - {{task.time.end}}</h3>
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
            this.$emit('set_showed_task', this.$el)
            return true
         }
         this.$emit('disable_showed_task', this.$el)
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
   },
   mounted(){
      this.$emit('mounted', this.$el)
   }
}
</script>