<template>
   <form-container>
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
   }
}
</script>