const app = Vue.createApp({
    data(){
        return{
            name: "" //empty data
        }
    },
    methods:{
        clearText(){
            this.name = ""
        }

    }
});

app.mount("#app");