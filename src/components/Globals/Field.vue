<template>
   <div class="flex flex-col my-2 w-full">
      <label class="text-xs tracking-wide uppercase font-bold">{{label}}</label>
      <input 
         class="px-2 py-1 outline-none border-gray-300 rounded border"
         :type="type" 
         v-model="value_proxy" 
      />
   </div>
</template>

<script>
export default {
   name: 'Field',
   props:{
      value: {
         type: String,
         required: true
      },
      label: {
         type: String,
         required: true
      },
      type: {
         type: String,
         default: 'text'
      },
   },
   computed:{
      value_proxy:{
         get(){
            return this.value
         },
         set(value){
            this.$emit('update:value', value)
         }
      }
   }
}
</script>