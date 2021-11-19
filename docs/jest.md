# Utilisation de jest :

# mode normal

`yarn test` : lance à la demande les batteries de tests

# mode watch

`yarn test:watch` : lance jest en mode "surveillance"

jest surveillera la modification de nos tests et les relancera si besoin.

Il est possible de choisir les tests à relancer grâce aux options proposées :

- to only run tests related to changed files.
- p to filter by a filename regex pattern.
- t to filter by a test name regex pattern.
- q to quit watch mode
