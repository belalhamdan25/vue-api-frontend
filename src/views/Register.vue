<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="heading mb-5">
            <h2>
             Register
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
        <label for="location">Location</label>
        <input
          type="text"
          class="form-control"
          id="location"
          name="location"
          v-model="location"
        />
      </div>

        <div class="form-group">
        <label for="role_name">Category</label>
        <select
          class="form-control"
          v-model="category_id"
        >
          <option           v-for="categoriesValue in categoriesValues"
              :key="categoriesValue.name" :value="categoriesValue.id">{{categoriesValue.desc}}</option>

        </select>
      </div>

      <div class="form-group">
        <label for="role_name">User Type</label>
        <select
          class="form-control"
          name="role_name"
          id="role_name"
          v-model="role_name"
        >
          <option  v-for="role in roles"
              :key="role" :id="role" :value="role">{{role}}</option>

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
import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
      role_name: "",
      error: "",
      roles:[],
      categoriesValues:[],
      category_id:null,
      location:"",
      rate:0
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
          role_name: this.role_name,
          category_id: this.category_id,
          location: this.location,
          rate: this.rate,
        })
        .then((res) => {
          // this.isLoading = false;
          this.$Progress.finish();
          this.$router.push("/dashboard");
          this.sucessMessageOpen();
          console.log(res.data);
        })
        .catch((err) => {
          // this.isLoading = false;
          this.$Progress.fail();
          // this.error = " There was error during register process";
          this.errorMessageOpen();
          console.log(err.message);
        });
    },
      errorMessageOpen() {
      this.$toast.open({
        message: " There was error during register process",
        type: "error",
        duration: 5000,
        dismissible: true,
        position:'top-right'
      })
    },
      sucessMessageOpen() {
      this.$toast.open({
        message: "Thank you .. ",
        type: "success",
        duration: 5000,
        dismissible: true,
        position:'top-right'
      })
    },
      loadRoles() {
     axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/auth/roles"
        )
        .then((response) => {
          this.roles = response.data;
        });
    },
        loadcategoriesValues() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios/categories-filter-values"
        )
        .then((response) => {
          this.categoriesValues = response.data;
        });
    },
  },
  mounted(){
    this.loadRoles();
    this.loadcategoriesValues();
  }
};
</script>

<style></style>
