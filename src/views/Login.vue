<template>
  <div class="login">
    <div class="container">
      <div class="heading mb-5">
        <h2>
          Welcome back!
        </h2>
        <h6>Kindly fill in your login details to proceed</h6>
      </div>
      <loginForm></loginForm>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
export default {
  components: {
    loginForm: LoginForm,
  },
};
</script>

<style></style>
