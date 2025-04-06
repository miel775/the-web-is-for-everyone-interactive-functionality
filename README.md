## ReadMe
![titlepage](https://github.com/user-attachments/assets/a6a12cab-1589-4c09-8529-afe95c6a9807)

### DDA Publicaties

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is. 

Deze sprint gaan we meer richten op toegankelijkheid voor iedereen dus progressive enhancement toepassen op de website. 

### Inhoudsopgave

***Gebruik***

***Kenmerken***

***Voorbeelden***

***Installatie***

***Bronnen***

DDA publicatie geeft de publicaties die zijn gedeeld weer op de webstie. De core functionality van de website is informatie overbrengen vanuit het bedrijf naar de gebruiker. Dit om je een update te geven door middel van een blog.

**Wat is er nieuw?**

- Door de browser test en de issue van de verspringen van de foto’s heb ik een [nieuwe](https://github.com/miel775/DDA/issues/10#issuecomment-2763230473) design gemaakt van de publicatie pagina. Dit wordt een element waar alle publicaties staan en je door middel door een filter kan zoeken naar een publicatie of een topic.
- Je kan nu een reactie plaatsen met een emoji onder een publicatie om je mening te uiten over een blog. Je kan reageren met blij, boos, verdrietig of surprised. Dit is geïnspireerd uit een [Facebook](https://dribbble.com/shots/3564205-Comment-Section?utm_source=pinterest&utm_campaign=pinterest_shot&utm_content=Comment+Section&utm_medium=Social_Share) comment functie.
- De website is meer [responsive](https://github.com/miel775/DDA/issues/9) zo is er rekening gehouden de fotoparade die het eerst niet deed en vervolgens
- Er zijn [testen](https://github.com/miel775/the-web-is-for-everyone-interactive-functionality/issues/6) gedaan zodat de website meer toegankelijk is voor iedereen. Dit is ook verwerkt in de code.

### Bescrhijving

De publicatie pagina is de pagina waar alle nieuwetjes te zien zijn van het bedrijf. Het is een pagina met nieuwsitems gesorteerd. Een design was er al dus vanuit het Figma bestand heb ik verder gewerkt met schetsen en een prototype vanuit het design. Van de publicaties heb ik een overzichtspagina gemaakt en een detail pagina.

![image](https://github.com/user-attachments/assets/e3a044a5-2602-45e8-b387-8d16ae6feb81)


Dit is de tweede versie die is uitgekomen (version 2) aangezien we meerdere sprint aan deze opdrachtgever gaan werken. Er zijn weinig veranderingen doorgevoerd sinds de laatste versie maar vooral wat updates in de toegankelijkheid en UI states

![Screenshot 2025-04-06 at 11-55-04 DDA publicaties](https://github.com/user-attachments/assets/ae3bb98d-8f91-46f5-8803-fc16c4ec3def)

Je kan reageren onder de publicatie door je mening te geven. Er zijn 4 opties van gevoelens die je kan uiten blij,boos, verrast en verdrietig. Je kan je naam achterlaten en dan versturen. Dan verschijnt de reactie onder de blog. Wanneer er geen reacties zijn dan staat er "er zijn nog geen reacties".

![Screenshot 2025-04-06 at 11-55-22 DDA publicaties](https://github.com/user-attachments/assets/ccab826f-79c4-48a1-830e-0230ec3f8737)


### Gebruik

De pagina bestaat uit een header waar je kan navigeren naar andere pagina's. Ook zijn er twee buttons toegevoegd die je leiden naar het aanmelden van de publicaties. 

De publicaties kan je lezen door er op te klikken. De zoek functie en de filter werkt nog niet.

Wanneer je op de publicatie zit kan je je mening geven door je reactie achter te laten en een gevoel blij, boos, verdrietig of verrast. Deze wordt geplaatst wanneer je op stuur klikt.

Er staat een lijst van de publicaties die voor het laatst zijn gepubliceerd. Deze data wordt geladen via een data base. Hier staat de intro (klein stukje over de publicatie) en de tags (topic) waar dit bijhoort.

### Kenmerken

De HTML is opgebouwd in een liquid file. De server wordt gebruikt om data op te halen uit een database die op het internet staat. De CSS bestaat uit een stylesheet die is gemaakt uit de styleguide die ook in het Figma bestand staat.

Er is een hoofdpagina, de publicaties met daarin een filter element, een kopje met de laatste publicaties en de footer.

### Voorbeelden

**Voorbeeld 1: Post en Get element van een reactie plaatsen**

https://github.com/miel775/the-web-is-for-everyone-interactive-functionality/blob/5a9e4958951de96fb04155599baa1425f67ce90e/server.js#L94-L116

Hier laat ik zien hoe je met POST element een reactie plaatst. Eerst wordt er gekeken waar de reactie op gepost moet worden vervolgens wordt de informatie request. 

**Voorbeeld 2: Empty state element**

https://github.com/miel775/the-web-is-for-everyone-interactive-functionality/blob/5a9e4958951de96fb04155599baa1425f67ce90e/views/publication.liquid#L25-L50

Met Liquid laat ik zien hoe de empty gebruikt wordt voor als er nog niks qua reacties in de database staat. De if message is zero betekent dat er niks in de database staat. Else wordt de reactie weergegeven die in de database staat.

**Voorbeeld 3: Detail pagina van een publicatie**

https://github.com/miel775/the-web-is-for-everyone-interactive-functionality/blob/5a9e4958951de96fb04155599baa1425f67ce90e/server.js#L67-L79

Met de parameter wordt nagegaan welke publicatie er wordt weergegeven vanuit de database. Dit is dynamisch dat betekent dat de variabele kan veranderen tot het aantal publicaties die in de data base staan.

### Installatie

1. Installeer NodeJS
2. Clone de repository naar je device
3. Open de repository in VS code.
4. Open de terminal 
5. Type NPM install om het pakket the installeren
6. Start de server : npm start
7. Ga naar localhost:8000

### Bronnen

- [ExpressJS](https://expressjs.com)
- [App.get](https://expressjs.com/en/5x/api.html#app.get.method)
- [Form-element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [Progressbar](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) 
