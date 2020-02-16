<style scoped>
#title {
  text-align: center;
}

#input_rate{
  width: 30%;
  margin:auto;
  margin-top: 3%;
}

.button {
  margin-top:2%;
  margin-left:2%;
  cursor:pointer;
}

#buttonValidate {
  margin: 0 auto;
  display: block;
  margin-top: 3%;
}
</style>

<template>
  <div>
    <router-link :to="{ name: 'details', params: { id: movie.id }}">
      <b-button variant="info" class="button">Retour</b-button>
    </router-link>

    <h1 id="title">Noter le film : {{movie.title}}</h1>

    <b-form-input type="number" placeholder="Note en dessous de 5 uniquement" id="input_rate"/>

    <router-link  :to="{ name: 'details', params: { id: movie.id }}">
      <b-button variant="info" id="buttonValidate" class="button" v-on:click="updateRate">Noter</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Rate",
  props: {
    msg: String,
    rate: Number,
  },
  methods: {
    updateRate() {
      if(document.getElementById("input_rate").value != "" && document.getElementById("input_rate").value <= 5 ) {
      this.rate = document.getElementById("input_rate").value;
      this.sendRate();
      }
    },
    sendRate() {
      window.shared_data.movies[this.$route.params.id].rating = this.rate;
    },
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
