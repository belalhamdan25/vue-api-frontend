<template>
  <div class="forgot-password">
    <div class="container">
      <div class="row py-4">
        <div class="col-12">
          <div class="forgot-form bg-white radios-5 p-4">
            <form>
              <div class="form-group">
                <h6>Forgot Password</h6>
                <hr />

                <label for="forgotemail">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="forgotemail"
                  placeholder="Enter Your Email"
                  v-model="forgotEmail"
                  required
                />
              </div>
              <button type="submit" @click.prevent="forgotPassword" class="btn btn-hire">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.forgot-password {
  min-height: 80vh;
}
.btn-hire {
  background: #41b883;
  color: white;
  /* font-size: 12px; */
}
.btn-hire:hover {
  background: #369a6e;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      forgotEmail: '',
    };
  },
  methods: {
      forgotPassword(){
        this.$Progress.start();
        axios.post('https://vue-api-backend.herokuapp.com/api/auth/forgot-password',{
          email:this.forgotEmail,
        })
        .then(res=>{
            console.log(res);
            this.sucessMessageOpen();
            this.$Progress.finish();

        })
        .catch(err => {
            console.log(err);
            this.errorMessageOpen();
        })  
          
      },
     errorMessageOpen() {
      this.$toast.open({
        message: " There was error during send reset email link",
        type: "error",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    sucessMessageOpen() {
      this.$toast.open({
        message: "Password Reset Mail Sent Sucssfully",
        type: "success",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
  }
};
</script>