const app = Vue.createApp({
    data() {
        return {
            pictureGallery: [
                { name: 'About Mariel', url: 'visuals/about-me.png' },
                { name: "Mariel's Dreams", url: 'visuals/dream-board.jpg' },
                { name: "Picture of Mariel", url: 'visuals/picture.jpg' }
            ]
        }
    }
})
app.mount('#app')

const feedback = Vue.createApp({
    data() {
        return {
            feedback: {
                name: "",
                email: "",
                message: "",
            },
            submitted: false,
        };
    },
    methods: {
        submitFeedback() {
            console.log("Feedback submitted:", this.feedback);
            this.submitted = true;

            this.feedback = {
                name: "",
                email: "",
                message: "",
            };
        },
    },
});

feedback.mount("#feedback");