<template>
   <div 
      class="w-screen h-screen fixed top-0 left-0"
      @click="$emit('close')"
   >
      <slot/>
   </div>
</template>

<script>
export default {
   name: 'Backdrop'
}
</script>