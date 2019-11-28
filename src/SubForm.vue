<!--Ici c'est app.vue, un fichier .vue c'est simplement un fichier .html, ils ont juste changer en .vue, c'est tout-->

<!-- par habitude, les developpeur vue ont tendance à tout mettre dans un seul fichier-->
<!--dans l'ordre tu as : le code html, le code js, le code css-->
<!--on pourrait écrire dans un autre ordre, ou split dans diffèrents fichiers c'est comme on veut.-->


<!--
partie 1 : le template : on y met le code html que l'on veut rendre,
on peut y placer des variables que l'on va définir dans le code js plus bas
-->
<template>
  <form
  id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
>

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="name">Name</label>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
  </p>

  <p>
    <label for="age">Age</label>
    <input
      id="age"
      v-model="age"
      type="number"
      name="age"
      min="0"
    >
  </p>

  <p>
    <label for="movie">Favorite Movie</label>
    <select
      id="movie"
      v-model="movie"
      name="movie"
    >
      <option>Star Wars</option>
      <option>Vanilla Sky</option>
      <option>Atomic Blonde</option>
    </select>
  </p>

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>
    <la-form-de-chiasse></la-form-de-chiasse>
</form>
<!--    Ensuite on appelle une balise html qui éxiste pas nativement, c'est un composant vue -->

</template>

<!-- le code js -->
<script>
  import ComposantSubFormDeMerde from './ComposantSubFormDeMerde';

  // on exporte un object sans nom donc avec un nom "default"
  export default {
    name: "SubForm", // le nom du notre app
    components: { // liste les composants que l'on utilise dans notre app
      // Vue va voir ce composant et donc le charger (il va donc faire le lien avec la balise la-form-de-chiasse)
      ComposantSubFormDeMerde,
    },
    el: '#subform',
    data: {
        errors: [],
        name: null,
        age: null,
        movie: null
    },
    methods:{
        checkForm: function (e) {
        if (this.name && this.age) {
            return true;
        }

        this.errors = [];

        if (!this.name) {
            this.errors.push('Name required.');
        }
        if (!this.age) {
            this.errors.push('Age required.');
        }

            e.preventDefault();
        }
    }
  };
</script>

<!-- Le css, ici on fait du scss  (c'est du css avancé) le mot clef scoped ça dit que le code css n'a pas d'inpact ailleur-->
<!--si dans ton app t'as une div avec comme class "container" il n'aura pas le style défini ici -->
<style lang="scss" scoped>
  .container {
    color: green;
  }
</style>

<!-- Vas voir le code de ./ComposantDeMerde.vue -->
