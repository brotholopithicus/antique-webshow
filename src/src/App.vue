<template>
<div id="app">
    <div class="app-container">
        <div class="nav-container">
            <ul class="header-nav">
                <li class="header-nav-item">
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li class="header-nav-item">
                    <router-link to='/new'>New Event</router-link>
                </li>
                <li class="header-nav-item">
                    <router-link to='/map'>Event Map</router-link>
                </li>
                <li class="header-nav-item">
                    <router-link to='/users'>User List</router-link>
                </li>
            </ul>
        </div>
        <div class="view-container">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'app'
}
</script>
<style>

* {
    box-sizing: border-box;
}

html,
body,
#app {
    margin: 0;
    padding: 0;
}

.nav-container {
    background: #42b983;
    color: #fff;
    width: 100%;
    margin: 0;
    width: 100%;
}

ul.header-nav {
    list-style-type: none;
    margin: 0;
    padding: 10px;
}

.header-nav-item  {
    display: inline-block;
    border-radius: 5px;
    padding: 8px 5px;
    width: 150px;
    text-align: center;
    cursor: pointer;
    transition: 0.7s;
}

.header-nav-item:hover {
  background: #71b968;
}

.header-nav-item a {
    color: #fff;
    text-decoration: none;
    font-family: 'Helvetica Neue';
    font-size: 18px;
}

.view-container {
    width: 95%;
    margin: 0 auto;
}
</style>
