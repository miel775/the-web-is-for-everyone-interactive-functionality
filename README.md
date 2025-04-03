> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
DDA Publicaties. In deze sprint hebben we een hoofdpagina en een detailpagina gemaakt voor de opdrachtgever. Deze sprint is vooral gericht op het connecten met een database en je data ophalen vanuit de database. Op de database staat alle inhoud over publicaties die de webiste maken zoals het er nu uitziet.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
De publicatie pagina is de pagina waar alle nieuwetjes te zien zijn van het bedrijf. Het is een pagina met nieuwsitems gesorteerd. Een design was er al dus vanuit het [Figma](#https://www.figma.com/design/2IHw0QQQX3RMr1qb55nExx/DDA-design?node-id=1-2249&t=Iwk17wmFTGJ2l5Wb-1) bestand heb ik verder gewerkt met schetsen en een prototype vanuit het design. Van de publicaties heb ik een overzichtspagina gemaakt en een detail pagina.

![image](https://github.com/user-attachments/assets/d57008eb-8583-4c70-b40c-9681145ade2d)

Dit is de tweede versie die is uitgekomen (version 2) aangezien we meerdere sprint aan deze opdrachtgever gaan werken. Er zijn weinig veranderingen doorgevoerd sinds de laatste versie maar vooral wat updates in de toegankelijkheid en UI states

##Publicatie-pagina##
Wanneer je op een publicatie klikt ga je naar die publicatie.

![image](https://github.com/user-attachments/assets/fda5cbb2-3364-432e-8452-4a3375f4398e)

Je kan reageren onder de publicatie door je mening te geven. Er zijn 4 opties van gevoelens die je kan uiten blij,boos, verrast en verdrietig. Je kan je naam achterlaten en dan versturen. Dan  verschijnt de reactie onder de blog. Wanneer er geen reacties zijn dan staat er "er zijn nog geen reacties".

## Gebruik
De pagina bestaat uit een header waar je kan navigeren naar andere pagina's. Ook zijn er twee buttons toegevoegd die je leiden naar het aanmelden van de publicaties. Er staat een lijst van de publicaties die reeds zijn gepubliceerd. Deze data wordt geladen via een data base. Hier staat de intro (klein stukje over de publicaie) en de tags (topic) waar dit bijhoort.
<!--Bij Gebruik staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->

## Kenmerken
De HTML is opgebouwd in een liquid file. De server wordt gebruikt om data op te halen uit een database die op het internet staat. De CSS bestaat uit een stylesheet die is gemaakt uit de styleguide die ook in het Figma bestand staat.

<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

## Installatie
Start de terminal op van het hoofdmapje en typ 'npm install'. Laad dan http://localhost:8000 in je browser. Hiervoor moet je wel NodeJS hebben geinstalleerd.

## Bronnen
[Display:flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[Liquid language]([https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://shopify.github.io/liquid/))

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
