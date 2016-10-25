<template>
<div id="allPostsMap">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-4">
                <div class="list-group">
                    <div class="list-group-item list-group-item-action" v-for="post in posts" @click="panToThis(post)">
                        <h5 class="list-group-item-heading">{{post.title}}</h5>
                        <p class="list-group-item-text">{{post.address.street}}</p>
                        <p class="list-group-item-text">{{post.address.city}}, {{post.address.state}}</p>
                    </div>
                </div>
            </div>
            <div class="col-xs-8">
                <div id="map"></div>
            </div>
        </div>
    </div>
</template>

<script>
import L from 'leaflet';

export default {
    name: 'allPostsMap',
    data() {
        return {
            posts: [],
            map: null,
            userLocation: null
        }
    },
    created() {
        this.$http.get('/api/posts')
            .then(response => {
                this.posts = response.body;
                this.leafify();
            });
    },
    methods: {
        leafify() {
            console.log('initializing map container');
            let firstPost = this.posts[0];
            let position = [firstPost.location.lat, firstPost.location.lng];

            let mymap = L.map('map').setView(position, 10);
            this.map = mymap;
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Awesome Sauce',
                maxZoom: 18,
                id: 'brotholopithicus.1mnb4o77',
                accessToken: 'pk.eyJ1IjoiYnJvdGhvbG9waXRoaWN1cyIsImEiOiJjaXVoM3B2cjMwMGphMnlsMzV3MHByOW5wIn0.lGV-ZGjKgo4ddKOByVVT9w'
            }).addTo(mymap);

            this.posts.forEach(post => {
                let p = [post.location.lat, post.location.lng];
                let postMarker = L.marker(p).addTo(mymap);
                let date = (new Date(post.date)).toDateString();
                postMarker.bindPopup(`<b>${post.title}</b><p>${post.address.street}<br />${post.address.city}, ${post.address.state}</p><p>${date}</p>`);
                post.marker = postMarker;
            });

            this.geoLocateUser((err, result) => {
                if (err) throw err;
                let userLocation = [result.latitude, result.longitude];
                mymap.panTo(userLocation, {
                    animate: true,
                    duration: 0.5
                });
                let circle = L.circle(userLocation, {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                }).addTo(mymap);

                circle.bindPopup('Your Current Location').openPopup();
            });
            console.log('map loading complete');
        },
        geoLocateUser(cb) {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(position => {
                    let location = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                    cb(null, location);
                });
            } else {
                cb(new Error('geolocation not active'));
            }
        },
        panToThis(post) {
            let coords = [post.location.lat, post.location.lng];
            this.map.panTo(coords, {
                animate: true,
                duration: 0.5
            });
            post.marker.openPopup();
        }
    }
}
</script>

<style scoped>
@import url('../../../node_modules/leaflet/dist/leaflet.css');
.row {
    padding-top: 2em;
}
.list-group {
  max-height: 500px;
  overflow: scroll;
}
#map {
    width: 100%;
    height: 500px;
    background: rgba(0, 0, 0, 0.5);
}
</style>
