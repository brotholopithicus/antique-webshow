<template>
<div id="home">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-2">
            </div>
            <div class="col-xs-8">
                <div id="postList" class="card text-xs-center" v-for="post in posts">
                    <h3 class="card-header">{{post.title}}</h3>
                    <div class="card-block">
                        <p class="card-text">{{post.description}}</p>
                        <router-link :to="{ name: 'postMap', params: { id: post._id }}" class="btn btn-sm btn-primary">Details</router-link>
                    </div>
                    <div class="card-footer text-muted">
                        {{post.date | date}}
                    </div>
                </div>
            </div>
            <div class="col-xs-2">
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
#postList {
    margin-top: 1em;
}
</style>
