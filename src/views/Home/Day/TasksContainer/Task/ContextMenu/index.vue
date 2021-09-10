<template>
   <app-backdrop
      @close="test"
   >
      <div 
         class="w-28 h-12 bg-gray-600"
         @click.stop
      >

      </div>
   </app-backdrop>
</template>

<script>
export default {
   name: 'ContextMenu',
   methods:{
      test(){
         console.log('Closing')
      }
   }
}
</script>