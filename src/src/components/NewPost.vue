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
              <option v-for="state in states" :value="state.value">
              {{state.name}}
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
            states: [{
                name: 'Alabama',
                value: 'AL'
            }, {
                name: 'Alaska',
                value: 'AK'
            }, {
                name: 'American Samoa',
                value: 'AS'
            }, {
                name: 'Arizona',
                value: 'AZ'
            }, {
                name: 'Arkansas',
                value: 'AR'
            }, {
                name: 'California',
                value: 'CA'
            }, {
                name: 'Colorado',
                value: 'CO'
            }, {
                name: 'Connecticut',
                value: 'CT'
            }, {
                name: 'Delaware',
                value: 'DE'
            }, {
                name: 'District Of Columbia',
                value: 'DC'
            }, {
                name: 'Federated States Of Micronesia',
                value: 'FM'
            }, {
                name: 'Florida',
                value: 'FL'
            }, {
                name: 'Georgia',
                value: 'GA'
            }, {
                name: 'Guam',
                value: 'GU'
            }, {
                name: 'Hawaii',
                value: 'HI'
            }, {
                name: 'Idaho',
                value: 'ID'
            }, {
                name: 'Illinois',
                value: 'IL'
            }, {
                name: 'Indiana',
                value: 'IN'
            }, {
                name: 'Iowa',
                value: 'IA'
            }, {
                name: 'Kansas',
                value: 'KS'
            }, {
                name: 'Kentucky',
                value: 'KY'
            }, {
                name: 'Louisiana',
                value: 'LA'
            }, {
                name: 'Maine',
                value: 'ME'
            }, {
                name: 'Marshall Islands',
                value: 'MH'
            }, {
                name: 'Maryland',
                value: 'MD'
            }, {
                name: 'Massachusetts',
                value: 'MA'
            }, {
                name: 'Michigan',
                value: 'MI'
            }, {
                name: 'Minnesota',
                value: 'MN'
            }, {
                name: 'Mississippi',
                value: 'MS'
            }, {
                name: 'Missouri',
                value: 'MO'
            }, {
                name: 'Montana',
                value: 'MT'
            }, {
                name: 'Nebraska',
                value: 'NE'
            }, {
                name: 'Nevada',
                value: 'NV'
            }, {
                name: 'New Hampshire',
                value: 'NH'
            }, {
                name: 'New Jersey',
                value: 'NJ'
            }, {
                name: 'New Mexico',
                value: 'NM'
            }, {
                name: 'New York',
                value: 'NY'
            }, {
                name: 'North Carolina',
                value: 'NC'
            }, {
                name: 'North Dakota',
                value: 'ND'
            }, {
                name: 'Northern Mariana Islands',
                value: 'MP'
            }, {
                name: 'Ohio',
                value: 'OH'
            }, {
                name: 'Oklahoma',
                value: 'OK'
            }, {
                name: 'Oregon',
                value: 'OR'
            }, {
                name: 'Palau',
                value: 'PW'
            }, {
                name: 'Pennsylvania',
                value: 'PA'
            }, {
                name: 'Puerto Rico',
                value: 'PR'
            }, {
                name: 'Rhode Island',
                value: 'RI'
            }, {
                name: 'South Carolina',
                value: 'SC'
            }, {
                name: 'South Dakota',
                value: 'SD'
            }, {
                name: 'Tennessee',
                value: 'TN'
            }, {
                name: 'Texas',
                value: 'TX'
            }, {
                name: 'Utah',
                value: 'UT'
            }, {
                name: 'Vermont',
                value: 'VT'
            }, {
                name: 'Virgin Islands',
                value: 'VI'
            }, {
                name: 'Virginia',
                value: 'VA'
            }, {
                name: 'Washington',
                value: 'WA'
            }, {
                name: 'West Virginia',
                value: 'WV'
            }, {
                name: 'Wisconsin',
                value: 'WI'
            }, {
                name: 'Wyoming',
                value: 'WY'
            }]
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
