<template>
   <div class="flex flex-col sticky w-8 top-1/2 transform -translate-y-2/4">
      <icon-up 
         class="opacity-25 text-main-font cursor-pointer hover:opacity-100 duration-200"
         @click.native="up"
      />
      <icon-circle 
         class="my-2 opacity-25 duration-200"
         :class="showed_task ? 'text-main-font cursor-pointer hover:opacity-100' : 'text-gray-300' "
      />
      <icon-down class="opacity-25 text-main-font cursor-pointer hover:opacity-100 duration-200"/>
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
      up(){
         let scrollTo = null
         const tasks = this.tasks_elements
         if(this.showed_task){
            const index = tasks.indexOf(this.showed_task)
            const dest = index === 0 ? (tasks.length-1) : (index-1) 
            scrollTo = Number((tasks[dest].offsetTop + (tasks[dest].offsetHeight/2)))
         }else{
            const filterBelow = tasks
               .filter(task=> task.offsetTop < this.currentScroll)
            if(filterBelow.length>0){
               const closest = filterBelow.reduce((prev, curr)=> {
                  return (Math.abs(curr.offsetTop - this.currentScroll) < Math.abs(prev.offsetTop - this.currentScroll) ? curr : prev)
               })
               scrollTo = closest.offsetTop + (closest.offsetHeight/2) 
            }
            else{
               scrollTo = tasks[tasks.length-1].offsetTop + (tasks[tasks.length-1].offsetHeight/2) 
            }
         }
         this.container.scrollTo(0, scrollTo - (this.container.offsetHeight/2))
      },
        goToTask(direction){
            const tasks = Array
                .from(document.querySelectorAll('#Tasks .task'))
                .sort((a,b)=>a.offsetTop - b.offsetTop)
            
            const container = document.querySelector('#planner')
            let scrollTo = null
            if(this.visibleTask){
                const index = tasks.indexOf(this.visibleTask)
                if(direction=== 'up'){
                    const dest = index === 0 ? (tasks.length-1) : (index-1) 
                    scrollTo = Number((tasks[dest].offsetTop + (tasks[dest].offsetHeight/2))) 
                }
                else if(direction === 'current'){
                    scrollTo = tasks[index].offsetTop + (tasks[index].offsetHeight/2) 
                }
                else if(direction === 'down'){
                    const dest = index === (tasks.length-1) ? 0 : (index+1)
                    scrollTo = (tasks[dest].offsetTop + (tasks[dest].offsetHeight/2)) 
                }
            }else{
               const currentScroll = container.scrollTop + (container.offsetHeight/2) 
               if(direction=== 'up'){ 
                  const filterBelow = tasks
                     .filter(task=> task.offsetTop < currentScroll)
                  if(filterBelow.length>0){
                     const closest = filterBelow.reduce((prev, curr)=> {
                           return (Math.abs(curr.offsetTop - currentScroll) < Math.abs(prev.offsetTop - currentScroll) ? curr : prev);
                     });
                     scrollTo = closest.offsetTop + (closest.offsetHeight/2) 
                  }
                  else{
                     scrollTo = tasks[tasks.length-1].offsetTop + (tasks[tasks.length-1].offsetHeight/2) 
                  }
               }
               else if(direction === 'current'){
                  return
               }
               else if(direction === 'down'){
                  const filterUp = tasks
                     .filter(task=> task.offsetTop > currentScroll)
                  if(filterUp.length>0){
                     const closest = filterUp.reduce((prev, curr)=> {
                           return (Math.abs(curr.offsetTop - currentScroll) < Math.abs(prev.offsetTop - currentScroll) ? curr : prev);
                     });
                     scrollTo = closest.offsetTop + (closest.offsetHeight/2) 
                  }else{
                     scrollTo = tasks[0].offsetTop + (tasks[0].offsetHeight/2) 
                  }
               }
         }
         container.scrollTo(0,scrollTo - (container.offsetHeight/2))
      }
   }
}
</script>