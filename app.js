const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      cat: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/A_kitten_on_the_lawn_%28Pixabay%29.jpg/640px-A_kitten_on_the_lawn_%28Pixabay%29.jpg",
    };
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    inputName(event) {
      this.name = event.target.value;
    },
    message() {
      alert("Form submitted!!");
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    reset() {
      this.counter = 0;
    },
  },
});

app.mount("#events");
