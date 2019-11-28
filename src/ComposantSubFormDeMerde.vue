<template>
  <form
    id="app"
    @submit="checkForm"
    action="https://vuejs.org/"
    method="post"
  >

<!--    on met pas de ul dans des p, on les met dans des div-->
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>

<!--    limite vire tous tes <p> et met des div c'est plus propre "p" ça veut dire "paragraphe", là c'est un champ de form par un paragraphe-->
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
      <p>Preuve que ton formulaire est réactif : Tu as {{age}} ans</p>
      <p>dans 666 ans tu auras {{Number(age) + 666}} ans</p>


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
<!--    le composant de damien ne peux pas s'appeller lui même ça ferait de la recursivité -->
<!--    <la-form-de-chiasse></la-form-de-chiasse>-->
  </form>
</template>

<!-- le code js -->
<script>
  // On charge vue car on a besoin de son taff
  import Vue from 'vue';

  // On génère un composant
  export default Vue.component(
    // là on met le nom du tag html que l'on veut utiliser
    'la-form-de-chiasse',
    // comme dans app.vue, on déclare une varibale
    {
      // el: '#subform', Vue est déjà instancié, pas besoin de le re target sur une div
      // data c'est pas un objet mais un méthode qui retourne un objet
      data: () => {return {
        errors: [],
        name: null,
        age: 18,
        movie: null
      }},
      methods: {
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
    });
</script>
