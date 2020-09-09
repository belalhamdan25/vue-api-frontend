<template>
  <form action="#">
    <div class="form-group">
      <label for="Fname">First Name</label>
      <input type="text" class="form-control" id="Fname" name="Fname" />
    </div>
    <div class="form-group">
      <label for="Lname">Last Name</label>
      <input type="text" class="form-control" id="Lname" name="Lname" />
    </div>
    <div class="form-group">
      <label for="phoneNumber">Phone Number</label>
      <input
        type="tel"
        class="form-control"
        id="phoneNumber"
        name="phoneNumber"
      />
    </div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" name="email" />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        name="password"
      />
    </div>
    <div class="form-group">
      <label for="password">Confirm Password</label>
      <input
        type="password"
        class="form-control"
        id="confirmPassword"
        name="confirmPassword"
      />
    </div>

    <div class="form-group">
      <label for="sel1">User Type</label>
      <select class="form-control" name="userType" id="userType">
        <option value="">FreeLancer</option>
        <option value="">Client</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</template>
