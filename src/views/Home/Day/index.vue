<template>
   <div class="flex flex-col">
      <tasks-container
         ref="taskContainer"
      />
      <div 
         class="w-full border rounded-b-xl text-main-font border-main-font p-1 flex justify-center items-center ml-20 group hover:bg-main-font cursor-pointer"
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

export default {
   name: 'Day',
   components:{
      TasksContainer
   },
   data(){
      return {
         locked: false
      }
   }
}
</script>