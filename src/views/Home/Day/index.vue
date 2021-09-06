<template>
   <div class="flex flex-col">
      <tasks-container
         ref="taskContainer"
      />
      <div 
         class="w-full border rounded-b-xl text-main-font border-main-font p-1 flex justify-center items-center ml-16"
         :style="{
            width: '350px'
         }"
      >
         <icon-locked class="w-5"/>
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
   created(){
      console.log(this.$refs)
   }
}
</script>