<template>
   <div 
      class="w-full border overflow-hidden rounded-t text-main-font border-main-font flex ml-20"
      @click="locked = !locked"
      :style="{
         width: '350px'
      }"
   >
      <div class="flex-1 flex items-center text-sm text-center">
         <div class="bg-main-font p-1 px-2 mr-2 text-white tracking-wider">
            21:00
         </div>
         {{$store.state._day.current_task}}
      </div>
      <div class="px-2 border-l border-main-font flex items-center justify-center cursor-pointer hover:bg-main-font hover:text-white">
         <icon-plus 
            class="w-5 group-hover:text-white"
         />
      </div>
   </div>
</template>

<script>
export default {
   name: 'CurrentTask'
}
</script>