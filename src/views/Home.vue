<template>
    <div>
        <h1>Home</h1>
        <button @click="toUsers">to users</button>
        <p>{{ count }}</p>
        <p>{{ doubleCount }}</p>
        <p>{{ tripleCount }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        count(){
            return this.$store.state.count;
        },
        ...mapGetters(["doubleCount", "tripleCount"]),
    },
    methods:{
        toUsers(){
            this.$router.push({
                name: 'users-id-profile', 
                params: {id: 1}
            })
        }
    }
}
</script>