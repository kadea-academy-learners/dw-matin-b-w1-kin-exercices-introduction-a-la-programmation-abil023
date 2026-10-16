// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F2 — Le convertisseur de saisie (Niveau 1 — Facile)

Objectif : comprendre qu'une saisie est du texte et la convertir avec Number().
Contexte : un formulaire de recharge mobile money renvoie toujours le montant sous forme de texte.

Consignes :
1. Déclare const saisie = '2500'; et affiche saisie + 500.
2. Explique en commentaire pourquoi le résultat est faux.
3. Corrige avec Number() et affiche le bon total.
4. Avant de les tester, écris tes prédictions pour Number(''), Number('abc'), Number(' 42 ') et Number(true), puis vérifie.

Résultat attendu :
2500500, puis 3000 ; les prédictions vérifiées : 0, NaN, 42, 1.

Recherche (à rédiger dans RECHERCHES.md) :
Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


// Explication du bug :
// saisie est de type string. L'opérateur + effectue une concaténation du texte ('2500' + 500 = 2500500) au lieu d'une addition numérique.
const saisie = '2500';
console.log(saisie + 500);

// Correction avec Number() :
console.log(Number(saisie) + 500);

// Prédictions avant de tester :
// Number('') -> 0 (chaîne vide convertie en 0)
// Number('abc') -> NaN (texte non numérique)
// Number(' 42 ') -> 42 (les espaces autour sont ignorés)
// Number(true) -> 1 (le booléen true vaut 1)
console.log(Number(''), Number('abc'), Number(' 42 '), Number(true));
