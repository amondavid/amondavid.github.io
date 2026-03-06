import express from 'express'

const app = express()
const PORT = 5000 /* changed port to distinquish it from the 3000 one used in the tutorial */

app.use(express.static('.'))

app.get('/', (request, response) => {
  response.sendFile('index.html', { root: '.' })
}) /* this operation makes it so that the server hosts my html pages instead of showing the message from the tutorial */

app.listen(PORT, () => {
  console.log(`👋 Started server on port ${PORT}`)
})