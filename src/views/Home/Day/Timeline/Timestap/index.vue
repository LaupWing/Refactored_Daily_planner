<template>
   <li 
      ref="timestamp"
      class="text-right text-xl flex-shrink-0 py-3"
      :class="showed ? 'opacity-100' : 'opacity-30' "
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
      },
      midpoint:{
         type: Number,
         required: true
      },
   },
   computed:{
      showed(){
         if(!this.mounted){
            return
         }
         const liMin = this.$refs.timestamp.offsetTop
         const liMax = this.$refs.timestamp.offsetTop + this.$el.offsetHeight
         if(this.midpoint >= liMin && this.midpoint <= liMax){
            return true   
         }
         if(!this.showed_task){
            return false
         }
         const taskHeight = this.showed_task.offsetHeight
         const taskOffsetTop = this.showed_task.offsetTop
         const taskMaxpoint = taskHeight + taskOffsetTop
         const quarterInPx = this.$el.offsetHeight / 2

         const min = taskOffsetTop - (quarterInPx*1.2) 
         const max = taskMaxpoint  + (quarterInPx*1.2)  


         return liMin >= min && liMax <= max
      }
   },
   data(){
      return{
         mounted: false
      }
   },
   mounted(){
      this.mounted = true
   }
}
</script>