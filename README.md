# Icogen Quick Start


Ceci est un petit projet basé sur Electron ([Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start)) créé dans le but de répondre à la problématique suivante : être noté sur le cours d'Eletron.

Les principaux fichiers sont :

- `package.json` - liste des dépendances nécessaires.
- `main.js` - Fichier de lancement de l'application
- `index.html` - Page de rendu HTML
- `preload.js` - Fichier contenant la plus grande partie des fonctionnalités
- `public/js/script.js` - Les quelques autres fonctionnalités



## Thème

Faire une application avec ElectronJS permettant de générer des icones à partir d'une image présente sur votre disque.

## Comment ça marche ?

Pour cloner et utilisé Icogen, il vous faudra [Git](https://git-scm.com) et [Node.js](https://nodejs.org/en/download/) sur votre ordinateur, ainsi qu'[npm](http://npmjs.com) (qui devrait être compris dans Node.js).

Depuis votre ligne de commande, faites :

```bash
# Cloner le repo
git clone https://github.com/Leamundis/icogen.git
# Direction le dossier
cd icogen
# Installation des dépendances
npm install
# Lancer l'application
npm start
```

Note : si vous utilisez Windows...Dommage pour vous!


## Ce qui fonctionne...
Presque à peu près tout, je crois...Dans la forme du moins...


## Ce qui marche...moins bien...
Voulant créer des icônes, l'application fonctionne mieux avec des images carré.



## License

[WTFPL 2.0](LICENSE.md)
