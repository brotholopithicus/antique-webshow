<template>
<div id="deletePost">
    <h2>Are you sure you want to remove this post?</h2>
    <button @click="deletePost">Yes</button>
    <button>No</button>
</div>
</template>

<script>
export default {
    name: 'deletePost',
    data() {
        return {
            postUrl: ''
        }
    },
    computed: {
        postUrl() {
            let id = this.$route.params.id;
            return `/api/posts/${id}`;
        }
    },
    methods: {
        deletePost() {
            this.$http.delete(this.postUrl)
                .then(response => {
                    this.$router.push({ path: '/' });
                });
        }
    }
}
</script>

<style scoped>
#editPost {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

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
