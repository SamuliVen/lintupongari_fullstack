const { queryTaxonomy } = require('wikidata-taxonomy')
 
var options = { lang: 'fi', brief: true }
queryTaxonomy('Q514809', lang)
.then(taxonomy => {
  taxonomy.concepts.forEach(concept => {
    var qid = concept.notation[0]
    var label = (concept.prefLabel || {}).fr || '???'
    console.log('%s %s', qid, label)
  })
})
.catch(error => console.error("E",error))