<template>
   <form 
      class="w-72 flex flex-col" 
      @submit.prevent="$emit('submit')"
   >
      <slot />
   </form>
</template>

<script>
export default {
   name: "FormContainer",
};
</script>