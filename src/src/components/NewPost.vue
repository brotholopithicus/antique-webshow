<template>
<div id="newform">
    <h1>New Post</h1>
    <div class="input">
        <div class="input-group">
            <label for="title">Title: </label>
            <input v-model="post.title" placeholder="title" type="text" />
        </div>
        <div class="input-group">
            <label for="description">Description: </label>
            <input v-model="post.description" placeholder="description" type="text" />
        </div>
        <div class="input-group">
            <label for="date">Date: </label>
            <input v-model="post.date" type="date" />
        </div>
        <div class="input-group">
            <label for="time">Time: </label>
            <input v-model="post.time" type="time" />
        </div>
        <div class="input-group">
            <label for="address">Address: </label>
            <input v-model="post.address" type="text" placeholder="address" />
        </div>
        <div class="input-group">
            <label for="city">City: </label>
            <input v-model="post.city" type="text" placeholder="city" />
        </div>
        <div class="input-group">
            <label for="state">State: </label>
            <select v-model="post.state" name="state">
              <option v-for="state in states" :value="state">
              {{state}}
            </option>
          </select>
        </div>
        <div class="input-group">
            <button @click="submitPost">Submit</button>
        </div>
    </div>

</div>
</template>

<script>
import fs from 'fs';

export default {
    name: 'hello',
    data() {
        return {
            post: {
                title: null,
                description: null,
                date: null,
                time: null,
                address: null,
                city: null,
                state: null
            },
            states: []
        }
    },
    methods: {
        submitPost() {
            this.$http.post('/api/posts', this.post)
                .then(response => {
                    this.$router.push({
                        path: '/'
                    });
                })
        }
    },
    created() {
        let states = [
            'AL',
            'AK',
            'AS',
            'AZ',
            'AR',
            'CA',
            'CO',
            'CT',
            'DE',
            'DC',
            'FM',
            'FL',
            'GA',
            'GU',
            'HI',
            'ID',
            'IL',
            'IN',
            'IA',
            'KS',
            'KY',
            'LA',
            'ME',
            'MH',
            'MD',
            'MA',
            'MI',
            'MN',
            'MS',
            'MO',
            'MT',
            'NE',
            'NV',
            'NH',
            'NJ',
            'NM',
            'NY',
            'NC',
            'ND',
            'MP',
            'OH',
            'OK',
            'OR',
            'PW',
            'PA',
            'PR',
            'RI',
            'SC',
            'SD',
            'TN',
            'TX',
            'UT',
            'VT',
            'VI',
            'VA',
            'WA',
            'WV',
            'WI',
            'WY'
        ];
        states.forEach(state => this.states.push(state));
    }
}
</script>

<style scoped>
#newform {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 18px;
}

.input-group {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 2em auto;
}

.input-group label {
    width: 10%;
    text-align: left;
}

.input-group input,
.input-group select {
    width: 90%;
}

.input-group label,
.input-group input,
.input-group select {
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
    display: block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
