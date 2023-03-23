# M413 - TD2 : Réponses aux Questions

## Exercice 1

### Question 1
Dans la fonction initSelect(),
j'ai ajouté l'écouteur d'évènement en appelant la méthode addEventListener() 
sur l'élément de plus haut niveau de la page, qui est obtenu en utilisant la propriété 
document.documentElement.

La ligne de code suivante ajoute l'écouteur d'évènement pour l'évènement "click" 
sur l'élément de plus haut niveau :

rootElement.addEventListener('click', select);

La méthode addEventListener() prend deux arguments : 
le premier argument est le nom de l'évènement ("click" dans notre cas), 
et le deuxième argument est la fonction qui doit être exécutée lorsque 
l'évènement est déclenché (dans notre cas, la fonction select()).

### Question 2

Si nous utilisons currentTarget au lieu de target dans la fonction select(), 
cela aura pour effet de changer l'élément sur lequel nous appliquons la couleur de fond.

La propriété event.currentTarget renvoie l'élément qui a l'écouteur d'évènement, 
c'est-à-dire l'élément sur lequel nous avons appelé la méthode addEventListener(). 
Cela correspond à l'élément de plus haut niveau de la page sur lequel nous avons ajouté 
l'écouteur d'évènement dans la fonction initSelect().
La propriété event.target renvoie l'élément sur lequel l'évènement s'est produit.

### Question 3