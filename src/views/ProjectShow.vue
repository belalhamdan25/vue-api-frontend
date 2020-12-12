<template>
  <div>
    <div class="container-fluid mb-4">
      <div class="row bg-white">
        <div class="container">
          <div class="row padding-25 bg-white">
            <div
              class="col-lg-10 col-md-9 col-sm-12 d-flex justify-content-start align-items-center "
              v-for="projectValue in projectValues"
              :key="projectValue.id"
            >
              <div class="image-user mr-4">
                <img
                  v-if="projectValue.user_img != null"
                  :src="'https://vue-api-backend.herokuapp.com/users_images/'+projectValue.user_img"
                  class="rounded-circle hw-70-c"
                />
                <div class=" rounded-circle hw-70-c letter-profile-img " v-else>
                  <span style="color:white;font-size:25px">{{
                    projectValue.user_name.charAt(0).toUpperCase()
                  }}</span>
                </div>
              </div>

              <div
                class="d-flex flex-column justify-content-center align-items-start "
              >
                <div class="portfolio-title">
                  <h5 class="heading-color">
                    {{ projectValue.title }}
                  </h5>
                </div>
                <div class="portfolio-author">
                  <a href="#">
                    <small class="primary-color">
                      <i class="fas fa-user "></i>
                      {{ projectValue.user_name }}
                    </small>
                  </a>
                </div>
                <div class="portfolio-date">
                  <small class="text-secondary">
                    <i class="far fa-clock"></i>
                    {{ projectValue.created_at | moment("from", "now") }}
                  </small>
                </div>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 col-sm-12 p-4 d-flex justify-content-center align-items-center justify-content-md-end"
            >
              <a href="#addOffers"  class="btn btn-hire">
                <i class="fas fa-briefcase"></i> Bid Now
              </a>
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
            <div class="col-12  mb-2  p-4 radios-5 bg-white ">
              <h6>Project Details</h6>
              <hr />
              <div
                class="port-view d-flex flex-column justify-content-center align-items-center "
              >
                <p>
                  {{ projectValue.desc }}
                </p>
              </div>
            </div>
            <div class="col-12 mb-2 radios-5  p-4 bg-white ">
              <div class="port-det ">
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
                  >
                    {{ projectA.name }}
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 mb-2 radios-5  p-4 bg-white ">
              <div class="port-det ">
                <h6>Skills Required</h6>
                <hr />

                <a
                  href="#"
                  class="label-tag"
                  v-for="projectS in projectValue.skills"
                  :key="projectS.id"
                  ><i class="fas fa-tag"></i> {{ projectS.name }}
                </a>
              </div>
            </div>
                        <div class="col-12 mb-2 radios-5  p-4 bg-white " id="addOffers">
              <div v-if="LoggedInCheck" class="port-det ">
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
                            <span
                              class="input-group-text"
                              id="profit"
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
                        <a href="#"><small>After deducting the commission</small></a>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="description">Description</label>
                      <textarea class="form-control" id="description" rows="6"></textarea>
                    </div>
                    <button class="btn btn-hire" type="submit">
                      Bid
                    </button>
                  </form>
                </div>
              </div>
              <div v-else class="port-det">
                <h6>Add Offer</h6>
                <hr />
                <div class="add-offer-false text-center">
                <p>login first if you want to add deals</p>
                    <button class="btn btn-hire mr-2" type="button" @click="gotToSignup()">
                      Register
                    </button>
                  <button class="btn btn-hire-borderd" type="button" @click="gotToLogin()">
                      Login
                    </button>
                </div>
              </div>


            </div>

            <div class="col-12 mb-4  radios-5  p-4 bg-white ">
              <div class="port-det ">
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
                        :src="'https://vue-api-backend.herokuapp.com/users_images/'+projectOffer.user.user_img"
                        class="rounded-circle hw-45-c"
                      />
                      <div
                        class=" rounded-circle hw-45-c letter-profile-img "
                        v-else
                      >
                        <span style="color:white;font-size:25px">{{
                          projectOffer.user.first_name.charAt(0).toUpperCase()
                        }}</span>
                      </div>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center align-items-start"
                    >
                      <h6 class="primary-color">
                        {{ projectOffer.user.first_name }}
                        {{ projectOffer.user.last_name }}
                      </h6>
                      <small class="text-secondary">
                        <i class="far fa-clock"></i>
                        {{ projectOffer.created_at | moment("from", "now") }}
                      </small>
                    </div>
                  </div>
                  <p class="px-2">{{ projectOffer.desc }}</p>

                  <div class="hr-offers mt-4 mb-4"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 ">
          <div class="row">
            <div class="col-12 mb-2 radios-5 bg-white p-4 ">
              <div class="skills ">
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
                    <a href="#" class="fa fa-facebook "></a>
                  </ShareNetwork>
                  <ShareNetwork
                    network="twitter"
                    :url="projectFullPath"
                    :title="projectValue.title"
                    :description="projectValue.desc"
                  >
                    <a href="#" class="fa fa-twitter "></a>
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
}
.radios-5 {
  border-radius: 5px;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      projectId: "",
      projectPath: "",
      projectFullPath: "",
      projectValues: [],
      projectOffers: [],
      projectOffersAvg: null,
      days:null,
      coast:null,
      profit:0,
      bidDesc:""
    };
  },
    computed: {
    LoggedInCheck() {
      return this.$store.getters.get_loggedIn;
    },
  },
  methods: {
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
        .then(response => {
          this.projectValues = response.data;
          //   console.log(response.data.data);
        });
    },
    loadOffersData() {
      this.$Progress.start();
      let payload = {
        pso: this.projectId
      };
      axios({
        url:
          "https://vue-api-backend.herokuapp.com/api/project/project-show-offers",
        method: "post",
        data: payload
      }).then(response => {
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
      var websiteUrl = "website-url";
      this.projectFullPath = websiteUrl + path;
    },
    gotToSignup: function() {
      this.$router.push("/register");
    },
        gotToLogin: function() {
      this.$router.push("/login");
    },
  },
  watch:{
    coast:function(v){
      var myNumber = v;
      if(v==0 || v == null){
        this.profit = 0;
      }
      else if(v>=1 && v<=500){
        let percentToGet = 20;
        let percentInDecimal = percentToGet / 100;
        let percent = percentInDecimal * myNumber;

        let result= v - percent;
        this.profit = Math.round(result);
      }else if(v>500 && v<=5000){
        let percentToGet = 15;
        let percentInDecimal = percentToGet / 100;
        let percent = percentInDecimal * myNumber;

        let result= v - percent;
        this.profit = Math.round(result);
      }else if(v>5000){
        let percentToGet = 7;
        let percentInDecimal = percentToGet / 100;
        let percent = percentInDecimal * myNumber;

        let result= v - percent;
        this.profit = Math.round(result);
      }

    }
  },
  mounted() {
    this.fetchProjectId();
    this.loadProjectData();
    this.loadOffersData();
    this.fetchFullPath();
  }
};
</script>
