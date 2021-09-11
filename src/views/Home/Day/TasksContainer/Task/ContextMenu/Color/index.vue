<template>
   <div 
      class="m-1.5 w-6 h-6 rounded-full relative"
      :class="`bg-main-task-${color} ${active ? 'active' : ''}`"
   ></div>
</template>

<script>
export default {
   name: 'Color',
   props:{
      color:{
         type: String,
         required: true
      },
      active:{
         type: String,
         required: true
      }
   },
   created(){
      console.log(this.color)
      console.log(this.active)
   }
}
</script>

<style scoped>
.active::before{
   content: '';
   width: 140%;
   height: 140%;
   background: rgba(0,0,0,.2);
   border-radius: 50%;
   position: absolute;
   z-index: -2;
}
</style>