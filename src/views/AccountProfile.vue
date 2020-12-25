<template>
  <div class="account-profile">
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
            <router-link
              class="p-2 side-item active-side-nav"
              to="/account-profile"
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
              ><i class='bx bx-dollar-circle'></i> My Offers</router-link
            >
                                    <router-link class="p-2 side-item" to="/my-purchases"
              ><i class='bx bx-cart-alt'></i> My Purchases</router-link
            >
            <button class="p-2 side-item" @click.prevent="performLogout">
              <i class="bx bx-log-out"></i> Log out
            </button>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="row mb-4">
            <div class="col-12 radios-5 bg-white p-4">
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-personal"
                  role="tabpanel"
                  aria-labelledby="pills-personal-tab"
                >
                  <div class="personal-data">
                    <h6>My account</h6>
                    <hr />

                    <div
                      class="d-flex justify-content-center align-items-center p-4"
                    >
                      <div class="user-img">
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
                      </div>

                      <form  enctype="multipart/form-data">
                        <div class="upload-btn-wrapper ml-4">
                          <!-- <button class="btn">Upload photo</button> -->
                          <input
                            @change="onFileChange"
                            type="file"
                            accept="image/*"
                            id="image"
                            name="image"
                          />
                        </div>
                        <!-- <input
                          type="submit"
                          class="btn btn-primary"
                          value="Save"
                        /> -->
                      </form>
                    </div>

                    <div
                      class="d-flex flex-column justify-content-center align-items-center"
                    >
                      <form action="#">
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="first_name">First Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="first_name"
                              name="first_name"
                              v-model="user.first_name"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="last_name">Last Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="last_name"
                              name="last_name"
                              v-model="user.last_name"
                            />
                          </div>
                        </div>

                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="email">Email address</label>
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              name="email"
                              v-model="user.email"
                              readonly
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="phone_number">Phone Number</label>
                            <input
                              type="tel"
                              class="form-control"
                              id="phone_number"
                              name="phone_number"
                              v-model="user.phone_number"
                            />
                          </div>
                        </div>

                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="location">Country</label>
                            <select
                              id="location"
                              name="location"
                              class="form-control"
                              v-model="user.location"
                            >
                              <option disabled selected>
                                {{ user.location }}
                              </option>
                              <option value="Afghanistan">Afghanistan</option>
                              <option value="Åland Islands">
                                Åland Islands
                              </option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">
                                American Samoa
                              </option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                              <option value="Anguilla">Anguilla</option>
                              <option value="Antarctica">Antarctica</option>
                              <option value="Antigua and Barbuda">
                                Antigua and Barbuda
                              </option>
                              <option value="Argentina">Argentina</option>
                              <option value="Armenia">Armenia</option>
                              <option value="Aruba">Aruba</option>
                              <option value="Australia">Australia</option>
                              <option value="Austria">Austria</option>
                              <option value="Azerbaijan">Azerbaijan</option>
                              <option value="Bahamas">Bahamas</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Barbados">Barbados</option>
                              <option value="Belarus">Belarus</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Belize">Belize</option>
                              <option value="Benin">Benin</option>
                              <option value="Bermuda">Bermuda</option>
                              <option value="Bhutan">Bhutan</option>
                              <option value="Bolivia">Bolivia</option>
                              <option value="Bosnia and Herzegovina">
                                Bosnia and Herzegovina
                              </option>
                              <option value="Botswana">Botswana</option>
                              <option value="Bouvet Island">
                                Bouvet Island
                              </option>
                              <option value="Brazil">Brazil</option>
                              <option value="British Indian Ocean Territory">
                                British Indian Ocean Territory
                              </option>
                              <option value="Brunei Darussalam">
                                Brunei Darussalam
                              </option>
                              <option value="Bulgaria">Bulgaria</option>
                              <option value="Burkina Faso">Burkina Faso</option>
                              <option value="Burundi">Burundi</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Cameroon">Cameroon</option>
                              <option value="Canada">Canada</option>
                              <option value="Cape Verde">Cape Verde</option>
                              <option value="Cayman Islands">
                                Cayman Islands
                              </option>
                              <option value="Central African Republic">
                                Central African Republic
                              </option>
                              <option value="Chad">Chad</option>
                              <option value="Chile">Chile</option>
                              <option value="China">China</option>
                              <option value="Christmas Island">
                                Christmas Island
                              </option>
                              <option value="Cocos (Keeling) Islands">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="Colombia">Colombia</option>
                              <option value="Comoros">Comoros</option>
                              <option value="Congo">Congo</option>
                              <option
                                value="Congo, The Democratic Republic of The"
                              >
                                Congo, The Democratic Republic of The
                              </option>
                              <option value="Cook Islands">Cook Islands</option>
                              <option value="Costa Rica">Costa Rica</option>
                              <option value="Cote D'ivoire">
                                Cote D'ivoire
                              </option>
                              <option value="Croatia">Croatia</option>
                              <option value="Cuba">Cuba</option>
                              <option value="Cyprus">Cyprus</option>
                              <option value="Czech Republic">
                                Czech Republic
                              </option>
                              <option value="Denmark">Denmark</option>
                              <option value="Djibouti">Djibouti</option>
                              <option value="Dominica">Dominica</option>
                              <option value="Dominican Republic">
                                Dominican Republic
                              </option>
                              <option value="Ecuador">Ecuador</option>
                              <option value="Egypt">Egypt</option>
                              <option value="El Salvador">El Salvador</option>
                              <option value="Equatorial Guinea">
                                Equatorial Guinea
                              </option>
                              <option value="Eritrea">Eritrea</option>
                              <option value="Estonia">Estonia</option>
                              <option value="Ethiopia">Ethiopia</option>
                              <option value="Falkland Islands (Malvinas)">
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="Faroe Islands">
                                Faroe Islands
                              </option>
                              <option value="Fiji">Fiji</option>
                              <option value="Finland">Finland</option>
                              <option value="France">France</option>
                              <option value="French Guiana">
                                French Guiana
                              </option>
                              <option value="French Polynesia">
                                French Polynesia
                              </option>
                              <option value="French Southern Territories">
                                French Southern Territories
                              </option>
                              <option value="Gabon">Gabon</option>
                              <option value="Gambia">Gambia</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Germany">Germany</option>
                              <option value="Ghana">Ghana</option>
                              <option value="Gibraltar">Gibraltar</option>
                              <option value="Greece">Greece</option>
                              <option value="Greenland">Greenland</option>
                              <option value="Grenada">Grenada</option>
                              <option value="Guadeloupe">Guadeloupe</option>
                              <option value="Guam">Guam</option>
                              <option value="Guatemala">Guatemala</option>
                              <option value="Guernsey">Guernsey</option>
                              <option value="Guinea">Guinea</option>
                              <option value="Guinea-bissau">
                                Guinea-bissau
                              </option>
                              <option value="Guyana">Guyana</option>
                              <option value="Haiti">Haiti</option>
                              <option value="Heard Island and Mcdonald Islands">
                                Heard Island and Mcdonald Islands
                              </option>
                              <option value="Holy See (Vatican City State)">
                                Holy See (Vatican City State)
                              </option>
                              <option value="Honduras">Honduras</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="Hungary">Hungary</option>
                              <option value="Iceland">Iceland</option>
                              <option value="India">India</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Iran, Islamic Republic of">
                                Iran, Islamic Republic of
                              </option>
                              <option value="Iraq">Iraq</option>
                              <option value="Ireland">Ireland</option>
                              <option value="Isle of Man">Isle of Man</option>
                              <option value="Israel">Israel</option>
                              <option value="Italy">Italy</option>
                              <option value="Jamaica">Jamaica</option>
                              <option value="Japan">Japan</option>
                              <option value="Jersey">Jersey</option>
                              <option value="Jordan">Jordan</option>
                              <option value="Kazakhstan">Kazakhstan</option>
                              <option value="Kenya">Kenya</option>
                              <option value="Kiribati">Kiribati</option>
                              <option
                                value="Korea, Democratic People's Republic of"
                              >
                                Korea, Democratic People's Republic of
                              </option>
                              <option value="Korea, Republic of">
                                Korea, Republic of
                              </option>
                              <option value="Kuwait">Kuwait</option>
                              <option value="Kyrgyzstan">Kyrgyzstan</option>
                              <option value="Lao People's Democratic Republic">
                                Lao People's Democratic Republic
                              </option>
                              <option value="Latvia">Latvia</option>
                              <option value="Lebanon">Lebanon</option>
                              <option value="Lesotho">Lesotho</option>
                              <option value="Liberia">Liberia</option>
                              <option value="Libyan Arab Jamahiriya">
                                Libyan Arab Jamahiriya
                              </option>
                              <option value="Liechtenstein">
                                Liechtenstein
                              </option>
                              <option value="Lithuania">Lithuania</option>
                              <option value="Luxembourg">Luxembourg</option>
                              <option value="Macao">Macao</option>
                              <option
                                value="Macedonia, The Former Yugoslav Republic of"
                              >
                                Macedonia, The Former Yugoslav Republic of
                              </option>
                              <option value="Madagascar">Madagascar</option>
                              <option value="Malawi">Malawi</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Maldives">Maldives</option>
                              <option value="Mali">Mali</option>
                              <option value="Malta">Malta</option>
                              <option value="Marshall Islands">
                                Marshall Islands
                              </option>
                              <option value="Martinique">Martinique</option>
                              <option value="Mauritania">Mauritania</option>
                              <option value="Mauritius">Mauritius</option>
                              <option value="Mayotte">Mayotte</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Micronesia, Federated States of">
                                Micronesia, Federated States of
                              </option>
                              <option value="Moldova, Republic of">
                                Moldova, Republic of
                              </option>
                              <option value="Monaco">Monaco</option>
                              <option value="Mongolia">Mongolia</option>
                              <option value="Montenegro">Montenegro</option>
                              <option value="Montserrat">Montserrat</option>
                              <option value="Morocco">Morocco</option>
                              <option value="Mozambique">Mozambique</option>
                              <option value="Myanmar">Myanmar</option>
                              <option value="Namibia">Namibia</option>
                              <option value="Nauru">Nauru</option>
                              <option value="Nepal">Nepal</option>
                              <option value="Netherlands">Netherlands</option>
                              <option value="Netherlands Antilles">
                                Netherlands Antilles
                              </option>
                              <option value="New Caledonia">
                                New Caledonia
                              </option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Nicaragua">Nicaragua</option>
                              <option value="Niger">Niger</option>
                              <option value="Nigeria">Nigeria</option>
                              <option value="Niue">Niue</option>
                              <option value="Norfolk Island">
                                Norfolk Island
                              </option>
                              <option value="Northern Mariana Islands">
                                Northern Mariana Islands
                              </option>
                              <option value="Norway">Norway</option>
                              <option value="Oman">Oman</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="Palau">Palau</option>
                              <option value="Palestinian Territory, Occupied">
                                Palestinian Territory, Occupied
                              </option>
                              <option value="Panama">Panama</option>
                              <option value="Papua New Guinea">
                                Papua New Guinea
                              </option>
                              <option value="Paraguay">Paraguay</option>
                              <option value="Peru">Peru</option>
                              <option value="Philippines">Philippines</option>
                              <option value="Pitcairn">Pitcairn</option>
                              <option value="Poland">Poland</option>
                              <option value="Portugal">Portugal</option>
                              <option value="Puerto Rico">Puerto Rico</option>
                              <option value="Qatar">Qatar</option>
                              <option value="Reunion">Reunion</option>
                              <option value="Romania">Romania</option>
                              <option value="Russian Federation">
                                Russian Federation
                              </option>
                              <option value="Rwanda">Rwanda</option>
                              <option value="Saint Helena">Saint Helena</option>
                              <option value="Saint Kitts and Nevis">
                                Saint Kitts and Nevis
                              </option>
                              <option value="Saint Lucia">Saint Lucia</option>
                              <option value="Saint Pierre and Miquelon">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="Saint Vincent and The Grenadines">
                                Saint Vincent and The Grenadines
                              </option>
                              <option value="Samoa">Samoa</option>
                              <option value="San Marino">San Marino</option>
                              <option value="Sao Tome and Principe">
                                Sao Tome and Principe
                              </option>
                              <option value="Saudi Arabia">Saudi Arabia</option>
                              <option value="Senegal">Senegal</option>
                              <option value="Serbia">Serbia</option>
                              <option value="Seychelles">Seychelles</option>
                              <option value="Sierra Leone">Sierra Leone</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Slovakia">Slovakia</option>
                              <option value="Slovenia">Slovenia</option>
                              <option value="Solomon Islands">
                                Solomon Islands
                              </option>
                              <option value="Somalia">Somalia</option>
                              <option value="South Africa">South Africa</option>
                              <option
                                value="South Georgia and The South Sandwich Islands"
                              >
                                South Georgia and The South Sandwich Islands
                              </option>
                              <option value="Spain">Spain</option>
                              <option value="Sri Lanka">Sri Lanka</option>
                              <option value="Sudan">Sudan</option>
                              <option value="Suriname">Suriname</option>
                              <option value="Svalbard and Jan Mayen">
                                Svalbard and Jan Mayen
                              </option>
                              <option value="Swaziland">Swaziland</option>
                              <option value="Sweden">Sweden</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="Syrian Arab Republic">
                                Syrian Arab Republic
                              </option>
                              <option value="Taiwan, Province of China">
                                Taiwan, Province of China
                              </option>
                              <option value="Tajikistan">Tajikistan</option>
                              <option value="Tanzania, United Republic of">
                                Tanzania, United Republic of
                              </option>
                              <option value="Thailand">Thailand</option>
                              <option value="Timor-leste">Timor-leste</option>
                              <option value="Togo">Togo</option>
                              <option value="Tokelau">Tokelau</option>
                              <option value="Tonga">Tonga</option>
                              <option value="Trinidad and Tobago">
                                Trinidad and Tobago
                              </option>
                              <option value="Tunisia">Tunisia</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Turkmenistan">Turkmenistan</option>
                              <option value="Turks and Caicos Islands">
                                Turks and Caicos Islands
                              </option>
                              <option value="Tuvalu">Tuvalu</option>
                              <option value="Uganda">Uganda</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option value="United Kingdom">
                                United Kingdom
                              </option>
                              <option value="United States">
                                United States
                              </option>
                              <option
                                value="United States Minor Outlying Islands"
                              >
                                United States Minor Outlying Islands
                              </option>
                              <option value="Uruguay">Uruguay</option>
                              <option value="Uzbekistan">Uzbekistan</option>
                              <option value="Vanuatu">Vanuatu</option>
                              <option value="Venezuela">Venezuela</option>
                              <option value="Viet Nam">Viet Nam</option>
                              <option value="Virgin Islands, British">
                                Virgin Islands, British
                              </option>
                              <option value="Virgin Islands, U.S.">
                                Virgin Islands, U.S.
                              </option>
                              <option value="Wallis and Futuna">
                                Wallis and Futuna
                              </option>
                              <option value="Western Sahara">
                                Western Sahara
                              </option>
                              <option value="Yemen">Yemen</option>
                              <option value="Zambia">Zambia</option>
                              <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                          </div>
                          <div class="form-group col-md-6">
                            <label for="location">Gender</label>
                            <select
                              id="location"
                              name="location"
                              class="form-control"
                              v-model="user.gender"
                            >
                              <option disabled selected>choose</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>

                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label class="">Categories</label>
                            <select class="form-control" v-model="user.category_id">
                              <option
                                v-for="categoriesValue in categoriesValues"
                                :key="categoriesValue.name"
                                :value="categoriesValue.id"
                              >
                                {{ categoriesValue.desc }}
                              </option>
                            </select>
                          </div>
                          <div class="form-group col-md-6">
                            <label class="iconC2">Skills</label>

                            <multiselect
                              v-model="value"
                              open-direction="bottom"
                              tag-placeholder="Skills"
                              :hide-selected="false"
                              placeholder="Choose Skills"
                              label="name"
                              track-by="name"
                              :close-on-select="false"
                              :options="options"
                              :multiple="true"
                              :taggable="true"
                              :show-no-results="true"
                              @input="dispatchAction()"
                            ></multiselect>
                          </div>
                        </div>

                        <div class="form-group mb-4">
                          <label for="exampleFormControlTextarea1"
                            >About</label
                          >
                          <textarea
                            v-model="user.about"
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="7"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          class="btn btn-hire"
                          @click.prevent="updateUserInfo"
                        >
                          Update
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 radios-5 bg-white p-4">
              <div class="password-data">
                <h6>Change Password</h6>
                <hr />

                <form>
                  <div class="form-group">
                    <label for="current-password">Current Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="current-password"
                      placeholder="Current Password"
                      v-model="Cpassword"
                    />
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="New-Password">New Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="New-Password"
                        placeholder="New Password"
                        v-model="Npassword"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="Confirm-New-Password"
                        >Confirm New Password</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="Confirm-New-Password"
                        placeholder="Confirm New Password"
                        v-model="CNpassword"
                      />
                    </div>
                  </div>

                  <button type="submit" @click.prevent="updatePassword" class="btn btn-primary">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      name: "",
      image: "",
      success: "",
      img_name: "",
      value: [],
      options: [],
      cquery: [],
      categoriesValues: [],
      tagId: [],
      Cpassword: "",
      Npassword: "",
      CNpassword: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
    retriveToken() {
      return this.$store.getters.get_token;
    },
      userSkills() {
      return this.$store.getters.get_userSkills;
    },

  },
  methods: {
    onFileChange(e) {
      console.log(e.target.files[0]);
      this.image = e.target.files[0];
      this.submitForm(e);
    },
    submitForm(e) {
      e.preventDefault();
      let currentObj = this;
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer" + " " + this.retriveToken,
        },
      };
      let formData = new FormData();
      formData.append("image", this.image);
      axios
        .post(
          "https://vue-api-backend.herokuapp.com/api/auth/store-user-image",
          formData,
          config
        )
        .then(function (response) {
          currentObj.success = response.data.success;
          console.log(response.data.img_name);
          this.img_name = response.data.img_name;
          this.updateUserInfo();
        })
        .catch(function (error) {
          currentObj.output = error;
        });
    },

    updateUserInfo() {
      this.$Progress.start();
      this.$store
        .dispatch("updateUserInfoAction", {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          phone_number: this.user.phone_number,
          email: this.user.email,
          location: this.user.location,
          gender: this.user.gender,
          user_img: this.img_name,
          about: this.user.about,
          category_id: this.user.category_id,
          tags_id: this.userSkills,
        })
        .then((res) => {
          this.$Progress.finish();
          console.log(res.data);
          console.log(this.user.user_img);
          this.sucessMessageOpen();
        })
        .catch((err) => {
          this.$Progress.fail();
          this.errorMessageOpen();
          console.log(err.message);
        });
    },
    dispatchAction() {
      this.tagId = [];
      var i;
      var arrayid = [];
      for (i = 0; i < this.value.length; i++) {
        arrayid = this.value[i];
        // console.log(arrayid.id)
        this.tagId.push(arrayid.id);
      }
        this.$store.commit("SET_userSkills", this.tagId);

      // console.log(this.tagId);
    },

    errorMessageOpen() {
      this.$toast.open({
        message: " There was error during update process",
        type: "error",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    sucessMessageOpen() {
      this.$toast.open({
        message: "Updated",
        type: "success",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    loadTagsNames() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios/skills-filter-id-names"
        )
        .then((response) => {
          this.options = response.data;
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
    loadUserData() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/user/user/" + this.user.id
        )
        .then((response) => {
          this.value = response.data.data.skills;
          // console.log(response.data.data.skills);
        });
    },
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
    updatePassword(){
             this.$Progress.start();
        axios.post('https://vue-api-backend.herokuapp.com/api/auth/update-password',{
          Cpassword:this.Cpassword,
          Npassword:this.Npassword,
          CNpassword:this.CNpassword,
          token:this.retriveToken,
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
    }
    // token(){
    //  console.log(this.retriveToken);
    //  console.log(this.user.user_img);

    // }
  },
  mounted() {
    // this.token();
    this.loadTagsNames();
    this.loadcategoriesValues();
    this.loadUserData();
  },
};
</script>
