<template>
   <div class="m-auto">
      <sign-in
         v-if="sign_in"
         @toggle="sign_in = false"
      />
      <sign-up
         v-else
         @toggle="sign_in = true"
      />
   </div>
</template>

<script>
import SignIn from './SignIn'
import SignUp from './SignUp'

export default {
   name: 'auth',
   components:{
      SignIn,
      SignUp
   },
   data() {
      return {
         sign_in: false
      }
   }
};
</script>