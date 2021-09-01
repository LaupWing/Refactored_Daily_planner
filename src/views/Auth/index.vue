<template>
   <div class="m-auto">
      <form class="w-72 flex flex-col" @submit.prevent="login">
         <h2 class="font-bold text-3xl">Sign in</h2>
         <!-- <div class="field">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email" />
         </div> -->
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
      </form>
   </div>
</template>

<script>
export default {
   name: "Login",
   data() {
      return {
         email: null,
         password: null,
         feedback: null,
      };
   },
   methods: {
      login() {
         
      },
   },
};
</script>