var eventBus = new Vue();

Vue.component('final-project', {
    props: {
  	    vip: {
    	    type: Boolean,
            require: true
        }
    },
	template: `
        <div class="product">
            <div class="productImg">
                <img class="imgAuba" :class="{ imageOutline: whoWon==2 }" v-bind:src="image">
            </div>

            <div class="productInfo">
                <h1 :class="{ goldenTitle: vip }">{{ title }}</h1>

                <ol class="goalList">
                    <li v-for="goal in goals" :key="goal.numGoal">{{ goal.min 
                        + " (" + goal.numGoal + ") " + " - " + goal.scorer }}</li>
                </ol>

                <p class="spoiler" v-if="whoWon == 2">Spoiler: FCB Won!</p>
                <p class="spoiler" v-else-if="whoWon == 1">Spoiler: RM Won!</p>
                <p class="spoiler" v-else>Spoiler: No one won, it ended in a tie!</p>

                <a v-on:click="linkEnter" v-bind:href="link" target="_blank">{{ description }}</a>                
            </div>
        </div>
    `,
    data(){
	    return  {
            product: "Football",
            owner: "Sebas",
            description: "Click to see final result...",
            link: "https://www.google.com/search?q=barcelona+madrid&rlz=1C1ONGR_esES972ES972&oq=rbarce&aqs=chrome.1.69i57j0i10i131i433j46i10i131i433j0i10i433j0i10i131i433j0i131i433j0i10i131i433l2j0i131i433j0i10.3222j0j7&sourceid=chrome&ie=UTF-8#sie=m;/g/11nw9v173f;2;/m/09gqx;dt;fp;1;;",
            image: "https://i.postimg.cc/hvDCbFr8/auba.jpg",
            whoWon: 2,
            goals: [
                {
                    numGoal: "0-1",
                    min: "29 min",
                    scorer: "Aubameyang"
                },
                {
                    numGoal: "0-2",
                    min: "38 min",
                    scorer: "Araújo"
                },
                {
                    numGoal: "0-2",
                    min: "47 min",
                    scorer: "Ferran Torres"
                },
                {
                    numGoal: "0-4",
                    min: "51 min",
                    scorer: "Aubameyang"
                }
            ]
        } 
    },
    methods: {
  	    linkEnter: function() {
    	    this.$emit("sum-tap-link")
        }
    },
    computed: {
  	    title() {
    	    return this.product + ' with ' + this.owner
        }
    }
})

Vue.component("fan-review", {
    template: `
  		<form class="fanForm" @submit.prevent="onSubmit">
            <div>
                <label for="name">Name:</label>
                <input class="name" v-model="name">
            </div>
            
            <div>
                <p>Who do you support?</p>
                <div class="rbStyle">
                    <input type="radio" id="FCB" value="FCB" v-model="fan">
                    <label for="FCB">FCB</label>
                </div>
                <div class="rbStyle">
                    <input type="radio" id="RM" value="RM" v-model="fan">
                    <label for="RM">RM</label>
                </div>
            </div>

            <div class="errors" v-if="errors.length">
                <p v-for="error in errors">{{ error }}</p>
            </div>

            <div>
                <input type="submit" value="Submit">  
            </div> 
     	</form>
    `,
    data() {
  	    return {
    	    name: null,
            fan: null,
            errors: []
        }
    },
    methods: {
  	    onSubmit() {
            if(this.name && this.fan)
            {
                var fanReview = {
                    name: this.name,
                    fan: this.fan
                }
                
                eventBus.$emit('review-submitted', fanReview);
                this.name = null;
                this.fan = null;
                this.errors = [];
            }
            else
            {
                if(!this.name)
                {
                    this.errors.push("Name required!");
                }
                
                if(!this.fan)
                {
                    this.errors.push("Choose a team to support!");
                }
            }
        }
    }
})

Vue.component('project-tabs', {
    props: {
        reviews: {
            type: Array, 
            required: false
        }
    },
    template: `
        <div class="proyectos">
            <div class="tabs">
                <span class="tab" 
                :class="{ activeTab: selectedTab === tab }"
                v-for="(tab, index) in tabs"
                :key="index"
                v-on:click="selectedTab = tab">
                    {{ tab }}
                </span>
            </div>

            <div v-show="selectedTab === 'Click to see final project'" class="proyectoFinal">
                <final-project :vip="vip" @sum-tap-link="updateTapLink"></final-project>

                <div class="linkCounter">
                    Link tap counter ({{ linkCounter }})
                </div>

                <div class="fanReviews">
                    <fan-review></fan-review>
                    <ul class="reviewList">
                        <p v-show="reviews.length === 0">There are no reviews!</p>
                        <li v-for="review in reviews">
                            <p>{{ review.name }}</p>
                            <p v-if="review.fan === 'FCB'">FCB fan!</p>
                            <p v-else>RM fan!</p>
                        </li>
                    </ul>  
                </div>   
            </div>
        
            <div v-show="selectedTab === 'Click to see jsFiddle projects'" class="proyectosJsFiddle">
                <iframe width="100%" height="400" src="//jsfiddle.net/sebas_21/nzk3fgo0/46/embedded/js,html,css,result/dark/" 
                allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                
                <iframe width="100%" height="400" src="//jsfiddle.net/sebas_21/pv15trn2/151/embedded/js,html,css,result/dark/" 
                allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                
                <iframe width="100%" height="400" src="//jsfiddle.net/sebas_21/puhv7eLj/65/embedded/js,html,css,result/dark/" 
                allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                
                <iframe width="100%" height="400" src="//jsfiddle.net/sebas_21/g8wars0u/59/embedded/js,html,css,result/dark/" 
                allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                
                <iframe width="100%" height="400" src="//jsfiddle.net/sebas_21/awbq21ur/28/embedded/js,html,css,result/dark/" 
                allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                
                <iframe width="100%" height="400" src="//jsfiddle.net/sebas_21/zfdske0g/69/embedded/js,html,css,result/dark/" 
                allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                
                <iframe width="100%" height="400" src="//jsfiddle.net/sebas_21/z0jpf5w3/24/embedded/js,html,css,result/dark/" 
                allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                
                <iframe width="100%" height="400" src="//jsfiddle.net/sebas_21/4rwy5ugv/36/embedded/js,html,css,result/dark/" 
                allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                
                <iframe width="100%" height="400" src="//jsfiddle.net/sebas_21/5puy0dt9/48/embedded/js,html,css,result/dark/" 
                allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                
                <iframe width="100%" height="400" src="//jsfiddle.net/sebas_21/xswcjr8n/150/embedded/js,html,css,result/dark/" 
                allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: ['Click to see final project', 'Click to see jsFiddle projects'],
            selectedTab: 'Click to see final project',
            vip: true,
            linkCounter: 0
        }
    },
    methods: {
        updateTapLink: function() {
            this.linkCounter += 1
        }
    }
})

var app = new Vue(
{
    el: "#app",
    data: {
        reviews: []
    },
    mounted() {
        eventBus.$on('review-submitted', fanReview => {
            this.reviews.push(fanReview)
        })
    }
})