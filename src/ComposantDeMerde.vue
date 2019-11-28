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
    'la-merde-de-chiasse',
    // comme dans app.vue, on déclare une varibale
    {
    data: () => {
      return {
        message: 'amie' // on renvoit un message
      }
    }
  });
</script>
