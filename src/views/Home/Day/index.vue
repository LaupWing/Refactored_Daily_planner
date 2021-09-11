<template>
   <div 
      class="flex flex-col outline-none"
      tabindex="0"
      @keyup.space="$store.dispatch('_day/moveToCurrentTime')"
   >
      <context-menu
         v-if="$store.state._day.contextmenu"
      />
      <current-task/>
      <tasks-container/>
      <scroll-lock/>
   </div>
</template>

<script>
import TasksContainer from './TasksContainer'
import CurrentTask from './CurrentTask'
import ScrollLock from './ScrollLock'
import ContextMenu from './ContextMenu'

export default {
   name: 'Day',
   components:{
      TasksContainer,
      CurrentTask,
      ScrollLock,
      ContextMenu
   },
   data(){
      return {
         locked: false
      }
   }
}
</script>