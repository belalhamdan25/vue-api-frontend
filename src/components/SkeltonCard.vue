<template >
  <div
    class="col-lg-4 col-md-6 col-sm-6 pb-4 d-flex justify-content-center align-content-center pr-2 pl-2"
  >
    <div class="card portfolio-card border-0 p-2">
      <div class="d-flex justify-content-start align-items-center">
        <div class="d-flex align-items-center px-1 w-img-100">
          <div class="hw-35-c letter-profile-img rounded-circle"></div>
        </div>
        <div class="pl-2">
          <div class="justify-content-center pr-1 align-content-end">
            <h6 class="card-name m-0 h-fit f-15">
              <div class="skelton-name"></div>
            </h6>

            <div class="skelton-title"></div>
          </div>
        </div>
      </div>
      <div class="image-skelton mt-2"></div>
    </div>
  </div>
</template>

<style scoped>
.hw-35-c {
  height: 35px !important;
  width: 35px !important;
}
.letter-profile-img {
  background-color: #f0f0f0;
}
.skelton-name {
  background-color: #f0f0f0;
  height: 5px;
  width: 100px;
}
.image-skelton {
  background-color: #f0f0f0;
  height: 189px;
  width: 253px;
}
.portfolio-card {
  background-color: white;
  transition: 0.3s;
  /* box-shadow: 0 4px 8px 0 rgba(230, 230, 230, 0.2), 0 6px 20px 0 rgba(219, 219, 219, 0.19); */
  color: #f0f0f0;

  /* border-radius: 10px; */
}
.skelton-title {
  background-color: #f0f0f0;
  height: 5px;
  width: 150px;
  margin-top: 7px;
}
</style>


<script>
export default {
      data() {
    return {
        repeatNum:3,
    };
  },
};
</script>
    
