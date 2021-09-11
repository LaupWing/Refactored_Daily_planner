<template>
   <div 
      class="m-1.5 w-6 h-6 rounded-full"
      :class="`bg-main-task-${color}`"
   ></div>
</template>

<script>
export default {
   name: 'Color',
   props:{
      color:{
         type: String,
         required: true
      }
   }
}
</script>