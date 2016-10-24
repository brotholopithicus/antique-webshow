<template>
<div id="home">
    <div class="acontainer">
        <div class="post" v-for="post in posts">
            <div class="post-main-content">
                <h1>{{post.title}}</h1>
                <h4>{{post.description}}</h4>
                <h4>{{post.date | date}}</h4>
            </div>
            <div class="post-footer">
                <router-link :to="{ name: 'postMap', params: { id: post._id }}">Details</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            posts: []
        }
    },
    created() {
        this.$http.get('/api/posts')
            .then(response => {
                this.posts = response.body;
            });
    },
    filters: {
        date(d) {
            return (new Date(d)).toDateString();
        }
    }
}
</script>

<style scoped>
#home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}

.acontainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.post {
    width: 40%;
    max-height: 400px;
    margin: 0 auto;
}
.post-main-content {
  height: 270px;
}
.post-footer {}

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
