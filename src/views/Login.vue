<template>
  <div class="login">
    <div class="container">
      <div class="row py-4">
        <div class="col-sm-12 col-md-6 ">
          <div class="heading mb-5">
            <h4 style="color:#41b883">
              Welcome back!
            </h4>
            <h6>Kindly fill in your login details to proceed</h6>
          </div>
          <form action="#">
            <div class="con-form">
              <vs-input
                v-model="email"
                  type="email"
                color="#41b883"
                label-placeholder="Email"
              >
              </vs-input>

              <vs-input
                color="#41b883"
                type="password"
                v-model="password"
                label-placeholder="Password"
              >
              </vs-input>

              <vs-button
                block
                color="rgb(65, 184, 131)"
                @click.prevent="performLogin"
              >
                Login
              </vs-button>
            </div>

            <div
              class="d-flex  justify-content-between align-items-center mt-4"
            >
              <div>
                <span style="font-size:14px">Don’t have an account ? </span
                ><router-link class="pl-1 forgot" to="/register"
                  >Sign Up</router-link
                >
              </div>
              <router-link class="forgot" to="#">Forgot Password ?</router-link>
            </div>
          </form>
        </div>
        <div
          class=" col-sm-12 col-md-6 d-flex  justify-content-center align-items-center"
        >
          <div
            class="coatation d-none d-md-block d-lg-none d-lg-block d-xl-none d-xl-block p-4 "
          >
            <h4>
              <i
                class="bx bxs-quote-right bx-rotate-180"
                style="color:#41b883"
              ></i>

              Business opportunities
              <br />
              are like buses there's always
              <br />
              another one coming
              <i class="bx bxs-quote-right" style="color:#41b883"></i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.forgot {
  color: #41b883;
  text-decoration: none;
  font-size: 14px;
}
.forgot:hover {
  color: #369a6e;
}
/* .login {
  background: #fff;
} */
</style>

<style>
.con-form .vs-input-content {
  margin: 20px 0px;
  width: calc(100%);
}
.con-form .vs-input-content .vs-input {
  width: 100%;
  background: #fff;
}
.con-form .vs-button {
  margin-top: 10px;
  margin-left: 0;
  width: 25%;
}
</style>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      // isLoading: false,
    };
  },
  methods: {
    performLogin() {
      this.$Progress.start();
      this.$store
        .dispatch("performLoginAction", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.$Progress.finish();
          this.$router.push("/dashboard");
          this.sucessMessageOpen();
          console.log(res.data);
        })
        .catch((err) => {
          this.$Progress.fail();
          // this.error = " There was error during login process";
          this.errorMessageOpen();
          console.log(err.message);
        });
    },
    errorMessageOpen() {
      this.$toast.open({
        message: " There was error during login process",
        type: "error",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    sucessMessageOpen() {
      this.$toast.open({
        message: "Login Successful",
        type: "success",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
  },
};
</script>
