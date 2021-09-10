<template>
   <app-backdrop
      v-on="$listeners"
   >
      <div 
         class="w-48 h-52 bg-white fixed rounded shadow flex flex-col"
         :style="{
            top: `${event.clientY}px`,
            left: `${event.clientX}px`
         }"
         @click.stop
      >
         <h2 class="uppercase tracking-wider text-sm font-bold p-2 border-b border-main-font">{{task.task}}</h2>
         <div class="flex flex-wrap p-2">
            <div class="bg-main-task-pink m-1.5 w-6 h-6 rounded-full"></div>
            <div class="bg-main-task-purple m-1.5 w-6 h-6 rounded-full"></div>
            <div class="bg-main-task-blue m-1.5 w-6 h-6 rounded-full"></div>
            <div class="bg-main-task-yellow m-1.5 w-6 h-6 rounded-full"></div>
            <div class="bg-main-task-red m-1.5 w-6 h-6 rounded-full"></div>
            <div class="bg-main-task-orange m-1.5 w-6 h-6 rounded-full"></div>
            <div class="bg-main-task-green m-1.5 w-6 h-6 rounded-full"></div>
         </div>
      </div>
   </app-backdrop>
</template>

<script>
export default {
   name: 'ContextMenu',
   props:{
      event:{
         required: true,
         type: PointerEvent
      },
      task:{
         type: Object,
         required: true
      }
   },
   methods:{
      test(){
         console.log('Closing')
      }
   },
   created(){
      console.log(this.task)
   }
}
</script>