<template>
<div id="post">
    <div class="container-fluid">
        <h1 class="display-4 text-xs-center">{{post.title}}</h1>
        <div class="row">
            <div class="col-xs-1"></div>
            <div class="col-xs-5">
                <blockquote class="blockquote">
                    {{post.description}}
                </blockquote>
                <h4 class="tag tag-default">{{post.date | date}}</h4>
                <div class="row">
                    <div class="col-xs-6 offset-xs-3">
                        <ul class="nav nav-pills">
                            <li class="nav-item">
                                <router-link class="nav-link active" data-toggle="pill" :to="{ path: `/post/${post._id}/map` }">Map</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-toggle="pill" :to="{ path: `/post/${post._id}/edit` }">Edit</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-toggle="pill" :to="{ path: `/post/${post._id}/delete` }">Delete</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xs-5">
                <router-view></router-view>
            </div>
            <div class="col-xs-1"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'post',
    data() {
        return {
            post: {},
            postUrl: ''
        }
    },
    created() {
        this.update();
    },
    computed: {
        postUrl() {
            let id = this.$route.params.id;
            return `/api/posts/${id}`;
        }
    },
    methods: {
        deletePost() {
            console.log(id);
        },
        update() {
            this.$http.get(this.postUrl)
                .then(response => {
                    this.post = response.body;
                    this.post.date = (new Date(this.post.date)).toISOString().split('T')[0];
                });
        }
    },
    filters: {
        date(d) {
            return (new Date(d)).toDateString();
        }
    },
    watch: {
        '$route': 'update'
    }
}
</script>

<style scoped>

</style>
