<template>
  <div class="home">
    <slideHomePage></slideHomePage>
    <howWorksHomePage></howWorksHomePage>
  </div>
</template>

<script>
import SlideHomePage from "../components/SlideHomePage";
import HowWorksHomePage from "../components/HowWorksHomePage";

export default {
  components: {
    slideHomePage: SlideHomePage,
    howWorksHomePage: HowWorksHomePage,
  },
};
</script>

<style>

</style>