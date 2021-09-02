<template>
   <form-container
      @submit="signUp"
   >
      <h2 class="font-bold text-3xl">Sign up</h2>
      <div class="flex flex-col my-4">
         <app-field
            value=""
            label="Email"
         />
         <app-field
            value=""
            label="Password"
         />
         <app-field
            value=""
            label="Confirm Password"
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
         Already have an account? Click hier to sign in
      </p>
   </form-container>
</template>

<script>
import FormContainer from '../FormContainer'

export default {
   name: 'SignUp',
   components:{
      FormContainer
   },
   data(){
      return{
         email: '',
         password: '',
         confirm_password: '',
      }
   },
   methods:{
      async signUp(){
         if(this.email && this.password && this.confirm_password){
            if(this.password !== this.confirm_password){
               return this.feedback = 'Password doesnt match'
            }
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