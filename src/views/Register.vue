<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="heading mb-5">
            <h2>
              Sign up
            </h2>
            <h6>Kindly fill your details to proceed</h6>
          </div>
          <registerForm></registerForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm";

export default {
  components: {
    registerForm: RegisterForm,
  },
};
</script>

<style></style>
