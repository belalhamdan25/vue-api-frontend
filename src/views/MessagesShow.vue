<template>
  <section>
    <div class="container">
      <div class="row py-4">
        <div class="col-md-3 col-sm-12 w-100 text-left">
          <router-link
            :to="'/u/' + user.id"
            class="author-content d-flex flex-column bg-white justify-content-center align-items-center mb-4 p-4 user-head radios-5"
          >
            <img
              v-if="user.user_img != null"
              class="circle2"
              :src="user.user_img"
            />

            <div v-else class="circle">
              <span style="color: white; font-size: 25px">{{
                user.first_name.charAt(0).toUpperCase()
              }}</span>
            </div>

            <span class="mt-2 mb-2 heading-color" style="font-size: 18px"
              >{{ user.first_name }} {{ user.last_name }}</span
            >
          </router-link>
          <div
            class="author-content bg-white author-content-settings d-flex flex-column p-4 mb-4 justify-content-center align-items-start radios-5"
          >
            <router-link class="p-2 side-item" to="/dashboard"
              ><i class="bx bx-home"></i> Dashboard</router-link
            >
            <router-link class="p-2 side-item" to="/account-profile"
              ><i class="bx bx-user"></i> My Account</router-link
            >
            <router-link class="p-2 side-item" to="/balance"
              ><i class="bx bx-credit-card-front"></i> Account
              Balance</router-link
            >
            <router-link class="p-2 side-item" to="/my-projects"
              ><i class="bx bx-briefcase-alt"></i> My Projects</router-link
            >
            <router-link class="p-2 side-item" to="/my-portfolios"
              ><i class="bx bx-photo-album"></i> My portfolio</router-link
            >
            <router-link class="p-2 side-item" to="/my-offers"
              ><i class="bx bx-dollar-circle"></i> My Offers</router-link
            >
            <!-- <router-link class="p-2 side-item" to="/my-purchases"
              ><i class='bx bx-cart-alt'></i> My Purchases</router-link
            > -->
            <button class="p-2 side-item" @click.prevent="performLogout">
              <i class="bx bx-log-out"></i> Log out
            </button>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="row">
            <div class="col-12 radios-5 bg-white p-4">
              <div class="messages">
                <div class="d-flex justify-content-between align-items-start">
                  <h6
                    v-for="userconversationDat in userconversationData"
                    :key="userconversationDat.id"
                  >
                    {{ userconversationDat.user_name }}
                  </h6>
                  <!-- <button class="btn btn-hire" @click="finish()">Finish</button> -->
                </div>

                <hr />

                <div v-if="loading">
                  <vcl-bullet-list :rows="10"></vcl-bullet-list>
                </div>

                <div
                  class="d-flex flex-column justify-content-center align-items-start"
                  v-else
                >
                  <div v-for="message in messages" :key="message.id">
                    <p
                      :class="
                        message.sender_id == id
                          ? 'backMessageSec'
                          : 'backMessagePrime'
                      "
                    >
                      {{ message.body }}
                    </p>
                  </div>
                </div>
                <!-- <div
                  class="d-flex flex-column justify-content-center align-items-end"
                >
                  <span class="backMessageSec">Message</span>
                </div> -->

                <form class="input-group mb-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Message"
                    aria-label="Message"
                    aria-describedby="Message"
                    v-model="body"
                  />
                  <div class="input-group-append">
                    <div @click="SendMessage()" class="btn btn-hire">
                      <i class="bx bxs-send"></i>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.backMessagePrime {
  background: #41b883;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.backMessageSec {
  background: #ccc;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>

<script>
import axios from "axios";
import { VclBulletList } from "vue-content-loading";

export default {
  components: {
    VclBulletList,
  },
  data() {
    return {
      loading: false,
      path: "",
      id: "",
      messages: "",
      userconversationData: "",
      body: "",
      messagesStatus: "",
    };
  },
  methods: {
    performLogout() {
      this.$store
        .dispatch("performLogoutAction")
        .then((res) => {
          this.$router.push("/");
          this.sucessMessageOpen();
          console.log(res);
        })
        .catch((err) => {
          this.errorMessageOpen();
          console.log(err);
        });
    },
    fetchId() {
      this.path = this.$route.path;
      var str = this.$route.path;
      var n = str.lastIndexOf("/");
      var result = str.substring(n + 1);
      this.id = result;
    },
    loadMessages() {
      //   this.loading = true;
      let payload = {
        sent_to_id: this.id,
        token: this.retriveToken,
      };
      axios({
        url: "https://vue-api-backend.herokuapp.com/api/message/conversation",
        method: "POST",
        data: payload,
      }).then((response) => {
        this.messages = response.data;
        // this.loading = false;
      });
    },
    loadUserData() {
      axios
        .get("https://vue-api-backend.herokuapp.com/api/user/user/" + this.id)
        .then((response) => {
          this.userconversationData = response.data;
        });
    },
    SendMessage() {
      let payload = {
        sender_id: this.user.id,
        sent_to_id: this.id,
        body: this.body,
      };
      axios({
        url: "https://vue-api-backend.herokuapp.com/api/message/store",
        method: "POST",
        data: payload,
      }).then((response) => {
        this.messagesStatus = response;
        this.loadMessages();
        this.body = "";
      });
    },
    finish() {
      console.log("finish");
    },
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
    retriveToken() {
      return this.$store.getters.get_token;
    },
  },
  mounted() {
    this.fetchId();
    this.loadMessages();
    this.loadUserData();
    window.setInterval(() => {
      this.loadMessages();
    }, 1000);
  },
};
</script>
