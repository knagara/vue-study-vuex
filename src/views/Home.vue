<template>
    <div>
        <h1>Home</h1>
        <button @click="toUsers">to users</button>
        <p>{{ count }}</p>
        <p>{{ doubleCount }}</p>
        <p>{{ tripleCount }}</p>
        <input type="text" v-model="message">
        <p>{{ message }}</p>

        <p>{{doubleCountGetter}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        count(){
            return this.$store.state.count;
        },
        doubleCountGetter() {
            return this.$store.getters["count/doubleCount"]
        },
        // message(){
        //     return this.$store.getters.message;
        // },
        message: {
            get() {
                return this.$store.getters.message;
            },
            set(value) {
                this.$store.dispatch('updateMessage', value);
            }
        },
        ...mapGetters("count", ["doubleCount", "tripleCount"]),
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