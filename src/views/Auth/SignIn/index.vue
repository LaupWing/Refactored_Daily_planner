<template>
   <form-container
      @submit="login"
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
   },
   methods:{
      login(){
         if(this.email && this.password){
            try{
               this.$store.dispatch('user/login', {
                  email: this.email,
                  password: this.password
               })
            }catch(e){
               console.log(e)
            }
         }else{
            alert('Email and Password has te be filled in')
         }
      }
   }
}
</script>