<template>
   <div 
      class="m-1.5 w-6 h-6 rounded-full relative flex items-center justify-center cursor-pointer"
      :class="
         `
            bg-main-task-${color}
            ${active === color ? 'active' : ''}
         `
      "
   >
      <icon-check
         v-if="active === color"
         class="w-5 text-white"
      />
   </div>
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
   }
}
</script>

<style scoped>
div:hover::before, 
.active::before{
   content: '';
   width: 130%;
   height: 130%;
   background: rgba(0,0,0,.15);
   border-radius: 50%;
   position: absolute;
   z-index: -2;
}
</style>