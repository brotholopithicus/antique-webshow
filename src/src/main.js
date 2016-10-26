import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';

// main view components
import Home from './components/Home.vue';
import NewPost from './components/NewPost.vue';
import Post from './components/Post.vue';
import AllPostsMap from './components/Map.vue';

import LoginSignup from './components/LoginSignup.vue';

// child view components
import PostMap from './components/PostChildren/Map.vue';
import EditPost from './components/PostChildren/EditPost.vue';
import DeletePost from './components/PostChildren/DeletePost.vue';

// bootstrap

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/new', component: NewPost },
    { path: '/map', component: AllPostsMap },
    { path: '/user', component: LoginSignup },
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
