<template>
   <div class="flex flex-col items-center absolute left-2 top-1/2 transform -translate-y-2/4">
      <h2 class="text-sm tracking-wide uppercase font-bold text-main-font">Labels</h2>
      <div 
         v-for="color in colors"
         :key="color"
         :class="`my-2 w-6 h-6 rounded-full bg-main-task-${color} border-main-font border-2`"
      >

      </div>
   </div>
</template>

<script>
export default {
   name: 'ColorLabels',
   computed:{
      colors(){
         return new Set(this.$store.getters['planner/tasksOfToday']
            .map(x=>x.color.color))
      }
   },
   created(){
      console.log(this.colors)
   }
}
</script>