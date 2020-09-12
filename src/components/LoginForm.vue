<template>
  <form action="#">
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        name="email"
        v-model="email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        name="password"
        v-model="password"
      />
    </div>
    <div style="color:red" v-if="error">{{ error }}</div>
    <div class="form-group form-check">
      <input
        type="checkbox"
        class="form-check-input"
        name="remeberMe"
        id="remeberMe"
        v-model="remeberMe"
      />
      <label class="form-check-label" for="remeberMe">Remeber me</label>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="performLogin">
      Login
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      remeberMe: "",
      error: ""
    };
  },
  methods: {
    performLogin() {
      axios
        .post("http://localhost/vue-api-backend/public/api/auth/login", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res.data);
          //store the token and user in local storage
          localStorage.setItem("token" , res.data.access_token);
          localStorage.setItem("user" , res.data.user);
          this.$router.push("/dashboard");
        })
        .catch(err => {
          console.log(err.message);
          this.error = err.message;
        });
    }
  }
};
</script>
