const app = Vue.createApp({
    data(){
        return{
            name: "" //empty data
        }
    },
    methods:{
        clearText2(){
            this.name = ""
        }

    }
});

app.mount("#app");