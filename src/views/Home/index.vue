<template>
   <div 
      class="flex-1 flex items-center justify-center"
      @keyup.space.ctrl="test" 
      tabindex="0"
   >
      <day/>
   </div>
</template>

<script>
import Day from './Day'

export default {
   name: "Home",
   components: {
      Day
   },
   methods:{
      test(){
         console.log('test')
      }
   }
};
</script>