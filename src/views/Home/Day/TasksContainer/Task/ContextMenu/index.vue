<template>
   <app-backdrop
      v-on="$listeners"
   >
      <div 
         class="w-48 bg-white fixed rounded shadow flex flex-col items-center"
         :style="{
            top: `${event.clientY}px`,
            left: `${event.clientX}px`
         }"
         @click.stop
      >
         <h2 class="uppercase tracking-wider text-sm font-bold p-2 border-b border-main-font w-full">{{task.task}}</h2>
         <div class="flex flex-wrap p-2 w-full border-b border-main-font">
            <color
               v-for="color in $store.state.planner.colors"
               :key="color"
               :color="color"
            />
         </div>
         <div class="flex w-full justify-center items-center py-2 border-b border-main-font hover:bg-red-300 hover:text-white cursor-pointer">
            <icon-trashcan class="w-5"/>
         </div>
         <button class="px-3 py-0.5 my-2 uppercase rounded-full hover:bg-main-font hover:text-white border border-main-font text-xs tracking-wider">Confirm</button>
      </div>
   </app-backdrop>
</template>

<script>
import Color from './Color'

export default {
   name: 'ContextMenu',
   components:{
      Color
   },
   props:{
      event:{
         required: true,
         type: PointerEvent
      },
      task:{
         type: Object,
         required: true
      }
   },
   methods:{
      test(){
         console.log('Closing')
      }
   },
   created(){
      console.log(this.task)
   }
}
</script>