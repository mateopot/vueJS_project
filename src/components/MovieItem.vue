<style scoped>
.button {
 margin-left: 2%;
 cursor:pointer;
}
</style>

<template>
  <div>
    {{movie.title}} ({{movie.releaseDate}})
    <router-link :to="{ name: 'details', params: { id: movie.id }}">
      <b-button variant="info" size="sm" class="button">Détails</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: Object
  },
  methods: {}
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
