<template>
   <div 
      class="flex-1 flex items-center justify-center relative"
   >
      <color-labels/>
      <day/>
   </div>
</template>

<script>
import Day from './Day'
import ColorLabels from './ColorLabels'

export default {
   name: "Home",
   components: {
      Day,
      ColorLabels
   }
};
</script>