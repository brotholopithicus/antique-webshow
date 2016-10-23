<template>
<div id="users">
    <div class="container">
        <div class="user" v-for="user in users">
            <div class="user-main-content">
                <h1>{{user.name}}</h1>
                <h4>{{user.email}}</h4>
                <h4>{{user.password}}</h4>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'users',
    data() {
        return {
            users: []
        }
    },
    created() {
        this.$http.get('/users')
            .then(response => {
                this.users = response.body;
            });
    }
}
</script>

<style scoped>
#users {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.user {
    width: 40%;
    max-height: 400px;
    margin: 0 auto;
}

.user-main-content {
    height: 270px;
}

.user-footer {}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
