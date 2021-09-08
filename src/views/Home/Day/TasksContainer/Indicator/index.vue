<template>
   <div 
      class="flex flex-col select-none fixed w-full items-center text-main-font"
      :style="{
         top: `${container.offsetHeight / 2 + container.offsetTop}px`,
         width: $store.state.day.task_width
      }"
   >
      <div class="border-t border-main-font w-full">
      </div>
      <h2 class="text-sm">{{time}}</h2>
   </div>
</template>

<script>
import {addZero} from '@/utils/date'

export default {
   name: 'Indicator',
   props:{
      container:{
         type: HTMLDivElement,
         required: true
      },
      midpoint:{
         type: Number,
         required: true
      },
   },
   data(){
      return{
         time: '00:00'
      }
   },
   watch:{
      midpoint(){
         const midpoint = Math.round(this.midpoint)
         this.container.querySelectorAll('li').forEach(li=>{
            const max = li.offsetTop + li.offsetHeight
            const min = li.offsetTop
            if(midpoint >= min && midpoint <= max){
               const liTime = li.dataset.time
               const comparePoint = Math.round(li.offsetTop + (li.offsetHeight/2))
               const oneMinuteInPx = li.offsetHeight/30
               this.time = '00:00'
               if(Math.round(midpoint)===comparePoint){
                  this.time = liTime
               }
               else if(midpoint > comparePoint){
                  const minutesDiffrence = Math.round((midpoint-comparePoint)/oneMinuteInPx)
                  const liTimeHours =  Number(liTime.split(':')[0])
                  const liTimeMinutes = Number(liTime.split(':')[1])
                  this.time = `${addZero(liTimeHours)}:${addZero(liTimeMinutes+minutesDiffrence)}` 
               }
               else if(midpoint < comparePoint){
                  const minutesDiffrence = Math.round((comparePoint-midpoint)/oneMinuteInPx)
                  let liTimeHours =  Number(liTime.split(':')[0])
                  let liTimeMinutes = Number(liTime.split(':')[1])
                  if(liTimeMinutes === 0 ){
                     liTimeHours = (liTimeHours !== 0) ? liTimeHours - 1 : 23
                     liTimeMinutes = 60-minutesDiffrence
                     this.time = `${addZero(liTimeHours)}:${addZero(liTimeMinutes)}`
                  }else{
                     this.time = `${addZero(liTimeHours)}:${addZero(liTimeMinutes-minutesDiffrence)}`
                  }
               }
            }
         })
      },
   }
}
</script>