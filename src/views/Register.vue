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

              <!-- <vs-select
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
              </vs-select> -->

                              <div class="form-group">
                            <label for="location">Country</label>
                            <select
                              id="location"
                              name="location"
                              class="form-control"
                              v-model="location"
                            >
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

              <!-- <div class="mt-20">
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
              </div> -->

                          <div class="form-group">
        <label for="role_name">Category</label>
        <select
          class="form-control"
          v-model="category_id"
        >
          <option           v-for="categoriesValue in categoriesValues"
              :key="categoriesValue.name" :value="categoriesValue.id">{{categoriesValue.desc}}</option>

        </select>
      </div>

              <!-- <div class="mt-20">
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
              </div> -->


                          <div class="form-group">
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
import axios from "axios";

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
      categoriesValues: [],
      category_id: "",
      location: "",
      rate: 0,
      roles: [],
      // contries: [
      //   { name: "Afghanistan", code: "AF" },
      //   { name: "Åland Islands", code: "AX" },
      //   { name: "Albania", code: "AL" },
      //   { name: "Algeria", code: "DZ" },
      //   { name: "American Samoa", code: "AS" },
      //   { name: "AndorrA", code: "AD" },
      //   { name: "Angola", code: "AO" },
      //   { name: "Anguilla", code: "AI" },
      //   { name: "Antarctica", code: "AQ" },
      //   { name: "Antigua and Barbuda", code: "AG" },
      //   { name: "Argentina", code: "AR" },
      //   { name: "Armenia", code: "AM" },
      //   { name: "Aruba", code: "AW" },
      //   { name: "Australia", code: "AU" },
      //   { name: "Austria", code: "AT" },
      //   { name: "Azerbaijan", code: "AZ" },
      //   { name: "Bahamas", code: "BS" },
      //   { name: "Bahrain", code: "BH" },
      //   { name: "Bangladesh", code: "BD" },
      //   { name: "Barbados", code: "BB" },
      //   { name: "Belarus", code: "BY" },
      //   { name: "Belgium", code: "BE" },
      //   { name: "Belize", code: "BZ" },
      //   { name: "Benin", code: "BJ" },
      //   { name: "Bermuda", code: "BM" },
      //   { name: "Bhutan", code: "BT" },
      //   { name: "Bolivia", code: "BO" },
      //   { name: "Bosnia and Herzegovina", code: "BA" },
      //   { name: "Botswana", code: "BW" },
      //   { name: "Bouvet Island", code: "BV" },
      //   { name: "Brazil", code: "BR" },
      //   { name: "British Indian Ocean Territory", code: "IO" },
      //   { name: "Brunei Darussalam", code: "BN" },
      //   { name: "Bulgaria", code: "BG" },
      //   { name: "Burkina Faso", code: "BF" },
      //   { name: "Burundi", code: "BI" },
      //   { name: "Cambodia", code: "KH" },
      //   { name: "Cameroon", code: "CM" },
      //   { name: "Canada", code: "CA" },
      //   { name: "Cape Verde", code: "CV" },
      //   { name: "Cayman Islands", code: "KY" },
      //   { name: "Central African Republic", code: "CF" },
      //   { name: "Chad", code: "TD" },
      //   { name: "Chile", code: "CL" },
      //   { name: "China", code: "CN" },
      //   { name: "Christmas Island", code: "CX" },
      //   { name: "Cocos (Keeling) Islands", code: "CC" },
      //   { name: "Colombia", code: "CO" },
      //   { name: "Comoros", code: "KM" },
      //   { name: "Congo", code: "CG" },
      //   { name: "Congo, The Democratic Republic of the", code: "CD" },
      //   { name: "Cook Islands", code: "CK" },
      //   { name: "Costa Rica", code: "CR" },
      //   { name: "Cote D'Ivoire", code: "CI" },
      //   { name: "Croatia", code: "HR" },
      //   { name: "Cuba", code: "CU" },
      //   { name: "Cyprus", code: "CY" },
      //   { name: "Czech Republic", code: "CZ" },
      //   { name: "Denmark", code: "DK" },
      //   { name: "Djibouti", code: "DJ" },
      //   { name: "Dominica", code: "DM" },
      //   { name: "Dominican Republic", code: "DO" },
      //   { name: "Ecuador", code: "EC" },
      //   { name: "Egypt", code: "EG" },
      //   { name: "El Salvador", code: "SV" },
      //   { name: "Equatorial Guinea", code: "GQ" },
      //   { name: "Eritrea", code: "ER" },
      //   { name: "Estonia", code: "EE" },
      //   { name: "Ethiopia", code: "ET" },
      //   { name: "Falkland Islands (Malvinas)", code: "FK" },
      //   { name: "Faroe Islands", code: "FO" },
      //   { name: "Fiji", code: "FJ" },
      //   { name: "Finland", code: "FI" },
      //   { name: "France", code: "FR" },
      //   { name: "French Guiana", code: "GF" },
      //   { name: "French Polynesia", code: "PF" },
      //   { name: "French Southern Territories", code: "TF" },
      //   { name: "Gabon", code: "GA" },
      //   { name: "Gambia", code: "GM" },
      //   { name: "Georgia", code: "GE" },
      //   { name: "Germany", code: "DE" },
      //   { name: "Ghana", code: "GH" },
      //   { name: "Gibraltar", code: "GI" },
      //   { name: "Greece", code: "GR" },
      //   { name: "Greenland", code: "GL" },
      //   { name: "Grenada", code: "GD" },
      //   { name: "Guadeloupe", code: "GP" },
      //   { name: "Guam", code: "GU" },
      //   { name: "Guatemala", code: "GT" },
      //   { name: "Guernsey", code: "GG" },
      //   { name: "Guinea", code: "GN" },
      //   { name: "Guinea-Bissau", code: "GW" },
      //   { name: "Guyana", code: "GY" },
      //   { name: "Haiti", code: "HT" },
      //   { name: "Heard Island and Mcdonald Islands", code: "HM" },
      //   { name: "Holy See (Vatican City State)", code: "VA" },
      //   { name: "Honduras", code: "HN" },
      //   { name: "Hong Kong", code: "HK" },
      //   { name: "Hungary", code: "HU" },
      //   { name: "Iceland", code: "IS" },
      //   { name: "India", code: "IN" },
      //   { name: "Indonesia", code: "ID" },
      //   { name: "Iran, Islamic Republic Of", code: "IR" },
      //   { name: "Iraq", code: "IQ" },
      //   { name: "Ireland", code: "IE" },
      //   { name: "Isle of Man", code: "IM" },
      //   { name: "Israel", code: "IL" },
      //   { name: "Italy", code: "IT" },
      //   { name: "Jamaica", code: "JM" },
      //   { name: "Japan", code: "JP" },
      //   { name: "Jersey", code: "JE" },
      //   { name: "Jordan", code: "JO" },
      //   { name: "Kazakhstan", code: "KZ" },
      //   { name: "Kenya", code: "KE" },
      //   { name: "Kiribati", code: "KI" },
      //   { name: "Korea, Democratic People'S Republic of", code: "KP" },
      //   { name: "Korea, Republic of", code: "KR" },
      //   { name: "Kuwait", code: "KW" },
      //   { name: "Kyrgyzstan", code: "KG" },
      //   { name: "Lao People'S Democratic Republic", code: "LA" },
      //   { name: "Latvia", code: "LV" },
      //   { name: "Lebanon", code: "LB" },
      //   { name: "Lesotho", code: "LS" },
      //   { name: "Liberia", code: "LR" },
      //   { name: "Libyan Arab Jamahiriya", code: "LY" },
      //   { name: "Liechtenstein", code: "LI" },
      //   { name: "Lithuania", code: "LT" },
      //   { name: "Luxembourg", code: "LU" },
      //   { name: "Macao", code: "MO" },
      //   { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
      //   { name: "Madagascar", code: "MG" },
      //   { name: "Malawi", code: "MW" },
      //   { name: "Malaysia", code: "MY" },
      //   { name: "Maldives", code: "MV" },
      //   { name: "Mali", code: "ML" },
      //   { name: "Malta", code: "MT" },
      //   { name: "Marshall Islands", code: "MH" },
      //   { name: "Martinique", code: "MQ" },
      //   { name: "Mauritania", code: "MR" },
      //   { name: "Mauritius", code: "MU" },
      //   { name: "Mayotte", code: "YT" },
      //   { name: "Mexico", code: "MX" },
      //   { name: "Micronesia, Federated States of", code: "FM" },
      //   { name: "Moldova, Republic of", code: "MD" },
      //   { name: "Monaco", code: "MC" },
      //   { name: "Mongolia", code: "MN" },
      //   { name: "Montserrat", code: "MS" },
      //   { name: "Morocco", code: "MA" },
      //   { name: "Mozambique", code: "MZ" },
      //   { name: "Myanmar", code: "MM" },
      //   { name: "Namibia", code: "NA" },
      //   { name: "Nauru", code: "NR" },
      //   { name: "Nepal", code: "NP" },
      //   { name: "Netherlands", code: "NL" },
      //   { name: "Netherlands Antilles", code: "AN" },
      //   { name: "New Caledonia", code: "NC" },
      //   { name: "New Zealand", code: "NZ" },
      //   { name: "Nicaragua", code: "NI" },
      //   { name: "Niger", code: "NE" },
      //   { name: "Nigeria", code: "NG" },
      //   { name: "Niue", code: "NU" },
      //   { name: "Norfolk Island", code: "NF" },
      //   { name: "Northern Mariana Islands", code: "MP" },
      //   { name: "Norway", code: "NO" },
      //   { name: "Oman", code: "OM" },
      //   { name: "Pakistan", code: "PK" },
      //   { name: "Palau", code: "PW" },
      //   { name: "Palestinian Territory, Occupied", code: "PS" },
      //   { name: "Panama", code: "PA" },
      //   { name: "Papua New Guinea", code: "PG" },
      //   { name: "Paraguay", code: "PY" },
      //   { name: "Peru", code: "PE" },
      //   { name: "Philippines", code: "PH" },
      //   { name: "Pitcairn", code: "PN" },
      //   { name: "Poland", code: "PL" },
      //   { name: "Portugal", code: "PT" },
      //   { name: "Puerto Rico", code: "PR" },
      //   { name: "Qatar", code: "QA" },
      //   { name: "Reunion", code: "RE" },
      //   { name: "Romania", code: "RO" },
      //   { name: "Russian Federation", code: "RU" },
      //   { name: "RWANDA", code: "RW" },
      //   { name: "Saint Helena", code: "SH" },
      //   { name: "Saint Kitts and Nevis", code: "KN" },
      //   { name: "Saint Lucia", code: "LC" },
      //   { name: "Saint Pierre and Miquelon", code: "PM" },
      //   { name: "Saint Vincent and the Grenadines", code: "VC" },
      //   { name: "Samoa", code: "WS" },
      //   { name: "San Marino", code: "SM" },
      //   { name: "Sao Tome and Principe", code: "ST" },
      //   { name: "Saudi Arabia", code: "SA" },
      //   { name: "Senegal", code: "SN" },
      //   { name: "Serbia and Montenegro", code: "CS" },
      //   { name: "Seychelles", code: "SC" },
      //   { name: "Sierra Leone", code: "SL" },
      //   { name: "Singapore", code: "SG" },
      //   { name: "Slovakia", code: "SK" },
      //   { name: "Slovenia", code: "SI" },
      //   { name: "Solomon Islands", code: "SB" },
      //   { name: "Somalia", code: "SO" },
      //   { name: "South Africa", code: "ZA" },
      //   { name: "South Georgia and the South Sandwich Islands", code: "GS" },
      //   { name: "Spain", code: "ES" },
      //   { name: "Sri Lanka", code: "LK" },
      //   { name: "Sudan", code: "SD" },
      //   { name: "Suriname", code: "SR" },
      //   { name: "Svalbard and Jan Mayen", code: "SJ" },
      //   { name: "Swaziland", code: "SZ" },
      //   { name: "Sweden", code: "SE" },
      //   { name: "Switzerland", code: "CH" },
      //   { name: "Syrian Arab Republic", code: "SY" },
      //   { name: "Taiwan, Province of China", code: "TW" },
      //   { name: "Tajikistan", code: "TJ" },
      //   { name: "Tanzania, United Republic of", code: "TZ" },
      //   { name: "Thailand", code: "TH" },
      //   { name: "Timor-Leste", code: "TL" },
      //   { name: "Togo", code: "TG" },
      //   { name: "Tokelau", code: "TK" },
      //   { name: "Tonga", code: "TO" },
      //   { name: "Trinidad and Tobago", code: "TT" },
      //   { name: "Tunisia", code: "TN" },
      //   { name: "Turkey", code: "TR" },
      //   { name: "Turkmenistan", code: "TM" },
      //   { name: "Turks and Caicos Islands", code: "TC" },
      //   { name: "Tuvalu", code: "TV" },
      //   { name: "Uganda", code: "UG" },
      //   { name: "Ukraine", code: "UA" },
      //   { name: "United Arab Emirates", code: "AE" },
      //   { name: "United Kingdom", code: "GB" },
      //   { name: "United States", code: "US" },
      //   { name: "United States Minor Outlying Islands", code: "UM" },
      //   { name: "Uruguay", code: "UY" },
      //   { name: "Uzbekistan", code: "UZ" },
      //   { name: "Vanuatu", code: "VU" },
      //   { name: "Venezuela", code: "VE" },
      //   { name: "Viet Nam", code: "VN" },
      //   { name: "Virgin Islands, British", code: "VG" },
      //   { name: "Virgin Islands, U.S.", code: "VI" },
      //   { name: "Wallis and Futuna", code: "WF" },
      //   { name: "Western Sahara", code: "EH" },
      //   { name: "Yemen", code: "YE" },
      //   { name: "Zambia", code: "ZM" },
      //   { name: "Zimbabwe", code: "ZW" },
      // ],
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
    loadcategoriesValues() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios/categories-filter-values"
        )
        .then((response) => {
          this.categoriesValues = response.data;
        });
    },

    loadRoles() {
      axios
        .get("https://vue-api-backend.herokuapp.com/api/auth/roles")
        .then((response) => {
          this.roles = response.data;
        });
    },
  },
  mounted() {
    this.loadRoles();
    this.loadcategoriesValues();
  },
};
</script>
