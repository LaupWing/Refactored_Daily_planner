<template>
   <button 
      class="bg-main-highlight-primary hover:bg-main-highlight-dark duration-200 font-bold uppercase text-sm tracking-wide p-2 rounded px-6"
   >
      <slot/>
   </button>
</template>

<script>
export default {
   name: 'Button'
}
</script>