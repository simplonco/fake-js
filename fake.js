// Le HTML sert à definir du contenu, le css à lui attribuer un style.
// Le javascript sert à faire des actions avec ce contenu.
// Un joli code doit penser le javascript comme de jolis petites phrases
// Des sujets (variable), des verbes (function), des objets (variable)

// Les variables ont des 'types'.
// De la même façon qu'on fait une liste avec les ingrédients d'une recette avant de les utiliser.
// Il faut lister une variable avant de l'utiliser. On appelle ça une 'déclaration'.
// Le type 'string' est une chaine de caractère et est entouré de guillemets.
// On peut compter la longueur d'un string, le couper à différents endroits, remplacer certains caractère
// Egale ou différent : a==b, a!=b
// Une variable se déclare normalement avec 'var'. Sa valeur peut varier, d'ou le nom variable.
// Pour notre exemple exemple nous allons la déclarer en utilisant 'ce, cet, cette'.
CET arbitre = 'Robert';

// Le type 'num' est un chiffre. int est entier et float a des décimals.
// On peut faire des calculs avec les chiffres et les compararer entre eux.
// Egale ou différent : a==b, a!=b
// Mais aussi plus petit ou plus grand : a<b, a>b
CETTE chance = 0.7;

// Le type 'boolean' prend une valeur 'true' ou 'false', une sorte de oui/non
CETTE victoire = non;

// Un objet peut contenir des fonctions et des variables.
CETTE equipe = {

  // Il y a un type de variables qu'on appelle des Array. On peut connaitre leur longueur grâce à Array.length()
  joueurs : ['Pierre', 'Carla', 'Djebril', 'Juan', 'Soledad', 'Ahmed', 'Denise', 'Amina', 'Steve', 'Malik' ],

  entraineur: 'Sylvie',

  buts: 0,

  attaque: ACTION (joueur) {
    // Javascript a plusieurs objets natifs
    // Dont l'objet Math qui a plusieurs function.
    // Une de ses function est Math.random() qui renvoit un chiffre entre 0 et 1.
    CETTE tentative = CHIFFRE-AU-HASARD-ENTRE-0-ET-1;
    SI (tentative > chance) {
      console.log("l'attaquant " + joueur + " a marqué un but.");
      this.buts++;
      SI ( this.buts > 2 ) {
        victoire = oui;
        console.log("L'equipe a gagnée.");
      }
    }
    SINON {
      console.log("l'attaquant " + joueur + " est hors jeu.")
    }
  },

  defense: ACTION (joueur) {
    CETTE tentative = CHIFFRE-AU-HASARD-ENTRE-0-ET-1;
    SI (chance < tentative) {
      console.log("le défenseur " + joueur + " a fait une faute. " + arbitre + " lui met un carton jaune.");
    }
    SINON {
      console.log("l'attaquant " + joueur + " bloque l'adversaire.");
    } 
  }

};

CE maillot = 0;

// Il y a des boucles 'for(i=0;i<n;i++) {}'. Penser 'à partir de...et tant que......j'ajoute...'
A-PARTIR-DE (maillot = 0; ET-TANT-QUE maillot < equipe.LONGUEUR; J-AJOUTE-UN maillot) {

  CE joueur = equipe.joueurs[maillot];

  // Il y a des conditions qui s'écrivent if {} else {}.
  SI ( maillot < 5 ) {
    equipe.attaque(joueur);
  }
  SINON {
    equipe.defense(joueur);
  }

  // Pour mettre fin à une action/fonction à un moment précis on peut utiliser : return
  // Pour une boucle on utilise : break
  SI ( victoire == oui ) SORS-DE-LA-BOUCLE;

};