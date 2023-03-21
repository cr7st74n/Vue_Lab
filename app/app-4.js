const app = Vue.createApp({
    data(){
        return{
            newComponent:"",
            ComputerList: ["graphic card", "motherboard","ram","processor"]
        }
    },
    methods:{
        addTolist(){
            this.ComputerList.push(this.newComponent);
            this.newComponent = ""
        }

    },
    computed:{
    }
});

app.mount("#app");