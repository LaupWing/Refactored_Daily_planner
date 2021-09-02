<template>
   <form-container
      @submit="signIn"
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
         <p 
            v-if="feedback"
            class="text-sm text-red-400"
         >
            {{feedback}}
         </p>
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
         password: '',
         feedback: ''
      }
   },
   methods:{
      async signIn(){
         if(this.email && this.password){
            try{
               await this.$store.dispatch('user/signIn', {
                  email: this.email,
                  password: this.password
               })
               
               this.$router.push({
                  name: 'Home'
               })
            }catch(e){
               this.feedback = e.message
            }
         }else{
            this.feedback = 'Email and Password has te be filled in'
         }
      }
   }
}
</script>