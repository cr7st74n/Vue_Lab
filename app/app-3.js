const app = Vue.createApp({
    data(){
        return{
            name: "Hat" ,//empty data
            unitPrice: 4.89,
            quantity: 1
        }
    },
    computed:{
        total(){
            let totalPrice =this.quantity * this.unitPrice
            return totalPrice.toFixed(2);
        }
    }
});

app.mount("#app");