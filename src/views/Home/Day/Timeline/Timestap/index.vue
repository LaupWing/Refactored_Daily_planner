<template>
   <li 
      class="text-right opacity-30 text-xl flex-shrink-0 py-3"
      :data-time="timestamp"
   >
      {{timestamp.includes('30') ? '-' : timestamp}}
   </li>
</template>

<script>
export default {
   name: 'Timestap',
   props:{
      timestamp:{
         type: String,
         required: true
      },
      showed_task:{
         required: true
      }
   },
   methods:{
      test(){
         const taskHeight = this.showed_task.offsetHeight
         const taskOffsetTop = this.showed_task.offsetTop
         const taskMaxpoint = taskHeight + taskOffsetTop
         const quarterInPx = li.offsetHeight/2 // Because one li represents half an hour

         const min = taskOffsetTop - (quarterInPx*1.2) 
         const max = taskMaxpoint  + (quarterInPx*1.2)  

         const liMin = li.offsetTop
         const liMax = li.offsetTop + li.offsetHeight

         if(liMin >= min && liMax <= max){
            connectedLi.push(li)
        }
      }
   }
}
</script>