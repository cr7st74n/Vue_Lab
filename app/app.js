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
                // this.message = this.message +" " +this.name +"!"
                this.count++;
                console.log(this.count);
             }

        },
        ClearExclamation(){
            // this.message = "hi student";
            this.count = 0
        }
    },
    computed: {
        messageWithExcPoint(){
            let messageWpoints = this.message;
            for (let x=0 ; x < this.count; x++){
                messageWpoints = messageWpoints +" " +this.name +"!"
            }
            return messageWpoints
        }
    }
})

app.mount("#app");