<template>
   <ul
      class="flex flex-col flex-shrink-0 w-16 text-main-font"
      :style="{
         paddingTop: offset + 'px',
         paddingBottom: offset + 'px',
      }"
      id="timeline"
   >
      <timestamp
         v-for="(timestamp, i) in timestamps"
         :timestamp="timestamp"
         :midpoint="midpoint"
         :key="i"
      />
   </ul>
</template>

<script>
import Timestamp from './Timestap'

export default {
   name: "Timeline",
   components:{
      Timestamp
   },
   props:{
      container:{
         type: HTMLDivElement,
         required: true
      },
      midpoint:{
         type: Number,
         required: true
      }
   },
   data(){
      return{
         offset: 0,
         timestamps: [
            '00:00', 
            '00:30', 
            '01:00',
            '01:30',
            '02:00',
            '02:30',
            '03:00',
            '03:30',
            '04:00',
            '04:30',
            '05:00',
            '05:30',
            '06:00',
            '06:30',
            '07:00',
            '07:30',
            '08:00',
            '08:30',
            '09:00',
            '09:30',
            '10:00',
            '10:30',
            '11:00',
            '11:30',
            '12:00',
            '12:30',
            '13:00',
            '13:30',
            '14:00',
            '14:30',
            '15:00',
            '15:30',
            '16:00',
            '16:30',
            '17:00',
            '17:30',
            '18:00',
            '18:30',
            '19:00',
            '19:30',
            '20:00',
            '20:30',
            '21:00',
            '21:30',
            '22:00',
            '22:30',
            '23:00',
            '23:30',
            '00:00'
         ]
      }
   },
   mounted(){
      this.$store.commit('_day/setProp',{
         value: this.$el,
         type: 'timeline_el'
      })
      this.$emit('mounted', this.$el)
      this.offset = this.$store.state._day.container_el.offsetHeight/2
      window.onresize = ()=>{
         this.offset = this.$store.state._day.container_el.offsetHeight/2
      }

   }
};
</script>