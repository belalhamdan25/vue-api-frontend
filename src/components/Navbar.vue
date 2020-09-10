<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white ">
    <router-link class="navbar-brand" to="/">Worker.com</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="#">Work Samples</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">Browse Jobs</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Sign Up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
