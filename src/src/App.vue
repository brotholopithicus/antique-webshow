<template>
<div id="app">
    <nav id="main-nav" class="navbar navbar-fixed-top navbar-dark bg-primary" style="background-color: #4dad48;">
        <router-link class="navbar-brand" :to="{ name: 'home' }">
            <span class="fa fa-balance-scale"></span> Home
        </router-link>
        <ul class="nav navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/new">New Event</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to='/map'>Event Map</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/users">User List</router-link>
            </li>
        </ul>
    </nav>
    <div class="view-container">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
    name: 'app'
}
</script>
<style>
body {
    background: lightslategrey;
}

.view-container {
    margin-top: 4em;
}
.router-link-active {
  color: rgba(0, 0, 0, 0.5);
}
</style>
