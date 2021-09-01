<template>
   <form-container>
      <h2 class="font-bold text-3xl">Sign in</h2>
      <div class="flex flex-col my-4">
         <app-field
            value=""
            label="Email"
         />
         <app-field
            value=""
            label="Password"
         />
      </div>
      <p v-if="feedback">{{ feedback }}</p>
      <app-button>Submit</app-button>
   </form-container>
</template>

<script>
import FormContainer from '../FormContainer'

export default {
   name: 'SignIn',
   components:{
      FormContainer
   }
}
</script>