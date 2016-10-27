<template>
<div id="allPostsMap">
    <div class="container-fluid">
        <div class="row main-content">
            <div class="col-xs-8">
                <div id="map" class="img-fluid"></div>
            </div>
            <div class="col-xs-4">
                <div class="list-group">
                    <div class="list-group-item list-group-item-action" :class="[selectedPost == post ? 'active' : '']" v-for="post in posts">
                        <div class="row list-group-item-text">
                            <div class="col-xs-6">
                                <h6>{{post.title}}</h6>
                                <p>{{post.date | date}}</p>
                                <div class="btn-group-sm">
                                    <button @click="panTo(post)" class="btn btn-success">Pan To</button>
                                    <button @click="drawLine(post)" class="btn btn-danger">Draw Line</button>
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="address blockquote-reverse">
                                    <p>{{post.address.street}}{{post.address.city}}, {{post.address.state}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-secondary" @click="clear">Clear Map</button>
                    <button type="button" class="btn btn-secondary" @click="panToHome">Go Home</button>
                </div>
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
            userLocation: null,
            selectedPost: null,
            polyline: null
        }
    },
    mounted() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            this.$http.get('/api/posts')
                .then(response => {
                    this.posts = response.body;
                    this.leafify();
                });
        },
        leafify() {
            let firstPost = this.posts[0];
            let position = [firstPost.location.lat, firstPost.location.lng];
            let mymap = L.map('map').setView(position, 13);
            this.map = mymap;
            this.map.locate();
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
            this.map.on('locationfound', (e) => {
                console.log('location found');
                this.userLocation = [e.latitude, e.longitude];
                this.map.panTo(this.userLocation, {
                    animate: true,
                    duration: 0.5
                });
                let circle = L.circle(this.userLocation, {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                }).addTo(this.map);
                this.circle = circle;
                this.circle.bindPopup('Your Current Location').openPopup();
            });

            this.map.on('locationerror', (e) => {
                console.log(e);
            });
        },
        panTo(post) {
            this.selectedPost = post;
            let coords = [post.location.lat, post.location.lng];
            this.map.panTo(coords, {
                animate: true,
                duration: 0.5
            });
            post.marker.openPopup();
        },
        drawLine(post) {
            if (this.polyline) {
                this.polyline.remove();
            }
            this.selectedPost = post;
            let coords = [post.location.lat, post.location.lng];
            let latlngs = [this.userLocation, coords];
            let polyline = L.polyline(latlngs, {
                color: 'red'
            }).addTo(this.map);
            this.polyline = polyline;
            this.circle.setRadius(200000);
            this.circle.openPopup();
            this.map.fitBounds(polyline.getBounds());
        },
        clear() {
            this.polyline.remove();
            this.panToHome();
        },
        panToHome() {
            this.map.panTo(this.userLocation, {
                animate: true,
                duration: 0.5
            });
        }
    },
    filters: {
        date(d) {
            return (new Date(d)).toDateString();
        }
    }
}
</script>

<style scoped>
@import url('../../../node_modules/leaflet/dist/leaflet.css');
.main-content {
    padding-top: 2em;
}

.list-group {
    max-height: 500px;
    overflow: scroll;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
}

.list-group-item-text {
    font-size: 0.8em;
}

.address {
    height: 50px;
}

.address p {
    padding-top: 0.5em;
}

.list-group-item.active {}

#map {
    height: 538px;
    background: rgba(0, 0, 0, 0.5);
}

.btn-group {
    width: 100%;
    margin: 0 auto;
}

.btn.btn-secondary {
    width: 50%;
}
</style>
