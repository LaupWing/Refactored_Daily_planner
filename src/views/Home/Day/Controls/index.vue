<template>
   <div class="flex flex-col sticky w-8 top-1/2 transform -translate-y-2/4">
      <icon-up 
         class="opacity-25 text-main-font cursor-pointer hover:opacity-100 duration-200"
         @click.native="up"
      />
      <icon-circle 
         class="my-2 opacity-25 duration-200"
         :class="showed_task ? 'text-main-font cursor-pointer hover:opacity-100' : 'text-gray-300 pointer-events-none' "
         @click.native="mid"
      />
      <icon-down 
         class="opacity-25 text-main-font cursor-pointer hover:opacity-100 duration-200"
         @click.native="down"
      />
   </div>
</template>

<script>
export default {
   name: 'Controls',
   props:{
      tasks_elements:{
         type: Array,
         required: true
      },
      showed_task:{
         required: true
      },
      container:{
         type: HTMLDivElement,
         required: true
      },
   },
   data(){
      return{
         currentScroll: this.container.scrollTop + (this.container.offsetHeight/2)
      }
   },
   methods:{
      getScrollValue(up){
         const tasks = this.tasks_elements
         const filtered = tasks
            .filter(task=> up ? task.offsetTop < this.currentScroll : task.offsetTop > this.currentScroll)

         if(filtered.length>0){
            const closest = filtered.reduce((prev, curr)=> {
               return (Math.abs(curr.offsetTop - this.currentScroll) < Math.abs(prev.offsetTop - this.currentScroll) ? curr : prev)
            })
            return closest.offsetTop + (closest.offsetHeight/2) 
         }
         else{
            return tasks[tasks.length-1].offsetTop + (tasks[tasks.length-1].offsetHeight/2) 
         }
      },
      up(){
         let scrollTo = null
         const tasks = this.tasks_elements
         if(this.showed_task){
            const index = tasks.indexOf(this.showed_task)
            const dest = index === 0 ? (tasks.length-1) : (index-1) 
            scrollTo = Number((tasks[dest].offsetTop + (tasks[dest].offsetHeight/2)))
         }else{
            scrollTo = this.getScrollValue(true)
         }
         this.container.scrollTo(0, scrollTo - (this.container.offsetHeight/2))
      },
      down(){
         let scrollTo = null
         const tasks = this.tasks_elements
         if(this.showed_task){
            const index = tasks.indexOf(this.showed_task)
            const dest = index === (tasks.length-1) ? 0 : (index+1)
            scrollTo = Number((tasks[dest].offsetTop + (tasks[dest].offsetHeight/2)))
         }else{
            scrollTo = this.getScrollValue(false)
         }
         this.container.scrollTo(0, scrollTo - (this.container.offsetHeight/2))
      },
      mid(){
         const tasks = this.tasks_elements
         if(!this.showed_task){
            return
         }
         const index = tasks.indexOf(this.showed_task)
         const scrollTo = tasks[index].offsetTop + (tasks[index].offsetHeight/2)
         this.container.scrollTo(0, scrollTo - (this.container.offsetHeight/2))
      },
   }
}
</script>