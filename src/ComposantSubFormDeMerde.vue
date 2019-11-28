<template>
  <h1>
    tu es une {{message}}
  </h1>
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
  });
</script>
