<template>
<div id="deletePost" class="text-xs-center">
    <h2>Are you sure you want to remove this post?</h2>
    <button class="btn btn-default"@click="deletePost">Yes</button>
    <button class="btn btn-default">No</button>
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
#deletePost {
  font-family: "Segoe UI";
}
</style>
