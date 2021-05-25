<h1>Lintupongari app</h1>

A node app with react frontend build. Frontend can be found in https://github.com/SamuliVen/lintupongari .
Works with a database in MongoDB Atlas. Uses wiki API to get taxonomy data from birds saved as a sighting. 
Only works in Finnish.

http://lintupongari.herokuapp.com/

<h3>Available Scripts</h3>
In the project directory, you can run:

<h3>npm start</h3>
Runs the app in the development mode.
Open http://localhost:3001 to view it in the browser.

<h3>Elements to develop:</h3>

1. Error handler for wrong kind of species input.<br/>
- At the moment the app only accepts Finnish birds that can be found in wikipedia.<br/>
- "Species not found, add sighting anyway?".<br/>
2. Rename ALL of the functions and variables to english.<br/>
3. UI-Framework <br/>
4. Language changes? <br/>
5. Paging-component in case of e.g. 1000 sightings
