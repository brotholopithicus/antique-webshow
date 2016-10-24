<template>
<div id="allPostsMap">
    <div id="map">
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
                postMarker.bindPopup(`<b>${post.title}</b><p>${post.description}</p><p>${date}</p>`);
            });

            this.geoLocateUser((err, result) => {
                if (err) throw err;
                let userLocation = [result.latitude, result.longitude];
                mymap.panTo(userLocation, {
                    animate: true,
                    duration: 0.25
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
        }
    }
}
</script>

<style scoped>
@import url('../../../node_modules/leaflet/dist/leaflet.css');
#allPostsMap {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

#map {
    width: 100%;
    margin: 0 auto;
    height: 70vh;
    background: rgba(0, 0, 0, 0.5);
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
