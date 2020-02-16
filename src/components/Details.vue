<style scoped>
#l-button {
  margin-left: 2%;
}

#f-button {
  margin-top: 2%;
  margin-bottom: 2%;
}

.button {
  cursor: pointer;
}

.button:hover {
  opacity: 0.6;
  cursor: pointer;
}

#content {
  background-color: white;
  margin-bottom: 2%;
  padding: 1%;
  transform: translateY(15%);
  box-shadow: 5px 5px 5px 5px grey;
  width: 80%;
  margin: auto;
  border-radius: 10px;
}
span {
  font-weight: bold;
  font-size: 1.1em;
}
</style>

<template>
  <div id="content">
    <router-link :to="{ name: 'home'}">
      <b-button variant="info" class="button" id="f-button">Retour</b-button>
    </router-link>

    <h1>Détails du film : {{movie.title}}</h1>

    <p>
      <span>Année :</span>
      {{movie.releaseDate}}
    </p>

    <p>
      <span>Réalisateur :</span>
      {{movie.director.first_name}} {{movie.director.last_name}}
    </p>

    <p>
      <span>Synopsis :</span>
      {{movie.synopsis}}
    </p>

    <p v-if="movie.rating != null">
      <span>Note :</span>
      {{movie.rating}}
    </p>
    <p v-else>
      <router-link :to="{ name: 'rate', params: { id: movie.id }}">
        <b-button variant="info" class="button">Noter le film</b-button>
      </router-link>
    </p>

    <router-link :to="{ name: 'edit', params: { id: movie.id }}">
      <b-button variant="info" class="button">Editer</b-button>
    </router-link>

    <router-link :to="{ name: 'home'}">
      <b-button variant="info" v-on:click="deletemovie" id="l-button" class="button">Supprimer</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Edit",
  props: {
    msg: String
  },
  methods: {
    deletemovie() {
      window.shared_data.movies.splice(this.$route.params.id, 1);
    }
  },
  data: function() {
    return {
      movie: window.shared_data.movies[this.$route.params.id]
    };
  }
};
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
