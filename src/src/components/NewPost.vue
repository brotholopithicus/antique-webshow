<template>
<div id="newform">
    <div class="container">
        <div class="row">
            <div class="col-xs-8 offset-xs-2">
                <div class="card">
                    <div class="card-header text-xs-center">
                        <h2>New Post Form</h2>
                    </div>
                    <div class="card-block">
                        <div class="input-group row">
                            <div class="col-xs-2 col-form-label">
                                <label for="title">Title: </label>
                            </div>
                            <div class="col-xs-10">
                                <input class="form-control" v-model="post.title" placeholder="title" type="text" />
                            </div>
                        </div>
                        <div class="input-group row">
                            <div class="col-xs-2 col-form-label">
                                <label for="description">Description: </label>
                            </div>
                            <div class="col-xs-10">
                                <textarea class="form-control" v-model="post.description" placeholder="description" type="text"></textarea>
                            </div>
                        </div>
                        <div class="input-group row">
                            <div class="col-xs-2 col-form-label">
                                <label for="date">Date: </label>
                            </div>
                            <div class="col-xs-10">
                                <input class="form-control" v-model="post.date" type="date" />
                            </div>
                        </div>
                        <div class="input-group row">
                            <div class="col-xs-2 col-form-label">
                                <label for="time">Time: </label>
                            </div>
                            <div class="col-xs-10">
                                <input class="form-control" v-model="post.time" type="time" />
                            </div>
                        </div>
                        <div class="input-group row">
                            <div class="col-xs-2 col-form-label">
                                <label for="street">Street: </label>
                            </div>
                            <div class="col-xs-10">
                                <input class="form-control" v-model="post.street" type="text" placeholder="street" />
                            </div>
                        </div>
                        <div class="input-group row">
                            <div class="col-xs-2 col-form-label">
                                <label for="city">City: </label>
                            </div>
                            <div class="col-xs-10">
                                <input class="form-control" v-model="post.city" type="text" placeholder="city" />
                            </div>
                        </div>
                        <div class="input-group row">
                            <div class="col-xs-2 col-form-label">
                                <label for="state">State: </label>
                            </div>
                            <div class="col-xs-10">
                                <select class="form-control" v-model="post.state" name="state">
                                    <option v-for="state in states" :value="state.value">{{state.name}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                      <div class="input-group row">
                          <div class="col-xs-2 offset-xs-5">
                              <button class="btn btn-primary" @click="submitPost">Submit</button>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
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
                street: null,
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
.card {
  margin-top: 2em;
}
</style>
