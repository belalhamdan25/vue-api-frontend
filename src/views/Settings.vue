<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-12">
        <h2>settings page Genral Info </h2>
           <form action="#">
      <div class="form-group">
        <label for="first_name">First Name</label>
        <input
          type="text"
          class="form-control"
          id="first_name"
          name="first_name"
          v-model="user.first_name"
        />
      </div>
      <div class="form-group">
        <label for="last_name">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="last_name"
          name="last_name"
          v-model="user.last_name"
        />
      </div>
      <div class="form-group">
        <label for="phone_number">Phone Number</label>
        <input
          type="tel"
          class="form-control"
          id="phone_number"
          name="phone_number"
          v-model="user.phone_number"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          v-model="user.email"
        />
      </div>

      <div style="color:red" v-if="error">{{ error }}</div>

      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="updateUserInfo"
      >
        Update
      </button>
    </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
export default {
  data() {
    return {
      // isLoading: false,
      error:""
    }
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    }
  },
  methods: {
    updateUserInfo() {
      this.$Progress.start();
      this.$store
        .dispatch("updateUserInfoAction", {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          phone_number: this.user.phone_number,
          email: this.user.email,
        })
        .then(res => {
      this.$Progress.finish();
          // console.log("user updated");
          console.log(res);
        })
        .catch(err => {
          // this.isLoading = false;
          this.$Progress.fail();
          this.error = " There was error during update process";
          // this.error = err.message;
          console.log(err.message);
        });
    }
  }
};
</script>
