<template>
   <div class="flex flex-col">
      <div 
         class="w-full border overflow-hidden rounded-t text-main-font border-main-font flex ml-20"
         @click="locked = !locked"
         :style="{
            width: '350px'
         }"
      >
         <div class="flex-1 flex items-center text-center">
            <div class="bg-main-font p-1 px-2 mr-1 text-white text-sm tracking-wider">
               21:00
            </div>
            No current tasks
         </div>
         <div class="px-2 border-l border-main-font flex items-center justify-center cursor-pointer hover:bg-main-font hover:text-white">
            <icon-plus 
               class="w-5 group-hover:text-white"
            />
         </div>
      </div>
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