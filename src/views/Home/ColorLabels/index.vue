<template>
   <div class="flex flex-col items-start absolute left-2 top-1/2 transform -translate-y-2/4">
      <h2 class="text-sm tracking-wide uppercase font-bold text-main-font">Labels</h2>
      <color 
         v-for="color in colors"
         :key="color"
         :color="color"
      />
   </div>
</template>

<script>
import Color from './Color'

export default {
   name: 'ColorLabels',
   components:{
      Color
   },
   computed:{
      colors(){
         return new Set(this.$store.getters['planner/tasksOfToday']
            .map(x=>x.color.color))
      }
   }
}
</script>