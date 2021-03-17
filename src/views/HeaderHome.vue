<template>
    <nav>
        <h2>Home</h2>
      <router-link to="/" active-class="link--active" exact>Home</router-link>
      <router-link to="/users/1" active-class="link--active" exact>Users</router-link>
      <button @click="increment(1)">+1</button>
      <button @click="decrement(1)">-1</button>
      <button @click="incrementAction(1)">+1</button>
    </nav>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
export default {
  methods:{
    // increment() {
    //   this.$store.commit("increment", 1);
    // },
    // decrement() {
    //   this.$store.commit("decrement", 1);
    // },
    // actionIncrement(){
    //   this.$store.dispatch('increment', 1);
    // },
    ...mapActions(["incrementAction", "decrementAction"]),
    ...mapMutations(["increment", "decrement"])
  }
}
</script>

<style scoped>
  .link--active {
    color: red;
  }
</style>