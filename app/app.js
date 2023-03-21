const app =  Vue.createApp({
    data(){
        return{
            message:"hi student",
            name:"cristian",
            age: 24,
            pet:"dog",
            limit_names: 10,
            count: 0
        }
    },
    methods:{
        addExclamation(){
             if (this.limit_names === this.count){
                console.log('good');
                alert("No more names !")
             }else{
                this.message = this.message +" " +this.name +"!"
                this.count++;
                console.log(this.count);
             }

        }
    }
})

app.mount("#app");