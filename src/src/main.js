import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import Home from './components/Home.vue';
import NewPost from './components/NewPost.vue';
import Post from './components/Post.vue';
import EditPost from './components/PostChildren/EditPost.vue';
import DeletePost from './components/PostChildren/DeletePost.vue';
import PostMap from './components/PostChildren/Map.vue';
import AllPostsMap from './components/Map.vue';
import Users from './components/Users.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/new', component: NewPost },
    { path: '/map', component: AllPostsMap },
    { path: '/users', component: Users },
    {
        path: '/post/:id',
        name: 'post',
        component: Post,
        children: [
            { path: 'edit', name: 'editPost', component: EditPost },
            { path: 'delete', name: 'deletePost', component: DeletePost },
            { path: 'map', name: 'postMap', component: PostMap }
        ]
    }
]

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
})
