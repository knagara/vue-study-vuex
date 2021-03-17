<template>
    <div>
        <h2>Users</h2>
        <router-link to="/users/1">User1</router-link>
        <router-link to="/users/2">User2</router-link>
        <hr>
        <!-- <h3>User No. {{ $route.params.id }}</h3> -->
        <h3>User No. {{ id }}</h3>
        <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja'">Next user</router-link>
        <router-link :to="{ name: 'users-id-profile', params: { id: Number(id) + 1}, query: { lang: 'ja', page: 2}}">Next user</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ['id'],
    watch: {
        $route(to, from){
            console.log(from);
            console.log(to);
            console.log("route change")
        }
    },
    beforeRouteEnter(to, from, next){
        console.log('beforeRouteEnter')
        next()
    },
    beforeRouteUpdate(to, from, next){
        console.log('beforeRouteUpdate')
        next()
    },
    beforeRouteLeave(to, from, next){
        console.log('beforeRouteLeave')
        const isLeave = window.confirm('本当にこのページを離れますか？')
        if(isLeave){
            next()
        }else{
            next(false)
        }
    }
}
</script>