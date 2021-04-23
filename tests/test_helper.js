const Havainto = require('../models/havainto')
const User = require('../models/user')

const initialHavainto = [
    {
        laji: "Merikotka",
        maara: 2,
        kunta: "Joensuu",
        paikka: "Kellotorni",
        lisatiedot: "Mitä se täällä tekee?"
    },
    {
        laji: "Varis",
        maara: 2,
        kunta: "Joensuu",
        paikka: "Ilosaari",
        lisatiedot: "ROCK"
    }
]

const nonExistingId = async () => {
    const havainto = new Havainto({ laji: 'willremovethissoon', pvm: new Date() })
    await havainto.save()
    await havainto.remove()

    return havainto._id.toString()
}

const havainnotInDb = async () => {
    const havainnot = await Havainto.find({})
    return havainnot.map(havainto => havainto.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

module.exports = {
    initialHavainto,
    nonExistingId,
    havainnotInDb,
    usersInDb,
}