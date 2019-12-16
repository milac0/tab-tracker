<template>
  <div class="register">
    <h1>Password</h1>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <br />
    <input type="password" name="email" placeholder="password" v-model="password" />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticatinService from "../services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const { email, password } = this;
      await AuthenticatinService.register({ email, password });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
}
</style>
