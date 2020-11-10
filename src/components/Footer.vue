<template>
  <!-- Footer -->
  <footer class="page-footer font-small pt-4 bg-white ">
    <!-- Footer Links -->
    <div class="container text-center text-md-left mt-5">
      <!-- Grid row -->
      <div class="row mt-3 dark-grey-text">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
          <!-- Content -->
          <h6 class="text-uppercase font-weight-bold text-dark">Worker</h6>
          <hr
            class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px;"
          />
          <p>
            <a class="dark-grey-text" href="#!">About Us</a>
          </p>
          <p>
            <a class="dark-grey-text" href="#!">Careers</a>
          </p>
          <p>
            <a class="dark-grey-text" href="#!">Worker Foundation</a>
          </p>
          <p>
            <a class="dark-grey-text" href="#!">Trust, Safety & Security</a>
          </p>
          <p>
            <a class="dark-grey-text" href="#!">Contact us</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold text-dark">Terms</h6>
          <hr
            class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px;"
          />
          <p>
            <a class="dark-grey-text" href="#!">Privacy Policy</a>
          </p>
          <p>
            <a class="dark-grey-text" href="#!">Terms and Conditions</a>
          </p>
          <p>
            <a class="dark-grey-text" href="#!">Copyright Policy</a>
          </p>
          <p>
            <a class="dark-grey-text" href="#!">Code of Conduct</a>
          </p>
          <p>
            <a class="dark-grey-text" href="#!">Fees and Charges</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold text-dark">Links</h6>
          <hr
            class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px;"
          />
          <p>
            <a class="dark-grey-text" href="#!">Portfolios</a>
          </p>
          <p>
            <a class="dark-grey-text" href="#!">Projects</a>
          </p>
          <p>
            <a class="dark-grey-text" href="#!">Freelancers</a>
          </p>
          <p>
            <a class="dark-grey-text" href="#!">Help Center</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase font-weight-bold text-dark">Follow Us</h6>
          <hr
            class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px;"
          />

          <div
            class="  onmobilealigin"
          >
            <div class="d-flex  justify-content-center  align-items-center">
              <vs-button icon color="facebook">
                <i class="bx bxl-facebook-square"></i>
              </vs-button>
              <vs-button icon color="twitter">
                <i class="bx bxl-twitter"></i>
              </vs-button>
            </div>

          </div>

                    <h6 class="text-uppercase font-weight-bold text-dark mt-4">Payments</h6>
          <hr
            class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px;"
          />

          <div
            class=" onmobilealigin"
          >
            <div class="d-flex  justify-content-center  align-items-center">
              <i class="fab fa-cc-visa mr-2" style="font-size:30px"></i>
              <i class="fab fa-cc-paypal mr-2" style="font-size:30px"></i>
              <i class="fab fa-cc-mastercard mr-2" style="font-size:30px"></i>
            </div>

          </div>


        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
    <!-- Footer Links -->

    <!-- Copyright -->
    <div
      class="footer-copyright text-center text-black-50 py-3"
      style="background-color:#E9E9E9"
    >
        © 2020 Worker.com - All rights reserved 
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<style scoped>
.dark-grey-text {
  color: #666;
}
a {
  text-decoration: none;
  transition: 0.3s;
}
a:hover {
  color: rgb(56, 56, 56);
  transition: 0.3s;
}
@media only screen and (max-width: 767px) {
  .onmobilealigin {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
  }
}

@media only screen and (min-width: 767px) {
  .onmobilealigin {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: start !important;
  }

}
</style>
