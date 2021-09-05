<template>
   <div 
      class="flex flex-col fixed w-full items-center"
      :style="{
         top: `${container.offsetHeight / 2 + container.offsetTop}px`,
         width
      }"
   >
      <div class="border-t border-main-font w-full">
      </div>
      <h2 class="text-sm">00:00</h2>
   </div>
</template>

<script>
export default {
   name: 'Indicator',
   props:{
      container:{
         type: HTMLDivElement,
         required: true
      },
      width:{
         type: String,
         required: true
      }
   }
}
</script>