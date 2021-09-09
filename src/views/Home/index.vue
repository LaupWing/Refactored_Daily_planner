<template>
   <div 
      class="flex-1 flex items-center justify-center relative"
   >
      <div class="flex flex-col items-center absolute left-2 top-1/2 transform -translate-y-2/4">
         <h2 class="text-sm tracking-wide uppercase font-bold text-main-font">Labels</h2>
         <div class="my-2 w-6 h-6 rounded-full bg-main-task-purple border-main-font border-2">

         </div>
         <div class="my-2 w-6 h-6 rounded-full bg-main-task-pink border-main-font border-2">

         </div>
         <div class="my-2 w-6 h-6 rounded-full bg-main-task-yellow border-main-font border-2">

         </div>
         <div class="my-2 w-6 h-6 rounded-full bg-main-task-blue border-main-font border-2">

         </div>
      </div>
      <day/>
   </div>
</template>

<script>
import Day from './Day'

export default {
   name: "Home",
   components: {
      Day
   }
};
</script>