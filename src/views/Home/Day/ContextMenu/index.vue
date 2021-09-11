<template>
   <app-backdrop
      @close="
         $store.commit('_day/setProp',{
            value: null,
            type: 'contextmenu'
         })
      "
   >
      <div 
         class="w-48 bg-white fixed rounded shadow flex flex-col items-center"
         :style="{
            top: `${contextmenu.event.clientY}px`,
            left: `${contextmenu.event.clientX}px`
         }"
         @click.stop
      >
         <h2 class="uppercase tracking-wider text-sm font-bold p-2 border-b border-main-font w-full">{{contextmenu.task.task}}</h2>
         <div class="flex flex-wrap p-2 w-full border-b border-main-font">
            <color
               v-for="color in $store.state.planner.colors"
               :key="color"
               :color="color"
               :active="contextmenu.task.color.color"
            />
         </div>
         <div class="flex w-full justify-center items-center py-2 border-b border-main-font hover:bg-main-warning duration-200 hover:text-white cursor-pointer">
            <icon-trashcan class="w-5"/>
         </div>
         <button class="px-3 py-0.5 my-3 uppercase rounded-full hover:bg-main-font hover:text-white border border-main-font text-xs tracking-wider">Confirm</button>
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
   computed:{
      contextmenu(){
         return this.$store.state._day.contextmenu
      }
   }
}
</script>