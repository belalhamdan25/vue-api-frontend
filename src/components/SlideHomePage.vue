<template>
  <div class="slide-back-image">
    <div class="container">
      <div class="row d-flex justify-content-center">
          <div class="center">
        <div class="col-12">
          <h1 class="text-white  ">
            Hire the best freelancers for any job, online.
          </h1>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Your Project Title" />
            <div class="input-group-append">
              <button class="btn btn-success" type="submit">Go</button>
            </div>
          </div>
        </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-back-image {
  background-image: url("../assets/images/homepage-slide.jpg");
  height: 80vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
    position: relative;

}
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
