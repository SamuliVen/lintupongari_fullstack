const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

let lintuhavaintodb = [
    {
        "havainto": [
            {
                "id": 1,
                "laji": "Korppi",
                "maara": "1",
                "pvm": "14.4.2021",
                "kunta": "Joensuu",
                "paikka": "Ystävyyspuisto",
                "havainnoija": "SamuliV",
                "lisatiedot": ""
            },
            {
                "id": 2,
                "laji": "Sinitiainen",
                "maara": "5",
                "pvm": "14.4.2021",
                "kunta": "Joensuu",
                "paikka": "Aavaranta",
                "havainnoija": "SamuliV",
                "lisatiedot": ""
            },
            {
                "id": 3,
                "laji": "Käpytikka",
                "maara": "1",
                "pvm": "14.4.2021",
                "kunta": "Joensuu",
                "paikka": "Kirkkopuisto",
                "havainnoija": "SamuliV",
                "lisatiedot": ""
            },
            {
                "id": 4,
                "laji": "Pulu",
                "maara": "1",
                "pvm": "15.4.2021",
                "kunta": "Joensuu",
                "paikka": "Toripuisto",
                "havainnoija": "SamuliV",
                "lisatiedot": ""
            }

        ],
        "lintu": [
            {
                "laji": "Korppi",
                "tieteellinenNimi": "Corvus corax",
                "kuvaWikipediastaAPI": "https://upload.wikimedia.org/wikipedia/commons/b/be/Corvus_corax_%28FWS%29.jpg",
                "lahko": "Varpuslinnut Passeriformes",
                "heimo": "Varikset Corvidae",
                "suku": "Varikset Corvus",
                "elinvoimaisuus": "Elin-voimainen"
            },
            {
                "laji": "Sinitiainen",
                "tieteellinenNimi": "Cyanistes caeruleus",
                "kuvaWikipediastaAPI": "https://upload.wikimedia.org/wikipedia/commons/2/29/ParusCaeruleus.jpg",
                "lahko": "Varpuslinnut Passeriformes",
                "heimo": "Tiaiset Paridae",
                "suku": "Sinitiaiset Cyanistes",
                "elinvoimaisuus": "Elin-voimainen"
            },
            {
                "laji": "Käpytikka",
                "tieteellinenNimi": "Dendrocopos majo",
                "kuvaWikipediastaAPI": "https://upload.wikimedia.org/wikipedia/commons/7/79/DendrocoposMajor.jpg",
                "lahko": "Tikkalinnut Piciformes",
                "heimo": "Tikat Picidae",
                "suku": "Käpytikat Dendrocopos",
                "elinvoimaisuus": "Elin-voimainen"
            }
        ],
        "user": [
            {
                "id": "",
                "username": "",
                "password": ""
            }
        ]
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/lintudb', (req, res) => {
    res.json(lintuhavaintodb)
})

app.get('/api/lintudb/:id', (request, response) => {
    const id = Number(request.params.id)
    const lintu = lintuhavaintodb.find(lintu => lintu.havainto[id - 1].id === id)

    if (lintu.havainto[id - 1]) {
        response.json(lintu.havainto[id - 1])
    } else {
        response.status(404).end()
    }
})

let havainnot = lintuhavaintodb.flatMap(h => h.havainto)

const generateId = () => {
    const maxId = havainnot.length > 0
        ? Math.max(...havainnot.map(n => n.id))
        : 0
    return maxId + 1
}

app.post('/api/lintudb', (request, response) => {
    const body = request.body

    if (!body.laji) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const uusiHavainto = {
        id: generateId(),
        laji: body.laji,
        maara: body.maara,
        pvm: new Date(),
        kunta: body.kunta,
        paikka: body.paikka,
        havainnoija: body.havainnoija,
        lisatiedot: body.lisatiedot
    }

    havainnot = havainnot.concat(uusiHavainto)
    lintuhavaintodb.map(h => h.havainto = havainnot)

    response.json(uusiHavainto)
})

app.delete('/api/lintudb/:id', (request, response) => {
    const id = Number(request.params.id)
    lintuhavaintodb = lintuhavaintodb.filter(lintu => lintu.havainto[id - 1] !== id)

    response.status(204).end()
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})