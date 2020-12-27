<template>
  <div>
    <div class="container-fluid mb-4">
      <div class="row bg-white">
        <div class="container">
          <div class="row padding-25 bg-white">
            <div
              class="col-lg-10 col-md-9 col-sm-12 d-flex justify-content-start align-items-center"
              v-for="projectValue in projectValues"
              :key="projectValue.id"
            >
              <div class="image-user mr-4">
                <img
                  v-if="projectValue.user_img != null"
                  :src="projectValue.user_img"
                  class="rounded-circle hw-70-c"
                />
                <div class="rounded-circle hw-70-c letter-profile-img" v-else>
                  <span style="color: white; font-size: 25px">{{
                    projectValue.user_name.charAt(0).toUpperCase()
                  }}</span>
                </div>
              </div>

              <div
                class="d-flex flex-column justify-content-center align-items-start"
              >
                <div class="portfolio-title">
                  <h5 class="heading-color">
                    {{ projectValue.title }}
                  </h5>
                </div>
                <div class="portfolio-author">
                  <router-link :to="'/u/' + projectValue.id">
                    <small class="primary-color">
                      <i class="fas fa-user"></i>
                      {{ projectValue.user_name }}
                    </small>
                  </router-link>
                </div>
                <div class="portfolio-date">
                  <small class="text-secondary">
                    <i class="far fa-clock"></i>
                    {{ projectValue.created_at | moment("from", "now") }}
                  </small>
                </div>
                <div class="portfolio-status mt-2">
                  <small class="status-project text-secondary">
                    {{ projectValue.status }}
                  </small>
                </div>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 col-sm-12 p-4 d-flex justify-content-center align-items-center justify-content-md-end"
            >
              <div v-if="myProjectvar == false">
                <a href="#addOffers" class="btn btn-hire">
                  <i class="fas fa-briefcase"></i> Bid Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div
        class="row"
        v-for="projectValue in projectValues"
        :key="projectValue.id"
      >
        <div class="col-lg-9 col-md-8 col-sm-12">
          <div class="row mr-lg-2 mr-md-2">
            <div class="col-12 mb-2 p-4 radios-5 bg-white">
              <h6>Project Details</h6>
              <hr />
              <div
                class="port-view d-flex flex-column justify-content-center align-items-center"
              >
                <p>
                  {{ projectValue.desc }}
                </p>
              </div>
            </div>
            <div class="col-12 mb-2 radios-5 p-4 bg-white">
              <div class="port-det">
                <h6>Project Attachments</h6>
                <hr />

                <div
                  class="d-flex flex-column justify-content-center align-items-start"
                >
                  <a
                    target="_blank"
                    :href="projectA.link"
                    v-for="projectA in projectValue.attachments"
                    :key="projectA.id"
                    class="attach"
                  >
                    <small class="text-muted attach">
                      <i class="bx bxs-file"></i>
                      {{ projectA.name }}
                    </small>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 mb-2 radios-5 p-4 bg-white">
              <div class="port-det">
                <h6>Skills Required</h6>
                <hr />

                <a
                  class="label-tag"
                  v-for="projectS in projectValue.skills"
                  :key="projectS.id"
                  ><i class="fas fa-tag"></i> {{ projectS.name }}
                </a>
              </div>
            </div>
            <div v-if="LoggedInCheck">
              <div v-if="myProjectvar == false">
                <div class="col-12 mb-2 radios-5 p-4 bg-white" id="addOffers">
                  <div class="port-det">
                    <h6>Add Offer</h6>
                    <hr />
                    <div class="add-deal-form">
                      <form>
                        <div class="form-row">
                          <div class="col-md-4 mb-3">
                            <label for="timeLine">Time Line</label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroupPrepend2"
                                  >Days</span
                                >
                              </div>
                              <input
                                type="number"
                                class="form-control"
                                id="timeLine"
                                placeholder="Time Line"
                                required
                                min="1"
                                v-model="timeline"
                              />
                            </div>
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="coast">Coast</label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroupPrepend2"
                                  >$</span
                                >
                              </div>
                              <input
                                type="number"
                                class="form-control"
                                id="coast"
                                placeholder="Coast"
                                required
                                min="25"
                                v-model="coast"
                              />
                            </div>
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="profit">Your Profit</label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="profit"
                                  >$</span
                                >
                              </div>
                              <input
                                type="text"
                                class="form-control"
                                id="profit"
                                placeholder="profit after commission"
                                aria-describedby="profit"
                                readonly
                                v-model="profit"
                              />
                            </div>
                            <a
                              style="text-decoration: none; color: #41b883"
                              href="#"
                              ><small>After deducting the commission</small></a
                            >
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="description">Description</label>
                          <textarea
                            v-model="desc"
                            class="form-control"
                            id="description"
                            rows="6"
                          ></textarea>
                        </div>
                        <button
                          class="btn btn-hire"
                          @click.prevent="addOffer"
                          type="submit"
                        >
                          Add Offer
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else></div>
            </div>

            <div
              v-else
              class="col-12 mb-2 radios-5 p-4 bg-white"
              id="addOffers"
            >
              <div class="port-det">
                <h6>Add Offer</h6>
                <hr />
                <div class="add-offer-false text-center">
                  <p>login first if you want to add deals</p>
                  <button
                    class="btn btn-hire mr-2"
                    type="button"
                    @click="gotToSignup()"
                  >
                    Register
                  </button>
                  <button
                    class="btn btn-hire-borderd"
                    type="button"
                    @click="gotToLogin()"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>

            <div class="col-12 mb-4 radios-5 p-4 bg-white">
              <div class="port-det">
                <h6>Offers</h6>
                <hr />

                <div
                  v-for="projectOffer in projectOffers"
                  :key="projectOffer.id"
                  class="d-flex flex-column justify-content-center align-items-start"
                >
                  <div
                    class="d-flex justify-content-center align-items-center mb-4"
                  >
                    <div class="image-user mr-2">
                      <img
                        v-if="projectOffer.user.user_img != null"
                        :src="projectOffer.user.user_img"
                        class="rounded-circle hw-45-c"
                      />
                      <div
                        class="rounded-circle hw-45-c letter-profile-img"
                        v-else
                      >
                        <span style="color: white; font-size: 25px">{{
                          projectOffer.user.first_name.charAt(0).toUpperCase()
                        }}</span>
                      </div>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center align-items-start"
                    >
                      <router-link
                        :to="'/u/' + projectOffer.user.id"
                        class="primary-color"
                      >
                        {{ projectOffer.user.first_name }}
                        {{ projectOffer.user.last_name }}
                      </router-link>
                      <small class="text-secondary">
                        <i class="far fa-clock"></i>
                        {{ projectOffer.created_at | moment("from", "now") }}
                      </small>
                      <star-rating
                        class="mb-2"
                        :rating="projectOffer.user.rate"
                        :border-width="2"
                        :read-only="true"
                        inactive-color="#fff"
                        border-color="#ffd055"
                        :star-size="13"
                        :show-rating="false"
                        :star-points="[
                          23,
                          2,
                          14,
                          17,
                          0,
                          19,
                          10,
                          34,
                          7,
                          50,
                          23,
                          43,
                          38,
                          50,
                          36,
                          34,
                          46,
                          19,
                          31,
                          17,
                        ]"
                      ></star-rating>
                    </div>
                  </div>
                  <div v-if="myProjectvar == true">
                    <div class="d-flex justify-content-start align-items-start">
                      <h6 class="px-2 primary-color">
                        <i class="bx bx-dollar-circle"></i> Coast : $
                        {{ projectOffer.coast }}
                      </h6>
                      <h6 class="px-2 primary-color">
                        <i class="bx bx-calendar"></i> Timeline :
                        {{ projectOffer.timeline }} Days
                      </h6>
                    </div>
                  </div>

                  <p class="px-2">{{ projectOffer.desc }}</p>

                  <div v-if="myProjectvar == true">
                    <div class="d-flex justify-content-start align-items-start">
                      <router-link
                        data-toggle="modal"
                        data-target="#exampleModal"
                        to="#"
                        class="mr-4 btn btn-hire"
                      >
                        <i class="bx bxs-paper-plane"></i> Accept Offer
                      </router-link>
                      <!-- Modal -->
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h6 class="modal-title" id="exampleModalLabel">
                                Are you sure to approve the offer?
                              </h6>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <small>
                               You will now approve the offer between you and the
                              freelancer and always remember if you encounter any
                              problem during your discussion of the deal with
                              the freelancer that we are always available 24 hours a
                              day 7 days a week to help you
                              </small>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" @click="acceptOffer(projectOffer)" class="btn btn-hire">
                                Confirm
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <router-link
                        to="#"
                        class="btn btn-hire-borderd primary-color"
                      >
                        <i class="bx bxs-message-detail"></i> Send Message
                      </router-link>
                    </div>
                  </div>

                  <div class="hr-offers mt-4 mb-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="row">
            <div class="col-12 mb-2 radios-5 bg-white p-4">
              <div class="skills">
                <h6>Project Card</h6>
                <hr />

                <div
                  v-for="projectValue in projectValues"
                  :key="projectValue.id"
                >
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p>Time Line</p>
                    <p>{{ projectValue.time_line }} Days</p>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p>Budget</p>
                    <p>$ {{ projectValue.budget }}</p>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p>Offers</p>
                    <p>{{ projectValue.offers_count }}</p>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p>Avg</p>
                    <p>$ {{ projectOffersAvg }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 radios-5 mb-4 p-4 bg-white">
              <div class="row">
                <div class="col-12">
                  <h6>Share Project</h6>
                  <hr />
                </div>
              </div>

              <div class="share">
                <div class="mb-2">
                  <input
                    onClick="this.setSelectionRange(0, this.value.length)"
                    type="text"
                    class="form-control"
                    :id="projectPath"
                    :aria-describedby="projectPath"
                    :placeholder="projectPath"
                    :value="projectFullPath"
                    readonly
                  />
                </div>

                <div
                  class="shareicon"
                  v-for="projectValue in projectValues"
                  :key="projectValue.id"
                >
                  <ShareNetwork
                    network="facebook"
                    :url="projectFullPath"
                    :title="projectValue.title"
                    :description="projectValue.desc"
                  >
                    <a href="#" class="fa fa-facebook"></a>
                  </ShareNetwork>
                  <ShareNetwork
                    network="twitter"
                    :url="projectFullPath"
                    :title="projectValue.title"
                    :description="projectValue.desc"
                  >
                    <a href="#" class="fa fa-twitter"></a>
                  </ShareNetwork>
                  <ShareNetwork
                    network="whatsapp"
                    :url="projectFullPath"
                    :title="projectValue.title"
                    :description="projectValue.desc"
                  >
                    <a href="#" class="fa fa-whatsapp"></a>
                  </ShareNetwork>
                  <ShareNetwork
                    network="linkedin"
                    :url="projectFullPath"
                    :title="projectValue.title"
                  >
                    <a href="#" class="fa fa-linkedin"></a>
                  </ShareNetwork>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
.btn-hire-borderd {
  background: none;
  /* color: black; */
  border: 1px solid #41b883;
  /* font-size: 12px; */
}
</style>

<style scoped>
.shareicon {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.shareicon a {
  text-decoration: none;
}
.fa {
  padding: 10px;
  font-size: 20px;
  width: 40px;
  height: 40px;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
  transition: 0.3s;
}

/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  /* background: #3B5998; */
  background: #3b5998;
  border-radius: 5px;
  border: 1px rgb(236, 236, 236) solid;
  color: white;
  /* border-radius: 50%; */
}

.fa-twitter {
  background: #55acee;
  color: white;
  border-radius: 5px;
  border: 1px rgb(236, 236, 236) solid;
  color: #fff;
}

.fa-whatsapp {
  background: #25d366;
  color: white;
  border-radius: 5px;
  border: 1px rgb(236, 236, 236) solid;
  color: #fff;
}
.fa-linkedin {
  background: #2867b2;
  color: white;
  border-radius: 5px;
  border: 1px rgb(236, 236, 236) solid;
  color: #fff;
}

.hr-offers {
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  display: block;
}

h6 {
  color: rgb(87, 87, 87);
}

hr {
  display: block;
  margin-left: -24px;
  margin-right: -24px;
  border-width: 1px;
  border-color: #f0f0f0;
}
h5 {
  color: rgb(87, 87, 87);
}
p {
  font-size: 14px;
  color: rgb(87, 87, 87);
}
.hw-70-c {
  height: 70px !important;
  width: 70px !important;
}
.hw-45-c {
  height: 45px !important;
  width: 45px !important;
}
.letter-profile-img {
  background-color: #41b883;
  display: flex; /* or inline-flex */
  align-items: center;
  justify-content: center;
}
.padding-25 {
  padding: 25px;
}
.primary-color {
  color: #41b883;
}
.second-color {
  color: #369a6e;
}
.heading-color {
  color: rgb(87, 87, 87);
}
small {
  font-size: 90% !important;
}
.btn-hire {
  background: #41b883;
  color: white;
  /* font-size: 12px; */
}
.btn-hire:hover {
  background: #369a6e;
}
.btn-hire-borderd {
  background: none;
  /* color: black; */
  border: 1px solid #41b883;
  /* font-size: 12px; */
}

.portfolio-author a small {
  transition: 0.3s;
}
.portfolio-author a {
  text-decoration: none;
}
.portfolio-author a small:hover {
  color: #369a6e;
  transition: 0.3s;
}
.label-tag {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  position: relative;
  margin: 0 16px 8px 0;
  padding: 0 10px 0 10px;
  background: #41b883;
  /* -webkit-border-bottom-right-radius: 3px;
  border-bottom-right-radius: 3px;
  -webkit-border-top-right-radius: 3px;
  border-top-right-radius: 3px; */
  /* -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  /* text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
}

.label-tag:hover {
  background: #369a6e;
  transition: 0.3s;
  cursor: pointer;
}
.radios-5 {
  border-radius: 5px;
}
.attach {
  text-decoration: none;
  transition: 0.3s;
}
.attach:hover {
  color: #41b883 !important;
  transition: 0.3s;
}
</style>

<script>
import axios from "axios";
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  data() {
    return {
      projectId: "",
      projectPath: "",
      projectFullPath: "",
      projectValues: [],
      projectOffers: [],
      projectOffersAvg: null,
      days: null,
      coast: null,
      profit: 0,
      desc: "",
      timeline: null,
      myProjectvar: false,
    };
  },
  computed: {
    LoggedInCheck() {
      return this.$store.getters.get_loggedIn;
    },
    retriveToken() {
      return this.$store.getters.get_token;
    },
    user() {
      return this.$store.getters.get_user;
    },
  },
  methods: {
    acceptOffer(projectOffer){
        let payload = {
        userBuyer: this.user.id,
        userVendor: projectOffer.user_id,
        coast: projectOffer.coast,
        profit: projectOffer.profit,
        project:this.projectId,
      };
      axios({
        url:
          "https://vue-api-backend.herokuapp.com/api/project/accept-offer",
        method: "post",
        data: payload,
      }).then((response) => {
        console.log(response.data);
                    window.location.reload()

              // this.$router.push("/my-purchases");

      });
    },
    fetchProjectId() {
      this.projectPath = this.$route.path;
      var str = this.$route.path;
      var n = str.lastIndexOf("/");
      var result = str.substring(n + 1);
      this.projectId = result;
    },
    loadProjectData() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/project/project-show/" +
            this.projectId
        )
        .then((response) => {
          this.projectValues = response.data;
          if (this.user.id == response.data.data.user_id) {
            this.myProjectvar = true;
          }
        });
    },
    loadOffersData() {
      this.$Progress.start();
      let payload = {
        pso: this.projectId,
      };
      axios({
        url:
          "https://vue-api-backend.herokuapp.com/api/project/project-show-offers",
        method: "post",
        data: payload,
      }).then((response) => {
        this.projectOffers = response.data;
        this.$Progress.finish();

        var i;
        let total = 0;
        let results = 0;
        for (i = 0; i < response.data.length; i++) {
          total += response.data[i].coast;
        }

        results = total / response.data.length;
        this.projectOffersAvg = Math.round(results);
      });
    },
    fetchFullPath() {
      var path = this.$route.fullPath;
      var websiteUrl = "worker.netlify.app";
      this.projectFullPath = websiteUrl + path;
    },
    gotToSignup: function () {
      this.$router.push("/register");
    },
    gotToLogin: function () {
      this.$router.push("/login");
    },
    addOffer() {
      this.$Progress.start();
      axios
        .post(
          "https://vue-api-backend.herokuapp.com/api/project/create-offer",
          {
            token: this.retriveToken,
            timeline: this.timeline,
            coast: this.coast,
            profit: this.profit,
            desc: this.desc,
            project_id: this.projectId,
            user_id: this.user.id,
          }
        )
        .then((res) => {
          console.log(res.data);
          this.sucessMessageOpen();
          this.$Progress.finish();
                      window.location.reload()

        })
        .catch((err) => {
          console.log(err);
          this.errorMessageOpen();
        });
    },
    errorMessageOpen() {
      this.$toast.open({
        message: " There was error during add offer process",
        type: "error",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    sucessMessageOpen() {
      this.$toast.open({
        message: "offer add success",
        type: "success",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
  },
  watch: {
    coast: function (v) {
      var myNumber = v;
      if (v == 0 || v == null) {
        this.profit = 0;
      } else if (v >= 1 && v <= 500) {
        let percentToGet = 20;
        let percentInDecimal = percentToGet / 100;
        let percent = percentInDecimal * myNumber;

        let result = v - percent;
        this.profit = Math.round(result);
      } else if (v > 500 && v <= 5000) {
        let percentToGet = 15;
        let percentInDecimal = percentToGet / 100;
        let percent = percentInDecimal * myNumber;

        let result = v - percent;
        this.profit = Math.round(result);
      } else if (v > 5000) {
        let percentToGet = 7;
        let percentInDecimal = percentToGet / 100;
        let percent = percentInDecimal * myNumber;

        let result = v - percent;
        this.profit = Math.round(result);
      }
    },
  },
  mounted() {
    this.fetchProjectId();
    this.loadProjectData();
    this.loadOffersData();
    this.fetchFullPath();
  },
};
</script>
