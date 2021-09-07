<template>
   <div 
      class="w-full border rounded-b text-main-font border-main-font p-1 flex justify-center items-center ml-20 group hover:bg-main-font cursor-pointer"
      @click="locked = !locked"
      :style="{
         width: '350px'
      }"
   >
      <icon-locked 
         class="w-5 group-hover:text-white"
         v-if="locked"
      />
      <icon-unlocked 
         class="w-5 group-hover:text-white"
         v-else
      />
   </div>
</template>

<script>
export default {
   name: 'ScrollLock'
}
</script>