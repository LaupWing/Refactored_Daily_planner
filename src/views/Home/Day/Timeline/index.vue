<template>
   <ul>
      <li 
         class="text-right mr-4 text-xl"
         v-for="timestamp in timestamps"
         :data-time="timestamp"
         :key="timestamp"
      >
         {{timestamp.includes('30') ? '-' : timestamp}}
      </li>
   </ul>
</template>

<script>
export default {
   name: "Timeline",
   data(){
      return{
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
   }
};
</script>

<style>
ul#Timeline {
   display: flex;
   flex-direction: column;
   padding-right: 15px;
   padding-top: calc(var(--dailyPlanner-height) / 2);
   margin-left: 20px;
   padding-bottom: calc(var(--dailyPlanner-height) / 2);
   box-sizing: content-box;
   user-select: none;
}
#Timeline li {
   padding: 10px 0;
   list-style: none;
   text-align: right;
   display: inline;
   font-size: 1.5em;
   transform-origin: right;
   opacity: 0.3;
   transition: 1s;
   position: relative;
}
#Timeline li.highlight {
   transform: scale(1.2);
}
#Timeline li.opacity {
   opacity: 1;
}
@media only screen and (max-height: 800px) {
   #Timeline li {
      padding: 5px 0;
      font-size: 1.2em;
   }
}
</style>