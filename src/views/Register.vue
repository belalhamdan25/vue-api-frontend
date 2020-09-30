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
             <form action="#">
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input
          type="text"
          class="form-control"
          id="first_name"
          name="first_name"
          v-model="first_name"
        />
      </div>
      <div class="form-group">
        <label for="last_name">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="last_name"
          name="last_name"
          v-model="last_name"
        />
      </div>
      <div class="form-group">
        <label for="phone_number">Phone Number</label>
        <input
          type="tel"
          class="form-control"
          id="phone_number"
          name="phone_number"
          v-model="phone_number"
        />
      </div>
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

      <div class="form-group">
        <label for="user_type">User Type</label>
        <select
          class="form-control"
          name="user_type"
          id="user_type"
          v-model="user_type"
        >
          <option value="FreeLancer">FreeLancer</option>
          <option value="Client">Client</option>
        </select>
      </div>

      <div style="color:red" v-if="error">{{ error }}</div>

      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="performRegister"
      >
        Register
      </button>
    </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
      user_type: "",
      error: "",
      // isLoading: false,
    };
  },
  methods: {
    performRegister() {
      // this.isLoading = true;
      this.$Progress.start();
      this.$store
        .dispatch("performRegisterAction", {
          first_name: this.first_name,
          last_name: this.last_name,
          phone_number: this.phone_number,
          email: this.email,
          password: this.password,
          user_type: this.user_type,
        })
        .then((res) => {
          // this.isLoading = false;
          this.$Progress.finish();
          this.$router.push("/dashboard");
          console.log(res.data);
        })
        .catch((err) => {
          // this.isLoading = false;
          this.$Progress.fail();
          this.error = " There was error during register process";
          console.log(err.message);
        });
    },
  },
};
</script>

<style></style>
