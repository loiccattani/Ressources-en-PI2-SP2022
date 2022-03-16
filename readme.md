# Ressources en Programmation pour internet II - Meteor.js

![Meteor](./images/meteor-logo.png)

Cet annuaire de ressources est destiné aux étudiant·e·s du cours [Programmation pour internet II - Meteor.js](https://applicationspub.unil.ch/interpub/noauth/php/Ud/ficheCours.php?v_enstyid=45169&v_langue=fr). Vous pouvez l'enrichir en envoyant un mail à [loic.cattani@unil.ch](mailto:loic.cattani@unil.ch?subject=Une%20nouvelle%20ressource%20en%20Meteor.js!) ou le partager avec [https://bit.ly/rmeteor22](https://bit.ly/rmeteor22).

Il s'agit d'un document vivant, il sera maintenu à jour et complété tout au long du cours

## Inscriptions

[Lien pour l'inscription au cours et à l'évaluation](https://www.unil.ch/lettres/fr/home/menuguid/etudiantes/enseignements-evaluations.html) (**Délai au 20 mars 2022**)

## Logiciels

- [VS Code](https://code.visualstudio.com/) (Editeur de code)
- [GitHub Desktop](https://desktop.github.com/) (Contrôle de version et collaboration)

### Terminal

- [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2) (**essentiel** pour PC sous Windows)
- [iTerm](https://iterm2.com/) (facultatif pour macOS)

## Meteor

- [Homepage Meteor](https://www.meteor.com/)
- [Installer Meteor](https://www.meteor.com/developers/install)
  - [Prérequis](https://docs.meteor.com/install.html#prereqs)
- [Meteor Blaze Tutorial](https://blaze-tutorial.meteor.com/)
- [Documentation Meteor](https://docs.meteor.com/#/full/)
- [Documentation Blaze](http://blazejs.org/guide/introduction.html)
- [Atmosphere](https://atmospherejs.com/) Bibliothèque de paquets Meteor

## Code Style et ESLint
Guide Meteor : [Code Style & ESLint](https://guide.meteor.com/code-style.html)  
Suit le style de codage de AirBnB : [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

Pour une intégration avec VS Code, installer d'abord l'extension "ESLint".

### Comment activer ESLint pour un projet Meteor avec Blaze ?
1. Accédez au dossier de votre projet via le terminal (Ex. : `cd code/monProjet/`)
2. Installez les paquets npm :
```
meteor npm install --save-dev @babel/eslint-parser eslint eslint-config-airbnb eslint-import-resolver-meteor eslint-plugin-import eslint-plugin-meteor
```
3. Créer un fichier `.eslintrc.json` avec ce contenu :
```js
{
  "plugins": ["meteor"],
  "extends": ["eslint:recommended", "plugin:meteor/recommended"],
  "parserOptions": {
    "ecmaVersion": 2020
  }
}
```

Avec l'extension "ESLint", l'intégration avec VS Code est prête.

Si vous souhaitez lancer ESLint séparément via le terminal, lancez la commandde `eslint .`

## Ressources UI/UX

- [Bootstrap 5](https://getbootstrap.com/)

## Markdown

- [Markdown Documentation](https://www.markdownguide.org/basic-syntax/)
- [GitHub Markdown Documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
