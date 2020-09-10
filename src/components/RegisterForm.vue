<template>
  <form action="#">
    <div class="form-group">
      <label for="Fname">First Name</label>
      <input type="text" class="form-control" id="Fname" name="Fname" v-model="Fname" />
    </div>
    <div class="form-group">
      <label for="Lname">Last Name</label>
      <input type="text" class="form-control" id="Lname" name="Lname" v-model="Lname"/>
    </div>
    <div class="form-group">
      <label for="phoneNumber">Phone Number</label>
      <input
        type="tel"
        class="form-control"
        id="phoneNumber"
        name="phoneNumber"
        v-model="phoneNumber"
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
      <label for="password">Confirm Password</label>
      <input
        type="password"
        class="form-control"
        id="confirmPassword"
        name="confirmPassword"
        v-model="confirmPassword"
      />
    </div>

    <div class="form-group">
      <label for="sel1">User Type</label>
      <select class="form-control" name="userType" id="userType" v-model="userType">
        <option value="FreeLancer">FreeLancer</option>
        <option value="Client">Client</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary" @click.prevent="performRegister">Register</button>
  </form>
</template>

<script>
export default {
    name: "register",
     data() {
    return {
      Fname:"",
      Lname:"",
      phoneNumber:"",
      email: "",
      password: "",
      confirmPassword: "",
      userType: ""
    };
  },
  methods: {
    performRegister() {
      console.log("success perform register");
      // this.$router.push("/dashboard");
    }
  }

}
</script>