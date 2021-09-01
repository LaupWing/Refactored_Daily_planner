<template>
   <div class="login">
      <form @submit.prevent="login">
         <h2>Login</h2>
         <div class="field">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email" />
         </div>
         <div class="field">
            <label for="password">Password:</label>
            <input type="password" name="password" v-model="password" />
         </div>
         <p v-if="feedback">{{ feedback }}</p>
         <div class="field">
            <button>Submit</button>
         </div>
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