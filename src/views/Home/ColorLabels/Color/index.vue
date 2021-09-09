<template>
   <div
      class="my-2 w-6 h-6 rounded-full border-main-font border-2 font-bold text-main-font text-sm"
      :class="`
         bg-main-task-${color} 
         ${color === 'pink' ? 'w-40 px-2' : '' }
      `"
   >
      {{color === 'pink' ? 'testing' : ''}}
   </div>
</template>

<script>
export default {
   name: 'Color',
   props:{
      color:{
         type: String,
         required: true
      }
   }
}
</script>