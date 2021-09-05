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
      }
   }
}
</script>