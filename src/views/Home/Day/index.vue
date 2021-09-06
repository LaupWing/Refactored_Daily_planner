<template>
   <div class="flex flex-col">
      <tasks-container/>
   </div>
</template>

<script>
import TasksContainer from './TasksContainer'

export default {
   name: 'Day',
   components:{
      TasksContainer
   }
}
</script>