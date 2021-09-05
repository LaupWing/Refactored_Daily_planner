<template>
   <div
      class="absolute w-full flex justify-between flex-col duration-500 select-none h-36 bg-main-task-pink border-2 border-main-font rounded-xl opacity-100 py-1 px-2"
      :style="{
         top: `${calculatePoint(task.time.begin)}px`,
         height: `${calculatePoint(task.time.end) - calculatePoint(task.time.begin)}px`
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