<template>
    <nav>
        <h2>User</h2>
      <router-link to="/" active-class="link--active" exact>Home</router-link>
      <router-link to="/users/1" active-class="link--active" exact>Users</router-link>
    </nav>
</template>

<style scoped>
  .link--active {
    color: red;
  }
</style>