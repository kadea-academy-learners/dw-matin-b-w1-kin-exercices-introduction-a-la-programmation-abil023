// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M5 — La vitre teintée (portée de bloc) (Niveau 2 — Moyen)

Objectif : prédire où une variable existe et corriger une ReferenceError.

Consignes :
1. Le code ci-dessous est déjà recopié dans la zone de travail : écris tes prédictions en commentaire avant de l'exécuter.
2. Exécute-le : pourquoi la fonction afficher ne s'exécute-t-elle jamais ?
3. Corrige le code pour que tout s'affiche sans erreur, sans déplacer les déclarations dans les blocs.

Code fourni :
const ville = 'Kinshasa';
if (true) {
  const commune = 'Gombe';
  console.log(ville);
}
console.log(commune);

const afficher = () => {
  const secret = 'pondu';
  return secret;
};
console.log(afficher());
console.log(secret);

Résultat attendu :
avant correction : Kinshasa puis ReferenceError: commune is not defined.
après correction : tout s'affiche (Kinshasa, Gombe, pondu…) sans aucune erreur.

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// Mes prédictions (avant d'exécuter) :
// 1. console.log(ville) affiche 'Kinshasa' car 'ville' est dans la portée globale.
// 2. console.log(commune) en dehors du if lance une ReferenceError car 'commune' est confinée au bloc if (portée de bloc).
// 3. afficher() ne s'exécute jamais car la ReferenceError stoppe net l'exécution du programme JavaScript.

// Code corrigé :
const ville = 'Kinshasa';
if (true) {
  const commune = 'Gombe';
  console.log(ville);
  console.log(commune); // affiché là où commune existe (dans le bloc)
}


const afficher = () => {
  const secret = 'pondu';
  return secret;
};

console.log(afficher());
// console.log(secret); retiré car secret n'existe que dans le scope de afficher


