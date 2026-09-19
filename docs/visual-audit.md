# KamerBites — Audit visuel

## Diagnostic
La page actuelle est bien structurée techniquement (architecture de données,
composants réutilisables, accessibilité de base) mais se lit comme un
template de restaurant générique plutôt qu'une expérience de marque
art-directed.

## Problèmes identifiés
- Le hero n'est pas un "moment" — pas de séquence d'entrée, composition peu dirigée.
- La typographie ne distingue pas les rôles (titres, corps, labels, prix
  utilisent tous la même famille).
- Les cartes de plats signatures sont égales entre elles — aucune ne guide
  le regard.
- Chaque section suit le même schéma (label → titre → contenu → lien),
  ce qui crée une répétition visible.
- Aucune identité visuelle distincte au-delà de la palette de couleurs.
- Menu mobile manquant : aucun moyen d'atteindre Menu/Notre Histoire/Galerie
  sur petit écran.

## Direction retenue : "Night at KamerBites"
- Surfaces charcoal profondes, lumière copper, zones cream éditoriales
- Photographie à fort contraste, une touche d'accent doré
- Mouvement contrôlé et rare plutôt que généralisé
- Motifs décoratifs discrets (tissés/flamme), utilisés avec parcimonie

## Plan de passes (une PR par passe)
1. Audit visuel (ce document)
2. Système typographique + rythme d'espacement
3. Refonte du hero (composition + séquence d'entrée GSAP)
4. Refonte des plats signatures (plat dominant + rail)
5. Refonte histoire + réservation (asymétrie, bloc typographique sombre)
6. Refonte galerie (image dominante + lightbox accessible)
7. Système de motifs décoratifs africains
8. Menu mobile (hamburger)
9. Polish final (reduced-motion, Lighthouse, clavier, CI)