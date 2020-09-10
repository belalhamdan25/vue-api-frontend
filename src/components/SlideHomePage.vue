<template>
<div class="slide-back-image">
  <div class="overlay-effect"></div>
    <div class="container">
      <div class="row">
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
  background-image: url("#");
  height: 50vh; /* You must set a specified height */
    /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
.overlay-effect{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 1;
  background-color: #0000002f;
  overflow:hidden;
}
</style>
