<template>
<div id="editPost">
    <div class="input-group-lg row">
        <div class="col-xs-2 col-form-label">
            <label for="editTitle">Title: </label>
        </div>
        <div class="col-xs-10">
            <input class="form-control" id="editTitle" type="text" v-model="post.title" :placeholder="post.title" />
        </div>
    </div>
    <div class="input-group-lg row">
        <div class="col-xs-2 col-form-label">
            <label for="editDesc">Description: </label>
        </div>
        <div class="col-xs-10">
            <textarea class="form-control" id="editDesc" type="text" v-model="post.description" :placeholder="post.description"></textarea>
        </div>
    </div>
    <div class="input-group-lg row">
        <div class="col-xs-2 col-form-label">
            <label for="editDate">Date: </label>
        </div>
        <div class="col-xs-10">
            <input class="form-control" id="editDate" type="date" v-model="post.date" :placeholder="post.date" />
        </div>
    </div>
    <div class="input-group row">
        <button class="btn btn-default" @click="submitChanges">Submit</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'editPost',
    data() {
        return {
            post: {}
        }
    },
    created() {
        this.$http.get(this.postUrl)
            .then(response => {
                this.post = response.body;
                this.post.date = (new Date(this.post.date)).toISOString().split('T')[0];
            });
    },
    computed: {
        postUrl() {
            let id = this.$route.params.id;
            return `/api/posts/${id}`;
        },
        date() {
            return (new Date(this.post.date)).toISOString().split('T')[0];
        }
    },
    methods: {
        submitChanges() {
            this.$http.put(this.postUrl, this.post)
                .then(response => {
                    this.$router.push({
                        path: `/post/${this.post._id}`
                    });
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
    margin-top: 20px;
}

.input-group {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
}

.input-group label {
    width: 15%;
}

.input-group input {
    width: 75%;
}

.input-group label,
.input-group input {
    line-height: 1.6;
}

.input-group button {
    margin-top: 1em;
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
