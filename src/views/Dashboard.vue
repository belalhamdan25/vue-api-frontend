<template>
  <div class="dashboard">

     <div class="col-12 text-center">
      <h2>Dashboard Page</h2>
    </div>


        <!-- <div v-if="userType == 'freelancer'" class="col-12 text-center">
      <h2>Dashboard Page For Freelancer</h2>
    </div>
    <div v-if="userType == 'freelancer'" class="col-12 text-center">
      <h2>Dashboard Page For Freelancer</h2>
    </div> -->

    <!-- <div v-if="userType == 'client'" class="col-12 text-center">
      <h2>Dashboard Page For Client</h2>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // userType: null,
    };
  },
  computed: {
    // user() {
    //   return this.$store.getters.get_user;
    // },
  },
  mounted() {
    // this.userType=this.user.role_name;
  },
};
</script>

<style></style>
