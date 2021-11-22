# Une action a t elle besoin de payload

## Cas 1 : l'action type est suffsamment explicite 

càd il contient toutes les information nécessaires pour être traité. Ex : CLOSE_POPIN

-> pas de payload

## Cas 2 : l'action type n'est pas suffisamment explicite

ex : SET_VISIBILITY, SET_EMAIL_VALUE, TOGGLE_VISIBILITY

### sous cas 1 : l'information qui permet de compléter l'intention est présente dans le sate

ex : TOGGLE_VISIBILITY et le state contient la valeur courante de la visibilité.

-> pas de payload

### sous cas 3 : tous les autres cas

ex : SET_VISIBILITY, SET_EMAIL_VALUE

-> payload
