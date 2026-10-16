# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Oui, il est tout à fait possible d'enchaîner plusieurs opérateurs ternaires en imbriquant une condition dans la branche vrai ou faux d'une autre. Cependant, cette pratique est fortement déconseillée car elle nuit gravement à la lisibilité et à la maintenance du code. Dès qu'il y a plus de deux branches, une structure if / else if / else ou un switch est beaucoup plus explicite et évite les erreurs de logique.

**Mon test dans la console :**

```js
const score = 14;
const appreciation = score >= 16 ? 'Très bien' : score >= 10 ? 'Passable' : 'Insuffisant';
console.log(appreciation); // affiche : "Passable"
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

On peut retirer les parenthèses autour des paramètres d'une fonction fléchée uniquement lorsqu'il y a exactement un seul paramètre (s'il y en a zéro ou au moins deux, les parenthèses restent obligatoires). On peut supprimer les accolades et le mot-clé return lorsque le corps de la fonction est composé d'une seule expression, qui bénéficie alors d'un retour implicite direct sur une seule ligne.

**Mon test dans la console :**

```js
const doubler = x => x * 2;
console.log(doubler(5)); // affiche : 10
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Le mot-clé continue permet d'interrompre immédiatement l'itération en cours d'une boucle pour passer directement à l'itération suivante (en incrémentant le compteur et en réévaluant la condition). La différence avec break est que break met immédiatement et définitivement fin à la boucle entière, alors que continue ne saute que le tour courant sans interrompre les suivants.

**Mon test dans la console :**

```js
for (let i = 1; i <= 4; i++) {
  if (i === 2) continue;
  console.log(i); // affiche : 1, 3, 4
}
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/continue

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

FizzBuzz est célèbre en entretien de recrutement car c'est un test simple et redoutablement efficace pour filtrer les candidats qui prétendent savoir coder sans maîtriser les bases fondamentales. Il évalue en quelques minutes la capacité à combiner une boucle, le calcul de reste par modulo (%) et surtout la rigueur dans l'ordre d'évaluation des conditions logiques (cas spécifique multiple de 3 ET de 5 en premier).

**Mon test dans la console :**

```js
const n = 15;
const res = (n % 3 === 0 && n % 5 === 0) ? 'MalewaWewa' : (n % 3 === 0) ? 'Malewa' : (n % 5 === 0) ? 'Wewa' : n;
console.log(res); // affiche : "MalewaWewa"
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

On applique la méthode toLocaleString('fr-FR') directement sur la valeur numérique. En spécifiant la locale française ou en utilisant les paramètres régionaux du système, cette méthode formate automatiquement le nombre en insérant un espace insécable entre les groupes de milliers, ce qui rend les montants financiers beaucoup plus lisibles pour l'utilisateur.

**Mon test dans la console :**

```js
const montant = 75000;
console.log(montant.toLocaleString('fr-FR')); // affiche : "75 000"
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

En JavaScript moderne, il existe exactement 8 valeurs falsy : le booléen false, le nombre 0, le nombre négatif -0, la valeur BigInt 0n, la chaîne de caractères vide "", les valeurs null et undefined, ainsi que NaN (Not a Number). Toutes les autres valeurs existantes dans le langage sont truthy, y compris un tableau vide [], un objet vide {} ou la chaîne avec un espace " ".

**Mon test dans la console :**

```js
const listeFalsy = [false, 0, -0, 0n, "", null, undefined, NaN];
console.log(listeFalsy.every(v => !v)); // affiche : true
```

**Source :** https://developer.mozilla.org/fr/docs/Glossary/Falsy

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

L'opérateur de coalescence des nuls (??) renvoie l'opérande de droite uniquement si celle de gauche vaut strictement null ou undefined. Il diffère de l'opérateur logique OU (||) car ce dernier renvoie la valeur de droite dès que l'opérande de gauche est falsy. Ainsi, avec ||, la valeur 0 ou la chaîne vide "" est écrasée par la valeur par défaut, alors qu'avec ?? elle est correctement conservée.

**Mon test dans la console :**

```js
console.log(0 || 'aucun'); // affiche : "aucun" (piège : 0 est falsy)
console.log(0 ?? 'aucun'); // affiche : 0 (correct : 0 n'est ni null ni undefined)
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Le mot-clé var est banni du code JavaScript moderne car il ignore la portée de bloc et ne respecte que la portée de fonction, ce qui permet à des variables déclarées dans un if ou une boucle de fuiter à l'extérieur. De plus, le mécanisme de hoisting (hissage) déclare var au sommet de son scope en l'initialisant à undefined, masquant des erreurs qui seraient immédiatement détectées avec let ou const grâce à la Temporal Dead Zone (TDZ).

**Mon test dans la console :**

```js
if (true) { var fuite = 'danger'; }
console.log(fuite); // affiche : "danger" (la variable s'échappe du bloc)
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/var

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

L'ASI (Automatic Semicolon Insertion) est un mécanisme par lequel l'analyseur syntaxique de JavaScript ajoute automatiquement un point-virgule là où il estime qu'une instruction se termine. Lorsqu'une instruction return est immédiatement suivie d'un saut de ligne, l'ASI insère un point-virgule juste après return, ce qui transforme le code en return; et renvoie undefined sans jamais évaluer l'expression écrite sur la ligne suivante.

**Mon test dans la console :**

```js
const f = () => {
  return
  'bonjour';
};
console.log(f()); // affiche : undefined
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Les opérateurs d'affectation composée combinent une opération arithmétique ou binaire avec une assignation de variable. Les principaux sont += (addition, x += 5), -= (soustraction, x -= 2), *= (multiplication, x *= 3), /= (division, x /= 2), %= (reste modulo, x %= 4) et **= (exponentiation, x **= 2). Ils permettent d'écrire un code plus concis et expressif sans répéter le nom de la variable.

**Mon test dans la console :**

```js
let total = 10;
total += 5; // 15
total *= 2; // 30
console.log(total); // affiche : 30
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Assignment_operators

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

La boucle while teste sa condition avant chaque itération : si la condition est fausse au départ, le corps de la boucle n'est jamais exécuté (0 tour). En revanche, la boucle do...while exécute son corps au moins une fois avant de vérifier la condition. À l'étape 4, avec une batterie initiale de 15 %, le do...while ferait quand même un premier tour complet, réduisant la batterie à 0 % et comptant 1 heure avant de s'arrêter.

**Mon test dans la console :**

```js
let batt = 15;
let h = 0;
do {
  batt -= 15;
  h++;
} while (batt > 20);
console.log(`h: ${h}, batt: ${batt}`); // affiche : "h: 1, batt: 0"
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/do...while

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

En JavaScript, les nombres sont encodés en virgule flottante double précision selon la norme standard IEEE 754. Certaines fractions décimales comme 0.1 ou 0.2 ne possèdent pas de représentation binaire exacte finie (ce sont des nombres périodiques en binaire), ce qui engendre une infime imprécision d'arrondi (0.1 + 0.2 donne 0.30000000000000004). La méthode toFixed() est un piège car elle renvoie une chaîne de caractères (string) et non un nombre, ce qui transforme les additions suivantes en concaténations textuelles inattendues.

**Mon test dans la console :**

```js
console.log(0.1 + 0.2); // affiche : 0.30000000000000004
const arrondi = (0.1 + 0.2).toFixed(1);
console.log(typeof arrondi, arrondi + 5); // affiche : string "0.35" (au lieu de 5.3)
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

La méthode .reduce() applique une fonction réductrice à chaque élément d'un tableau afin de condenser l'ensemble des éléments en une seule valeur finale. Elle prend en paramètre un accumulateur (qui conserve le résultat intermédiaire de chaque tour) et l'élément courant, ainsi qu'une valeur initiale optionnelle. Pour calculer le total des heures, on l'utilise ainsi : const total = heuresSemaine.reduce((acc, h) => acc + h, 0).

**Mon test dans la console :**

```js
const heures = [8, 9, 10, 8, 7, 6];
const total = heures.reduce((acc, h) => acc + h, 0);
console.log(total); // affiche : 48
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Pour restreindre l'affichage de console.table() à certaines propriétés spécifiques, on passe un second argument sous la forme d'un tableau contenant les noms des colonnes souhaitées : console.table(inventaire, ['nom', 'stock']). Lorsqu'aucun élément ne satisfait le prédicat, la méthode .find() renvoie undefined, tandis que la méthode .filter() renvoie toujours un nouveau tableau vide ([]).

**Mon test dans la console :**

```js
const items = [{ nom: 'A', stock: 10 }, { nom: 'B', stock: 0 }];
console.table(items, ['nom', 'stock']);
console.log(items.find(x => x.stock > 100)); // affiche : undefined
console.log(items.filter(x => x.stock > 100)); // affiche : []
```

**Source :** https://developer.mozilla.org/fr/docs/Web/API/console/table_static

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Pour classer de la plus grande à la plus petite moyenne, on fournit une fonction de comparaison : bulletin.sort((a, b) => b.moyenne - a.moyenne). Par défaut, .sort() trie le tableau sur place en mutant directement l'original afin d'optimiser l'utilisation de la mémoire. Pour éviter d'altérer l'original, on peut cloner le tableau au préalable avec le spread operator ([...bulletin].sort(...)) ou utiliser la méthode moderne .toSorted().

**Mon test dans la console :**

```js
const notes = [15, 9.3, 17, 12];
const trie = [...notes].sort((a, b) => b - a);
console.log(trie); // affiche : [17, 15, 12, 9.3]
console.log(notes); // affiche l'original intact : [15, 9.3, 17, 12]
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

La recherche dichotomique (ou binaire) est un algorithme efficace qui consiste à diviser par deux l'espace de recherche à chaque tentative en proposant toujours la médiane de l'intervalle restant. Comme 2^7 = 128, sept divisions successives par 2 réduisent un intervalle de 100 possibilités à un seul nombre précis (100 -> 50 -> 25 -> 12 -> 6 -> 3 -> 1). Ainsi, 7 essais au maximum garantissent mathématiquement de trouver le bon nombre.

**Mon test dans la console :**

```js
let taille = 100, divisions = 0;
while (taille > 1) {
  taille = Math.floor(taille / 2);
  divisions++;
}
console.log(divisions); // affiche : 6 (avec l'essai initial, 7 coups suffisent)
```

**Source :** https://developer.mozilla.org/fr/docs/Glossary/Algorithm

**IA utilisée ? (prompt + vérification sur MDN) :** non
