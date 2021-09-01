<template>
   <form-container
      @submit="$store.dispatch('user/login', {email, password})"
   >
      <h2 class="font-bold text-3xl">Sign in</h2>
      <div class="flex flex-col my-4">
         <app-field
            :value.sync="email"
            label="Email"
         />
         <app-field
            :value.sync="password"
            label="Password"
         />
      </div>
      <app-button>Submit</app-button>
      <p 
         class="italic text-xs text-right cursor-pointer mt-4"
         @click="$emit('toggle')"
      >
         No account? Click hier to sign up
      </p>
   </form-container>
</template>

<script>
import FormContainer from '../FormContainer'

export default {
   name: 'SignIn',
   components:{
      FormContainer
   },
   data(){
      return {
         email: '',
         password: ''
      }
   }
}
</script>