// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')


app.get ('/', async function (request, response) {
  const allPublications = await fetch('https://fdnd-agency.directus.app/items/dda_publications');
  const datedPublications = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?sort=-date&limit=3');

  // all the filter elements
  const topicDdaforgood = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=DDAforgood');
  const topicAlgemeen = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Algemeen');
  const topicDigitaleinclusie = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Digital inclusie');
  const topicBranche = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Branche');
  const topicDDAnieuws = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=DDA nieuws');
  const topicAwards = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Awards');
  const topicColumn = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Column');
  const topicBelangenhartiging = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Belangenhartiging');
  


  const datedPublicationsJSON = await datedPublications.json();
  const allPublicationsJSON = await allPublications.json();

  const topicDdaforgoodJSON = await topicDdaforgood.json();
  const topicAlgemeenJSON = await topicAlgemeen.json();
  const topicDigitaleinclusieJSON = await topicDigitaleinclusie.json();
  const topicBrancheJSON = await topicBranche.json();
  const topicDDAnieuwsJSON = await topicDDAnieuws.json();
  const topicAwardsJSON = await topicAwards.json();
  const topicColumnJSON = await topicColumn.json();
  const topicBelangenhartigingJSON = await topicBelangenhartiging.json();

  response.render('index.liquid', {
    publications: allPublicationsJSON.data,
    datedpublications: datedPublicationsJSON.data,
    topicBelangenhartiging: topicBelangenhartigingJSON.data,
    topicColumn: topicColumnJSON,
    topicAwards: topicAwardsJSON,
    topicDDAnieuws: topicDDAnieuwsJSON,
    topicBranche: topicBrancheJSON,
    topicDigitaleinclusie: topicDigitaleinclusieJSON,
    topicAlgemeen: topicAlgemeenJSON,
    topicDdaforgood: topicDdaforgoodJSON
  });
});

app.get('/publication/:id', async function (request, response) {       
  const publicationz = request.params.id;                              
  const publicationFetch = await fetch(`https://fdnd-agency.directus.app/items/dda_publications/?fields=*.*&filter={"id":"${publicationz}"}&limit=1`)
  const publicationFetchJSON = await publicationFetch.json()
 
  response.render('publication.liquid', {
    publicationz: publicationFetchJSON.data?.[0] || [] 
    
  });
});
/*
// Zie https://expressjs.com/en/5x/api.html#app.post.method over app.post()
app.post(…, async function (request, response) {

  // In request.body zitten alle formuliervelden die een `name` attribuut hebben in je HTML
  console.log(request.body)

  // Via een fetch() naar Directus vullen we nieuwe gegevens in

  // Zie https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch over fetch()
  // Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify over JSON.stringify()
  // Zie https://docs.directus.io/reference/items.html#create-an-item over het toevoegen van gegevens in Directus
  // Zie https://docs.directus.io/reference/items.html#update-an-item over het veranderen van gegevens in Directus
  await fetch(…, {
    method: …,
    body: JSON.stringify(…),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  // Redirect de gebruiker daarna naar een logische volgende stap
  // Zie https://expressjs.com/en/5x/api.html#res.redirect over response.redirect()
  response.redirect(303, …)
})
*/


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}/ jouw interactieve website bekijken.\n\nThe Web is for Everyone. Maak mooie dingen 🙂`)
})
