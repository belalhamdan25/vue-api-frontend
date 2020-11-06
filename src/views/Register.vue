<template>
  <div class="register">
    <div class="container">
      <div class="row py-4">
        <div class="col-md-6 col-sm-12">
          <div class="heading mb-5">
            <h4 style="color:#41b883">
              Register
            </h4>
            <h6>Kindly fill your details to proceed</h6>
          </div>
          <form action="#">
            <div class="con-form">
              <vs-input
                v-model="first_name"
                type="text"
                color="#41b883"
                label-placeholder="First Name"
              >
              </vs-input>

              <vs-input
                color="#41b883"
                type="text"
                v-model="last_name"
                label-placeholder="Last Name"
              >
              </vs-input>

              <vs-input
                color="#41b883"
                type="email"
                v-model="email"
                label-placeholder="Email"
              >
              </vs-input>

              <vs-input
                color="#41b883"
                type="tel"
                v-model="phone_number"
                label-placeholder="Phone Number"
              >
              </vs-input>

              <vs-input
                color="#41b883"
                type="password"
                v-model="password"
                label-placeholder="Password"
                :progress="getProgress"
              >
                <template v-if="getProgress >= 100" #message-success>
                  Secure password
                </template>
              </vs-input>

              <vs-select
                filter
                color="#41b883"
                label-placeholder="Location"
                v-model="location"
              >
                <vs-option
                  v-for="contrey in contries"
                  :key="contrey.name"
                  :label="contrey.name"
                  :value="contrey.name"
                >
                  {{ contrey.name }}
                </vs-option>
              </vs-select>

              <div class="mt-20">
                <vs-select
                  filter
                  color="#41b883"
                  label-placeholder="Category"
                  v-model="category_id"
                >
                  <vs-option label="Design and works" value="1">
                    Design and works
                  </vs-option>

                  <vs-option label="Translation and languages" value="2">
                    Translation and languages
                  </vs-option>

                  <vs-option label="Programming and development" value="3">
                    Programming and development
                  </vs-option>

                  <vs-option label="Writing and editing" value="4">
                    Writing and editing
                  </vs-option>

                  <vs-option label="Sales and marketing" value="5">
                    Sales and marketing
                  </vs-option>

                  <vs-option label="Consulting and training" value="6">
                    Consulting and training
                  </vs-option>
                </vs-select>
              </div>

              <div class="mt-20">
                <vs-select
                  filter
                  color="#41b883"
                  label-placeholder="User Type"
                  v-model="role_name"
                >
                  <vs-option label="Freelancer" value="freelancer">
                    Freelancer
                  </vs-option>
                  <vs-option label="Client" value="client">
                    Client
                  </vs-option>
                </vs-select>
              </div>

              <div class="mt-20">
                <vs-button
                  block
                  color="rgb(65, 184, 131)"
                  @click.prevent="performRegister"
                >
                  Register
                </vs-button>
              </div>
            </div>

            <!-- <div class="form-group">
        <label for="first_name">First Name</label>
        <input
          type="text"
          class="form-control"
          id="first_name"
          name="first_name"
          v-model="first_name"
        />
      </div> -->

            <!-- <div class="form-group">
        <label for="last_name">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="last_name"
          name="last_name"
          v-model="last_name"
        />
      </div> -->
            <!-- <div class="form-group">
        <label for="phone_number">Phone Number</label>
        <input
          type="tel"
          class="form-control"
          id="phone_number"
          name="phone_number"
          v-model="phone_number"
        />
      </div> -->
            <!-- <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          v-model="email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div> -->
            <!-- <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          v-model="password"
        />
      </div> -->

            <!-- <div class="form-group">
        <label for="location">Location</label>
        <input
          type="text"
          class="form-control"
          id="location"
          name="location"
          v-model="location"
        />
      </div> -->

            <!-- <div class="form-group">
        <label for="role_name">Category</label>
        <select
          class="form-control"
          v-model="category_id"
        >
          <option           v-for="categoriesValue in categoriesValues"
              :key="categoriesValue.name" :value="categoriesValue.id">{{categoriesValue.desc}}</option>

        </select>
      </div> -->

            <!-- <div class="form-group">
        <label for="role_name">User Type</label>
        <select
          class="form-control"
          name="role_name"
          id="role_name"
          v-model="role_name"
        >
          <option  v-for="role in roles"
              :key="role" :id="role" :value="role">{{role}}</option>

        </select>
      </div> -->

            <!-- <button
              type="submit"
              class="btn btn-primary"
              @click.prevent="performRegister"
            >
              Register
            </button> -->
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

              Every problem is a gift
              <br />
              without problems
              <br />
              we would not grow.
              <i class="bx bxs-quote-right" style="color:#41b883"></i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.border-rad {
  border-radius: 12px;
}
.mt-20 {
  margin-top: 40px;
}
.con-form .vs-select-content {
  max-width: 100%;
}

.con-form .vs-select--state-null .vs-select__input {
  background: #fff;
}
.con-form .vs-select--state-null {
  margin: 20px 0px;
}
</style>

<script>
// import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
      role_name: "",
      error: "",
      // categoriesValues: [],
      category_id: "",
      location: "",
      rate: 0,
      // roles: [],
      contries: [
        { name: "Afghanistan", code: "AF" },
        { name: "Åland Islands", code: "AX" },
        { name: "Albania", code: "AL" },
        { name: "Algeria", code: "DZ" },
        { name: "American Samoa", code: "AS" },
        { name: "AndorrA", code: "AD" },
        { name: "Angola", code: "AO" },
        { name: "Anguilla", code: "AI" },
        { name: "Antarctica", code: "AQ" },
        { name: "Antigua and Barbuda", code: "AG" },
        { name: "Argentina", code: "AR" },
        { name: "Armenia", code: "AM" },
        { name: "Aruba", code: "AW" },
        { name: "Australia", code: "AU" },
        { name: "Austria", code: "AT" },
        { name: "Azerbaijan", code: "AZ" },
        { name: "Bahamas", code: "BS" },
        { name: "Bahrain", code: "BH" },
        { name: "Bangladesh", code: "BD" },
        { name: "Barbados", code: "BB" },
        { name: "Belarus", code: "BY" },
        { name: "Belgium", code: "BE" },
        { name: "Belize", code: "BZ" },
        { name: "Benin", code: "BJ" },
        { name: "Bermuda", code: "BM" },
        { name: "Bhutan", code: "BT" },
        { name: "Bolivia", code: "BO" },
        { name: "Bosnia and Herzegovina", code: "BA" },
        { name: "Botswana", code: "BW" },
        { name: "Bouvet Island", code: "BV" },
        { name: "Brazil", code: "BR" },
        { name: "British Indian Ocean Territory", code: "IO" },
        { name: "Brunei Darussalam", code: "BN" },
        { name: "Bulgaria", code: "BG" },
        { name: "Burkina Faso", code: "BF" },
        { name: "Burundi", code: "BI" },
        { name: "Cambodia", code: "KH" },
        { name: "Cameroon", code: "CM" },
        { name: "Canada", code: "CA" },
        { name: "Cape Verde", code: "CV" },
        { name: "Cayman Islands", code: "KY" },
        { name: "Central African Republic", code: "CF" },
        { name: "Chad", code: "TD" },
        { name: "Chile", code: "CL" },
        { name: "China", code: "CN" },
        { name: "Christmas Island", code: "CX" },
        { name: "Cocos (Keeling) Islands", code: "CC" },
        { name: "Colombia", code: "CO" },
        { name: "Comoros", code: "KM" },
        { name: "Congo", code: "CG" },
        { name: "Congo, The Democratic Republic of the", code: "CD" },
        { name: "Cook Islands", code: "CK" },
        { name: "Costa Rica", code: "CR" },
        { name: "Cote D'Ivoire", code: "CI" },
        { name: "Croatia", code: "HR" },
        { name: "Cuba", code: "CU" },
        { name: "Cyprus", code: "CY" },
        { name: "Czech Republic", code: "CZ" },
        { name: "Denmark", code: "DK" },
        { name: "Djibouti", code: "DJ" },
        { name: "Dominica", code: "DM" },
        { name: "Dominican Republic", code: "DO" },
        { name: "Ecuador", code: "EC" },
        { name: "Egypt", code: "EG" },
        { name: "El Salvador", code: "SV" },
        { name: "Equatorial Guinea", code: "GQ" },
        { name: "Eritrea", code: "ER" },
        { name: "Estonia", code: "EE" },
        { name: "Ethiopia", code: "ET" },
        { name: "Falkland Islands (Malvinas)", code: "FK" },
        { name: "Faroe Islands", code: "FO" },
        { name: "Fiji", code: "FJ" },
        { name: "Finland", code: "FI" },
        { name: "France", code: "FR" },
        { name: "French Guiana", code: "GF" },
        { name: "French Polynesia", code: "PF" },
        { name: "French Southern Territories", code: "TF" },
        { name: "Gabon", code: "GA" },
        { name: "Gambia", code: "GM" },
        { name: "Georgia", code: "GE" },
        { name: "Germany", code: "DE" },
        { name: "Ghana", code: "GH" },
        { name: "Gibraltar", code: "GI" },
        { name: "Greece", code: "GR" },
        { name: "Greenland", code: "GL" },
        { name: "Grenada", code: "GD" },
        { name: "Guadeloupe", code: "GP" },
        { name: "Guam", code: "GU" },
        { name: "Guatemala", code: "GT" },
        { name: "Guernsey", code: "GG" },
        { name: "Guinea", code: "GN" },
        { name: "Guinea-Bissau", code: "GW" },
        { name: "Guyana", code: "GY" },
        { name: "Haiti", code: "HT" },
        { name: "Heard Island and Mcdonald Islands", code: "HM" },
        { name: "Holy See (Vatican City State)", code: "VA" },
        { name: "Honduras", code: "HN" },
        { name: "Hong Kong", code: "HK" },
        { name: "Hungary", code: "HU" },
        { name: "Iceland", code: "IS" },
        { name: "India", code: "IN" },
        { name: "Indonesia", code: "ID" },
        { name: "Iran, Islamic Republic Of", code: "IR" },
        { name: "Iraq", code: "IQ" },
        { name: "Ireland", code: "IE" },
        { name: "Isle of Man", code: "IM" },
        { name: "Israel", code: "IL" },
        { name: "Italy", code: "IT" },
        { name: "Jamaica", code: "JM" },
        { name: "Japan", code: "JP" },
        { name: "Jersey", code: "JE" },
        { name: "Jordan", code: "JO" },
        { name: "Kazakhstan", code: "KZ" },
        { name: "Kenya", code: "KE" },
        { name: "Kiribati", code: "KI" },
        { name: "Korea, Democratic People'S Republic of", code: "KP" },
        { name: "Korea, Republic of", code: "KR" },
        { name: "Kuwait", code: "KW" },
        { name: "Kyrgyzstan", code: "KG" },
        { name: "Lao People'S Democratic Republic", code: "LA" },
        { name: "Latvia", code: "LV" },
        { name: "Lebanon", code: "LB" },
        { name: "Lesotho", code: "LS" },
        { name: "Liberia", code: "LR" },
        { name: "Libyan Arab Jamahiriya", code: "LY" },
        { name: "Liechtenstein", code: "LI" },
        { name: "Lithuania", code: "LT" },
        { name: "Luxembourg", code: "LU" },
        { name: "Macao", code: "MO" },
        { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
        { name: "Madagascar", code: "MG" },
        { name: "Malawi", code: "MW" },
        { name: "Malaysia", code: "MY" },
        { name: "Maldives", code: "MV" },
        { name: "Mali", code: "ML" },
        { name: "Malta", code: "MT" },
        { name: "Marshall Islands", code: "MH" },
        { name: "Martinique", code: "MQ" },
        { name: "Mauritania", code: "MR" },
        { name: "Mauritius", code: "MU" },
        { name: "Mayotte", code: "YT" },
        { name: "Mexico", code: "MX" },
        { name: "Micronesia, Federated States of", code: "FM" },
        { name: "Moldova, Republic of", code: "MD" },
        { name: "Monaco", code: "MC" },
        { name: "Mongolia", code: "MN" },
        { name: "Montserrat", code: "MS" },
        { name: "Morocco", code: "MA" },
        { name: "Mozambique", code: "MZ" },
        { name: "Myanmar", code: "MM" },
        { name: "Namibia", code: "NA" },
        { name: "Nauru", code: "NR" },
        { name: "Nepal", code: "NP" },
        { name: "Netherlands", code: "NL" },
        { name: "Netherlands Antilles", code: "AN" },
        { name: "New Caledonia", code: "NC" },
        { name: "New Zealand", code: "NZ" },
        { name: "Nicaragua", code: "NI" },
        { name: "Niger", code: "NE" },
        { name: "Nigeria", code: "NG" },
        { name: "Niue", code: "NU" },
        { name: "Norfolk Island", code: "NF" },
        { name: "Northern Mariana Islands", code: "MP" },
        { name: "Norway", code: "NO" },
        { name: "Oman", code: "OM" },
        { name: "Pakistan", code: "PK" },
        { name: "Palau", code: "PW" },
        { name: "Palestinian Territory, Occupied", code: "PS" },
        { name: "Panama", code: "PA" },
        { name: "Papua New Guinea", code: "PG" },
        { name: "Paraguay", code: "PY" },
        { name: "Peru", code: "PE" },
        { name: "Philippines", code: "PH" },
        { name: "Pitcairn", code: "PN" },
        { name: "Poland", code: "PL" },
        { name: "Portugal", code: "PT" },
        { name: "Puerto Rico", code: "PR" },
        { name: "Qatar", code: "QA" },
        { name: "Reunion", code: "RE" },
        { name: "Romania", code: "RO" },
        { name: "Russian Federation", code: "RU" },
        { name: "RWANDA", code: "RW" },
        { name: "Saint Helena", code: "SH" },
        { name: "Saint Kitts and Nevis", code: "KN" },
        { name: "Saint Lucia", code: "LC" },
        { name: "Saint Pierre and Miquelon", code: "PM" },
        { name: "Saint Vincent and the Grenadines", code: "VC" },
        { name: "Samoa", code: "WS" },
        { name: "San Marino", code: "SM" },
        { name: "Sao Tome and Principe", code: "ST" },
        { name: "Saudi Arabia", code: "SA" },
        { name: "Senegal", code: "SN" },
        { name: "Serbia and Montenegro", code: "CS" },
        { name: "Seychelles", code: "SC" },
        { name: "Sierra Leone", code: "SL" },
        { name: "Singapore", code: "SG" },
        { name: "Slovakia", code: "SK" },
        { name: "Slovenia", code: "SI" },
        { name: "Solomon Islands", code: "SB" },
        { name: "Somalia", code: "SO" },
        { name: "South Africa", code: "ZA" },
        { name: "South Georgia and the South Sandwich Islands", code: "GS" },
        { name: "Spain", code: "ES" },
        { name: "Sri Lanka", code: "LK" },
        { name: "Sudan", code: "SD" },
        { name: "Suriname", code: "SR" },
        { name: "Svalbard and Jan Mayen", code: "SJ" },
        { name: "Swaziland", code: "SZ" },
        { name: "Sweden", code: "SE" },
        { name: "Switzerland", code: "CH" },
        { name: "Syrian Arab Republic", code: "SY" },
        { name: "Taiwan, Province of China", code: "TW" },
        { name: "Tajikistan", code: "TJ" },
        { name: "Tanzania, United Republic of", code: "TZ" },
        { name: "Thailand", code: "TH" },
        { name: "Timor-Leste", code: "TL" },
        { name: "Togo", code: "TG" },
        { name: "Tokelau", code: "TK" },
        { name: "Tonga", code: "TO" },
        { name: "Trinidad and Tobago", code: "TT" },
        { name: "Tunisia", code: "TN" },
        { name: "Turkey", code: "TR" },
        { name: "Turkmenistan", code: "TM" },
        { name: "Turks and Caicos Islands", code: "TC" },
        { name: "Tuvalu", code: "TV" },
        { name: "Uganda", code: "UG" },
        { name: "Ukraine", code: "UA" },
        { name: "United Arab Emirates", code: "AE" },
        { name: "United Kingdom", code: "GB" },
        { name: "United States", code: "US" },
        { name: "United States Minor Outlying Islands", code: "UM" },
        { name: "Uruguay", code: "UY" },
        { name: "Uzbekistan", code: "UZ" },
        { name: "Vanuatu", code: "VU" },
        { name: "Venezuela", code: "VE" },
        { name: "Viet Nam", code: "VN" },
        { name: "Virgin Islands, British", code: "VG" },
        { name: "Virgin Islands, U.S.", code: "VI" },
        { name: "Wallis and Futuna", code: "WF" },
        { name: "Western Sahara", code: "EH" },
        { name: "Yemen", code: "YE" },
        { name: "Zambia", code: "ZM" },
        { name: "Zimbabwe", code: "ZW" },
      ],
      // isLoading: false,
    };
  },
  computed: {
    getProgress() {
      let progress = 0;

      // at least one number

      if (/\d/.test(this.password)) {
        progress += 20;
      }

      // at least one capital letter

      if (/(.*[A-Z].*)/.test(this.password)) {
        progress += 20;
      }

      // at menons a lowercase

      if (/(.*[a-z].*)/.test(this.password)) {
        progress += 20;
      }

      // more than 5 digits

      if (this.password.length >= 6) {
        progress += 20;
      }

      // at least one special character

      if (/[^A-Za-z0-9]/.test(this.password)) {
        progress += 20;
      }

      return progress;
    },
  },
  methods: {
    performRegister() {
      // this.isLoading = true;
      this.$Progress.start();
      this.$store
        .dispatch("performRegisterAction", {
          first_name: this.first_name,
          last_name: this.last_name,
          phone_number: this.phone_number,
          email: this.email,
          password: this.password,
          role_name: this.role_name,
          category_id: this.category_id,
          location: this.location,
          rate: this.rate,
        })
        .then((res) => {
          // this.isLoading = false;
          this.$Progress.finish();
          this.$router.push("/dashboard");
          this.sucessMessageOpen();
          console.log(res.data);
        })
        .catch((err) => {
          // this.isLoading = false;
          this.$Progress.fail();
          // this.error = " There was error during register process";
          this.errorMessageOpen();
          console.log(err.message);
        });
    },
    errorMessageOpen() {
      this.$toast.open({
        message: " There was error during register process",
        type: "error",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    sucessMessageOpen() {
      this.$toast.open({
        message: "Thank you .. ",
        type: "success",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    // loadcategoriesValues() {
    //   axios
    //     .get(
    //       "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios/categories-filter-values"
    //     )
    //     .then((response) => {
    //       this.categoriesValues = response.data;
    //     });
    // },

    // loadRoles() {
    //   axios
    //     .get("https://vue-api-backend.herokuapp.com/api/auth/roles")
    //     .then((response) => {
    //       this.roles = response.data;
    //     });
    // },
  },
  // mounted() {
  //   this.loadRoles();
  //   this.loadcategoriesValues();
  // },
};
</script>
