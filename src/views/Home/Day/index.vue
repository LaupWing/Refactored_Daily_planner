<template>
   <div class="flex flex-col">
      <current-task/>
      <tasks-container/>
      <scroll-lock/>
   </div>
</template>

<script>
import TasksContainer from './TasksContainer'
import CurrentTask from './CurrentTask'
import ScrollLock from './ScrollLock'

export default {
   name: 'Day',
   components:{
      TasksContainer,
      CurrentTask,
      ScrollLock
   },
   data(){
      return {
         locked: false
      }
   }
}
</script>