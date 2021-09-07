<template>
   <div class="flex flex-col">
      <current-task/>
      <tasks-container
         ref="taskContainer"
         :locked="locked"
      />
      <div 
         class="w-full border rounded-b text-main-font border-main-font p-1 flex justify-center items-center ml-20 group hover:bg-main-font cursor-pointer"
         @click="locked = !locked"
         :style="{
            width: '350px'
         }"
      >
         <icon-locked 
            class="w-5 group-hover:text-white"
            v-if="locked"
         />
         <icon-unlocked 
            class="w-5 group-hover:text-white"
            v-else
         />
      </div>
   </div>
</template>

<script>
import TasksContainer from './TasksContainer'
import CurrentTask from './CurrentTask'

export default {
   name: 'Day',
   components:{
      TasksContainer,
      CurrentTask
   },
   data(){
      return {
         locked: false
      }
   }
}
</script>