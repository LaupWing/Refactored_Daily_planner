<template>
   <div
      class="absolute w-full flex flex-col duration-500 select-none h-36 bg-red-400"
      :style="{
         top: `${calculatePoint(task.time.begin)}px`
      }"
   >
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
      }
   },
   computed:{
      top(){

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
   created(){
      console.log(this.task)
      console.log(this.calculatePoint(this.task.time.begin))
   }
}
</script>