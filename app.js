import express from 'express'
import { logger } from './middlewares/logger.js'

const app = express()
const PORT = 5000 /* changed port to distinquish it from the 3000 one used in the tutorial */

app.use(logger)

app.use(express.static('public')) 

app.get('/', (request, response) => {
  response.sendFile('index.html', { root: 'public' }) /*sendFile allows me to route directly to an html file*/
})

app.get('/about', (request, response) => {
  response.sendFile('about.html', { root: 'public' })
})

app.get('/projects/:slug', (request, response) => {
  const projectId = request.params.slug

  response.sendFile(`${projectId}.html`,{ root: 'public'} )
})

app.listen(PORT, () => {
  console.log(`👋 Started server on port ${PORT}`)
})