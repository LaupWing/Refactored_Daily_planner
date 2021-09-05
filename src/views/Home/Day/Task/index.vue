<template>
   <div
      class="absolute w-full flex flex-col duration-500 select-none"
   >
   </div>
</template>

<script>
export default {
   name: 'Task',
   props:{
      timeline_positions:{
         type: Array,
         required: true
      },
      task:{
         type: Object,
         required: true
      }
   },
   computed:{
      top(){
         
      }
   },
   created(){
      console.log(this.task)
      console.log(this.timeline_positions)
   }
}
</script>