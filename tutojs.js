/**
 * Pour ce tuto, tu peux copier / coler le code js direct dans la console de ton navigateur, ça devrait marcher
 */

/* ####### 1 Les objets

JS VS PHP :
en php on peut faire 2 types de tableau :

// tableau classique :
['salut', 'mdr']

// tableau associatif :
['test1' => 'salut', 'test2' => 'mdr']

y'en a un qui aura des clefs, l'autre non.
*/

// en js on peut faire que des tableaux classiques :
['salut'];
/*
Tu vas me dire "pk on peut aps faire de tableau associatif c'est dla merde"
ba on peut mais c'est pas pareil, on appelle ça des objets, c'est la nature même du js.
ça va ressembler à ça :
*/
{
  test1: 'mdr',
  test2: 'ntm',
}

// ######## 2 les variables
// ton objet tu peux le stocker dans une variable, tu fais :
let variable = {
  test1: 'mdr',
  test2: 'ntm',
}

// Tu peux faire
console.log(variable.test1);
// ça va te retourner 'mdr' dans la console du navigateur qui run ce code

// En js, quand une variable ne change pas de valeur, on prend l'habitude de la définir en tant que constante :
const variable2 = {
  test1: 'mdr',
  test2: 'ntm',
};

// Ensuite tu peux faire
console.log(variable2.test1);
// ça retourne 'mdr' aussi

// Si tu te rapelles des cours sur les pointeurs en C c'est cool.

// EN js une constante c'est une variable qui pointe vers une unique case mémoire tout sa vie.

// donc tu peux PAS faire ça :
const a = 1;
a = 2;
// car tu changes le pointeur

// Par contre tu peux faire ça
const b = {
  couleur: 'bleu'
};
b.couleur = 'noar';
// car tu change pas le pointeur, tu changes juste la valeur d'un sous pointeur

/*
########### 3 functions anonymes.
En php ça existe mais c'est peu utilisé : ça s'apelle des closures
En js c'est très très courant.
*/

// Fonction pas anonyme :
function salut() {
  return 'fdp';
}
// Fonction anonyme :
function () {
  return 'fdp'
}

// _______________________________

/*
a quoi ça sert tu vas me dire ?
c'est pour des fonctions que tu vas utiliser à un seul endroit,
c'est pour gagner du temps,
c'est pour facilement les placer dans des objets
c'est utile pour les call back, si t'as fait du jquery ou des events js, t'as surement vu :
*/
document.body.addEventListener('click',function()  {
  alert('suce ma bite');
});
/**
 * Ce code permet de lire l'évènement 'click' sur le tag html 'body'
 * et quand tu clic, ça appelle la fonction qui fait l'alert
 * tu vas me dire "pk le mettre dans une fonction et pas faire
 */
document.body.addEventListener('click', alert('suce ma bite'));
// et ba test de faire ça : suce ma bite sera appellé directement
// quand le moteur javascript lis la ligne : il execute direct le code

// _______________________________

/* On peut mettre  des fonctions anonymes dans les objets :*/
const personnage = {
  nom: 'damienpd',
  courir: function() {
    alert('il cours');
  },
};
// ici on peut faire :
console.log(personnage.nom);
// ça retourne damienpd
// et on peut faire
personnage.courir();
// ça va faire une alerte "il cours"

// ############ 4 les diffèrentes façons pour créer des fonctions.
// voici x façon de faire la même fonction js :
function a(arg) { return arg};
const a = function (arg) { return arg};
const a = (arg) => {return arg};
const a = arg => {return arg};
const a = arg => arg;
// dans tous les cas, si tu fais :
a('enculé');
// ça te répond 'enculé'


// ________________________
// ### 5 les imports / export
// en js moderne, il y  une notion de modules, ça va permettre de gérer du code dans plusieurs fichier.
// pour appeller un module il faut l'importer. Mais pour l'inporter il faut déjà l'exporter.

// enfant.js
export const salut = 'coucou';
export const couille = {
  a: 'lol'
};
export class GrossePute {

}
// on a exporté 3 objets diffèrent : une variable string, un objet javascript et une classe

// parent.js
import [CE QUE JE VEUX IMPORTER] from './enfant' // inutile de préciser .js il se débrouille

// pour importer  ce qu'on veut on fait
import {salut, couille, GrossePute} from './enfant';

// on peut faire
console.log(salut)
console.log(couille.a)
new GrossePute();

// On peut aussi faire :
import {GrossePute as GrosseSaloppe} from './enfant';
// là on renomme juste grossepute en grossesaloppe, on peut donc utiliser comme ça :
new GrosseSaloppe();


// __________________ exports par defaut
// quand un fichier n'exporte qu'un truc, on est pas obligé de donner un nom, dans ce cas on fait :

// fils :
const message = 'Salut';
export default message;
// parent :
import LeNomQueJeVeux from './fils';
console.log(LeNomQueJeVeux);

// a retenir :
// importer un default : on met pas d'accolade
// importer un objet nommé : on emt des accolades

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/export
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import

// _______________________________
// _______________________________
// _______________________________ /!\
// _______________________________ /!\ là c'est chaud...
// _______________________________ /!\
// _______________________________


// Maintenant qu'on sait tout ça, on analyse le code :
new Vue({
  render: createElement => createElement(App)
})

// on peut découper ça en :
const config = {
  render: createElement => createElement(App)
}
new Vue(config);

// Annalysons donc la config :

{
  render: createElement => createElement(App)
}
// c'est un objet
// portant un element "render"
// qui appelle une fonction anonyme
// avec un paramètre 'createElement'
// et renvoie createElement(App)
// App étant le truc qu'on à importé plus haut
// ça peut donc devenir
{
  render: function (createElement) { return createElement(App)}
}

// C'est Vue lui même qui va appeler la fonction render et rendre l'application grâce à sa propre fonction createElement qu'il va envoyer

// Si t'as pas compris c'est dommage, mais c'ets chaud à expliquer rapidement,

// Regarde la doc mozilla elle est bien, les mots clef à comprendre / maitriser sont :
// 1) fonction
// 2) fonction anonyme
// 3) closure
// 4) const
// 5) objet
// 6) evènement

// En avancé tu as ça :
// 1) portée des variables (pour choisir entre const let et var)
// 2) arrow fonctions (pour comprendre la diff entre les fonctions : "function() {}" et "()=>{}"
// 3) callback (c'est iune fonctionne anonyme en réponse à un évènement
