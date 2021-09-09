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
   computed:{
      showed_task(){
         return this.$store.state._day.showed_task
      },
      tasks(){
         return this.tasks_elements.sort((a,b)=>{
            if(a.offsetTop < b.offsetTop){
               return -1
            }
            if(a.offsetTop > b.offsetTop){
               return 1
            }
            return 0
         })
      }
   },
   methods:{
      getScrollValue(up){
         const filtered = this.tasks
            .filter(task=> up ? task.offsetTop < this.currentScroll : task.offsetTop > this.currentScroll)

         if(filtered.length>0){
            const closest = filtered.reduce((prev, curr)=> {
               return (Math.abs(curr.offsetTop - this.currentScroll) < Math.abs(prev.offsetTop - this.currentScroll) ? curr : prev)
            })
            return closest.offsetTop + (closest.offsetHeight/2) 
         }
         else{
            return this.tasks[this.tasks.length-1].offsetTop + (this.tasks[this.tasks.length-1].offsetHeight/2) 
         }
      },
      up(){
         let scrollTo = null
         if(this.showed_task){
            const index = this.tasks.indexOf(this.showed_task.el)
            const dest = index === 0 ? (this.tasks.length-1) : (index-1) 
            scrollTo = Number((this.tasks[dest].offsetTop + (this.tasks[dest].offsetHeight/2)))
         }else{
            scrollTo = this.getScrollValue(true)
         }
         this.container.scrollTo(0, scrollTo - (this.container.offsetHeight/2))
      },
      down(){
         let scrollTo = null
         if(this.showed_task){
            const index = this.tasks.indexOf(this.showed_task.el)
            const dest = index === (this.tasks.length-1) ? 0 : (index+1)
            scrollTo = Number((this.tasks[dest].offsetTop + (this.tasks[dest].offsetHeight/2)))
         }else{
            scrollTo = this.getScrollValue(false)
         }
         this.container.scrollTo(0, scrollTo - (this.container.offsetHeight/2))
      },
      mid(){
         if(!this.showed_task){
            return
         }
         const index = this.tasks.indexOf(this.showed_task.el)
         const scrollTo = this.tasks[index].offsetTop + (this.tasks[index].offsetHeight/2)
         this.container.scrollTo(0, scrollTo - (this.container.offsetHeight/2))
      },
   }
}
</script>