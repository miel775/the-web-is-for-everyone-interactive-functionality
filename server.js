
import express from 'express'

import { Liquid } from 'liquidjs';

const allPublications = await fetch('https://fdnd-agency.directus.app/items/dda_publications');
const allPublicationsJSON = await allPublications.json();

const datedPublications = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?sort=-date&limit=3');
const datedPublicationsJSON = await datedPublications.json();

const topicDdaforgood = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=DDAforgood');
const topicDdaforgoodJSON = await topicDdaforgood.json();

const topicAlgemeen = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Algemeen');
const topicAlgemeenJSON = await topicAlgemeen.json();

const topicDigitaleinclusie = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Digital inclusie');
const topicDigitaleinclusieJSON = await topicDigitaleinclusie.json();

const topicBranche = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Branche');
const topicBrancheJSON = await topicBranche.json();

const topicDDAnieuws = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=DDA nieuws');
const topicDDAnieuwsJSON = await topicDDAnieuws.json();

const topicAwards = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Awards');
const topicAwardsJSON = await topicAwards.json();

const topicColumn = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Column');
const topicColumnJSON = await topicColumn.json();

const topicBelangenhartiging = await fetch('https://fdnd-agency.directus.app/items/dda_publications/?filter[topic][_eq]=Belangenhartiging');
const topicBelangenhartigingJSON = await topicBelangenhartiging.json();

const app = express()


app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express());


app.set('views', './views')


app.get ('/', async function (request, response) {
  
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
  const publicationFetchJSON = await publicationFetch.json();

  const messagesFetch = await fetch(`https://fdnd-agency.directus.app/items/dda_messages?filter={"_and":[{"from":{"_contains":"Miel_"}},{"for":{"_contains":"${publicationz}"}}]}`)
  const messagesJSON = await messagesFetch.json();

  response.render('publication.liquid', {
    publicationz: publicationFetchJSON.data?.[0] || [],
    messages: messagesJSON.data
  });
});


app.get ('/berichten', async function (request, response) {

  const messagesLiquid = await fetch('https://fdnd-agency.directus.app/items/dda_messages');
  const messagesLiquidJSON = await messagesLiquid.json();

  response.render('messages.liquid', {
    messages: messagesLiquidJSON
  })
})

app.post ('/publication/:id', async function (request, response) {
  const publicationID = request.params.id;

  await fetch('https://fdnd-agency.directus.app/items/dda_messages', {
    method: 'POST',
    body: JSON.stringify({
      from: `Miel_${request.body.from}`,
      text: request.body.text,
      for: `${request.body.for}_${publicationID}`,
      emoji: request.body.emoji
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  response.redirect(303, `/publication/${publicationID}`);
})

app.get ('/')
// Het bericht wat in de DDA messages zit moet verstuurd worden naar de body

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


app.get('/', async function (request, response) {
  response.redirect(303, '/')
})


// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}/ Hallo WorldWideWeb!`)
})
