<style scoped>
.button {
  margin-bottom: 2%;
  margin-top: 2%;
  cursor: pointer;  
}

#content {
  background-color: white;
  padding: 1%;
  transform: translateY(10%);
  width: 80%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px grey;
}

#content input {
  border-radius: 10px;
  padding: 0.5em;
  border: 0.1em solid;
}

#input-name{
  margin-bottom: 2%;
}

textarea {
  border-radius: 10px;
  padding: 0.5em;
  border: 0.1em solid;
  overflow: hidden;
  padding: 1em;
}
</style>


<template>
  <div id="content">
    <router-link :to="{ name: 'details', params: { id: movie.id }}">
      <b-button variant="info" class="button">Retour</b-button>
    </router-link>

    <h1>Editer le film : {{movie.title}}</h1>
    <p>
      Titre :
      <b-form-input type="text" v-model="movie.title" />
    </p>

    <p>
      Année :
      <b-form-input type="date" v-model="movie.releaseDate" />
    </p>

    <p>
      Réalisateur :
      <b-form-input type="text" v-model="movie.director.first_name" id="input-name" />
      <b-form-input type="text" v-model="movie.director.last_name" />
    </p>

    <p>
      Synopsis :
      <br />
      <b-form-textarea v-model="movie.synopsis" cols="30" rows="10"></b-form-textarea>
    </p>
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
      this.$emit("deletedmovie", this.movie);
    },
    edit() {
      this.$emit("newmoviename", this.movie, this.$refs.editinput.value);
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
