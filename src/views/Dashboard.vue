<template>
  <div class="dashboard">
    <div v-if="userType == 'Freelancer'" class="col-12 text-center">
      <h2>Dashboard Page For Freelancer</h2>
    </div>

    <div v-if="userType == 'Client'" class="col-12 text-center">
      <h2>Dashboard Page For Client</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userType: null,
    };
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    if (this.user.user_type == "Freelancer") {
      this.userType = "Freelancer";
    } else if (this.user.user_type == "Client") {
      this.userType = "Client";
    } else {
      this.userType = "error detect user type";
    }
  },
};
</script>

<style></style>
