<template>
  <form action="#">
    <div class="form-group">
      <label for="first_name">First Name</label>
      <input type="text" class="form-control" id="first_name" name="first_name" v-model="first_name" />
    </div>
    <div class="form-group">
      <label for="last_name">Last Name</label>
      <input type="text" class="form-control" id="last_name" name="last_name" v-model="last_name"/>
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
      <input type="email" class="form-control" id="email" name="email" v-model="email"/>
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
      <select class="form-control" name="user_type" id="user_type" v-model="user_type">
        <option value="FreeLancer">FreeLancer</option>
        <option value="Client">Client</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary" @click.prevent="performRegister">Register</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
    name: "register",
     data() {
    return {
      first_name:"",
      last_name:"",
      phone_number:"",
      email: "",
      password: "",
      user_type: ""
    };
  },
  methods: {
    performRegister() {
            axios
        .post("http://localhost/vue-api-backend/public/api/auth/register", {
          first_name:this.first_name,
          last_name:this.last_name,
          phone_number:this.phone_number,
          email: this.email,
          password: this.password,
          user_type:this.user_type
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

}
</script>