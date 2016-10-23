<template>
<div id="map">
    <div id="mymap"></div>
</div>
</template>

<script>
import L from 'leaflet';

export default {
    name: 'map',
    data() {
        return {
            post: ''
        }
    },
    methods: {
        update() {
            this.$http.get(this.postUrl)
                .then(response => {
                    this.post = response.body;
                    console.log(this.post);
                    this.post.date = (new Date(this.post.date)).toISOString().split('T')[0];
                    this.leafify();
                });
        },
        leafify() {
            let position = [this.post.location.lat, this.post.location.lng];
            let mymap = L.map('mymap').setView(position, 13);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Awesome Sauce',
                maxZoom: 18,
                id: 'brotholopithicus.1mnb4o77',
                accessToken: 'pk.eyJ1IjoiYnJvdGhvbG9waXRoaWN1cyIsImEiOiJjaXVoM3B2cjMwMGphMnlsMzV3MHByOW5wIn0.lGV-ZGjKgo4ddKOByVVT9w'
            }).addTo(mymap);
            let postMarker = L.marker(position).addTo(mymap);
            let date = (new Date(this.post.date)).toDateString();
            // popup should have event location, time, and date
            postMarker.bindPopup(`<b>${this.post.title}</b><p>${this.post.description}</p><p>${date}</p>`).openPopup();

        }
    },
    computed: {
        postUrl() {
            let id = this.$route.params.id;
            return `/api/posts/${id}`;
        }
    },
    created() {
        this.update();
    }
}
</script>

<style scoped>
@import url('../../../node_modules/leaflet/dist/leaflet.css');
#mymap {
    height: 400px;
    margin: 0 auto;
    width: 90%;
}

#map {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
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
