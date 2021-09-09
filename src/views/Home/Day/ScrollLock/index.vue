<template>
   <div 
      class="w-full border rounded-b text-main-font border-main-font p-1 flex justify-center items-center ml-20 group hover:bg-main-font cursor-pointer"
      @click="$store.commit('_day/setProp',{
         value:!$store.state._day.locked,
         type: 'locked'
      })"
      :style="{
         width: '350px'
      }"
   >
      <icon-locked 
         class="w-5 group-hover:text-white"
         v-if="$store.state._day.locked"
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