<template>
<div id="post">
    <h1>{{post.title}}</h1>
    <div class="main-container">
        <div class="content-wrapper">
            <h4>{{post.description}}</h4>
            <h4>{{post.date | date}}</h4>
            <ul class="nav-list">
                <li class="nav-item">
                    <router-link :to="{ path: `/post/${post._id}/map` }">Map</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ path: `/post/${post._id}/edit` }">Edit</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ path: `/post/${post._id}/delete` }">Delete</router-link>
                </li>
            </ul>
        </div>
        <div class="post-view-wrapper">
            <router-view></router-view>
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
.content-wrapper {
    width: 50%;
}

.post-view-wrapper {
    width: 50%;
}

#post {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.main-container {
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
}

ul.nav-list {
  list-style-type: none;
  padding: 0;
}
.nav-item {
  display: inline-block;
  margin: 0 5px;
  background: #42b983;
  border-radius: 5px;
  padding: 0.3em 2em;
  cursor: pointer;
  transition: 0.4s;
}
.nav-item a {
    color: #fff;
    text-decoration: none;
}
.nav-item:hover {
  background: #2c805a;
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
