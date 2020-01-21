<template>
  <p class="demo">{{example}}</p>
</template>

<script>
export default {
  name: "Example",
  async created() {
    // if (this.$store.getters.length < 1)
    {
      await this.$store.dispatch("UPDATE_EXAMPLE");
    }
  },
  computed: {
    example() {
      return this.$store.getters.example;
    }
  }
};
</script>