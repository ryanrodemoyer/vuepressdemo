<template>
  <div>
    <p class="demo">{{example}}</p>
    <p class="demo">{{ui.idt}}</p>
  </div>
</template>

<script>
export default {
  name: "Example",
  async created() {
    this.getIdentity();

    await this.$store.dispatch("UPDATE_EXAMPLE");
  },
  data() {
    return {
      ui: {
        idt: null
      }
    };
  },
  computed: {
    example() {
      return this.$store.getters.example;
    }
  },
  methods: {
    getIdentity() {
      // const result = await this.$http.get(
      //   "https://stupefied-hypatia-9d9962.netlify.com/.netlify/functions/identity-test"
      // );
      // this.ui.idt = result.data;

      const self = this;
      self.$http
        .get(
          "https://stupefied-hypatia-9d9962.netlify.com/.netlify/functions/demofunction"
        )
        .then(response => {
          self.ui.idt = response.data;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>