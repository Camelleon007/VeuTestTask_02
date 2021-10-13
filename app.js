const app = Vue.createApp({
    data() {
        return {
            output: ''
        }
    },
    methods: {
        registerText(event) {
            this.output = event.target.value;
        },
        showAlert() {
            alert('My alert in this task!')
        }
    }
});

app.mount('#assignment');

