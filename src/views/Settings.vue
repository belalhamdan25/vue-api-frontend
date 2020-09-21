<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-12">
        <h2>settings page Genral Info </h2>
        <settingsForm></settingsForm>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import SettingsForm from "../components/SettingsForm";

export default {
  components: {
    settingsForm: SettingsForm
  }
};
</script>
