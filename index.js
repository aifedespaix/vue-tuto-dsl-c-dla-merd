// Bienvenue dans index.js fdp

// tout d'abord on importe "vue"
// le "from vue" tu peux te demander où est ce code ?
// c'est dans /node_modules/vue
// c'est npm qui à mis ce code ici grace au npm install
// Vue c'est une classe qui va te permettre de créer des objets Vue
import Vue from 'vue'

// Ensuite on inclus App
// App c'est le tout premier composant
// il sera le composant racine de l'application vue
// On l'importe depuis './src/App.vue'
// tout import commençant par './' veut dire que c'est un fichier qui n'est pas dans node_modules
import App from './src/App.vue'
import SubForm from './src/SubForm.vue'

// on a donc importé deux objets : Vue et un composant.
// Ils vont permettre d'instancier vue


// On créer un nouveau Vue() c'est un instance de vue
// /!\ Pour comprendre le paramètre envoyé dans Vue : regarde le ./tuto_js.js /!\
new Vue({
  // Render c'est ce que vue doit rendre, on lui demande de créer un élément provenant de app
  render: createElement => createElement(App, SubForm) // (arrow function)**
})
// L'objet renvoyé par vue possède une méthode '$mount' que l'on apelle avec en paramètre l'id de l'élément html parent de notre App
.$mount('#app', '#subform');

// là c'est chaud car c'est le launcheur
// comprendre ça c'est comme comprendre comment teliway s'instancie
// c'est donc pas 100% utile au début, mais au long terme c'est éssentiel

// maintenant rdv dans src/App.vue
