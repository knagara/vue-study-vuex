<template>
    <nav>
        <h2>Home</h2>
      <router-link to="/" active-class="link--active" exact>Home</router-link>
      <router-link to="/users/1" active-class="link--active" exact>Users</router-link>
      <button @click="increment">+1</button>
    </nav>
</template>

<script>
export default {
  methods:{
    increment(){
      this.$store.state.count++;
    }
  }
}
</script>

<style scoped>
  .link--active {
    color: red;
  }
</style>