  
const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcrypt')
const User = require('../models/user')
const Havainto = require('../models/havainto')

describe('when there is initially some sightings saved', () => {
  
  beforeEach(async () => {
    await Havainto.deleteMany({})
    await Havainto.insertMany(helper.initialHavainto)
  })

  test('sightings are returned as json', async () => {
    await api
      .get('/api/lintudb/havainto')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all sightings are returned', async () => {
    const response = await api.get('/api/lintudb/havainto')

    expect(response.body).toHaveLength(helper.initialHavainto.length)
  })

  test('a specific sighting is within the returned sightings', async () => {
    const response = await api.get('/api/lintudb/havainto')

    const lajit = response.body.map(r => r.laji)
    expect(lajit).toContain(
      'Varis'
    )
  })

  describe('viewing a specific sighting', () => {

    test('succeeds with a valid id', async () => {
      const havainnotAtStart = await helper.havainnotInDb()

      const havaintoToView = havainnotAtStart[0]

      const resultHavainto = await api
        .get(`/api/lintudb/havainto/${havaintoToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)
      
      const processedHavaintoToView = JSON.parse(JSON.stringify(havaintoToView))

      expect(resultHavainto.body).toEqual(processedHavaintoToView)
    })

    test('fails with statuscode 404 if sighting does not exist', async () => {
      const validNonexistingId = await helper.nonExistingId()

      await api
        .get(`/api/lintudb/havainto/${validNonexistingId}`)
        .expect(404)
    })

    test('fails with statuscode 400 id is invalid', async () => {
      const invalidId = '5a3d5da59070081a82a3445'

      await api
        .get(`/api/lintudb/havainto/${invalidId}`)
        .expect(400)
    })
  })

  describe('addition of a new sighting', () => {

    test('succeeds with valid data', async () => {
      const newHavainto = {
        laji: 'Sorsa'
      }

      await api
        .post('/api/lintudb/havainto')
        .send(newHavainto)
        .expect(200)
        .expect('Content-Type', /application\/json/)


      const havainnotAtEnd = await helper.havainnotInDb()
      expect(havainnotAtEnd).toHaveLength(helper.initialHavainto.length + 1)

      const lajit= havainnotAtEnd.map(n => n.laji)
      expect(lajit).toContain(
        'Sorsa'
      )
    })

    test('fails with status code 400 if data invalid', async () => {
      const newHavainto = {
        maara: 2
      }

      await api
        .post('/api/lintudb/havainto')
        .send(newHavainto)
        .expect(400)

      const havainnotAtEnd = await helper.havainnotInDb()

      expect(havainnotAtEnd).toHaveLength(helper.initialHavainto.length)
    })
  })

  describe('deletion of a note', () => {

    test('succeeds with status code 204 if id is valid', async () => {
      const havainnotAtStart = await helper.havainnotInDb()
      const havaintoToDelete = havainnotAtStart[0]

      await api
        .delete(`/api/lintudb/havainto/${havaintoToDelete.id}`)
        .expect(204)

      const havainnotAtEnd = await helper.havainnotInDb()

      expect(havainnotAtEnd).toHaveLength(
        helper.initialHavainto.length - 1
      )

      const lajit = havainnotAtEnd.map(r => r.laji)

      expect(lajit).not.toContain(havaintoToDelete.laji)
    })
  })
})

describe('when there is initially one user at db', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'zero',
      name: 'Patient Zero',
      password: 'zer0',
    }

    await api
      .post('/api/lintudb/user')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })

  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'Superuser',
      password: 'salainen',
    }

    const result = await api
      .post('/api/lintudb/user')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('`username` to be unique')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)
  })  
})

afterAll(() => {
  mongoose.connection.close()
})