<template>
   <div
      class="my-2 h-6 rounded-full border-main-font border-2 font-bold text-main-font text-sm duration-200"
      :class="`
         bg-main-task-${color} 
         ${show ? 'px-2 w-full' : 'w-6' }
      `"
   >
      {{label}}
   </div>
</template>

<script>
export default {
   name: 'Color',
   props:{
      color:{
         type: String,
         required: true
      }
   },
   computed:{
      show(){
         if(this.$store.state._day.showed_task){
            return this.$store.state._day.showed_task.task.color.color === this.color
         }
         return false
      },
      label(){
         if(this.show){
            return this.$store.state.planner.colorLabels.find(color=>color.color === this.color).label
         }
         return ''
      },
   }
}
</script>