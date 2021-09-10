<template>
   <app-backdrop
      v-on="$listeners"
   >
      <div 
         class="w-28 h-12 bg-gray-600 fixed"
         :style="{
            top: `${event.clientY}px`,
            left: `${event.clientX}px`
         }"
         @click.stop
      >

      </div>
   </app-backdrop>
</template>

<script>
export default {
   name: 'ContextMenu',
   props:{
      event:{
         required: true,
         type: PointerEvent
      }
   },
   methods:{
      test(){
         console.log('Closing')
      }
   },
   created(){
      console.log(this.event)
   }
}
</script>