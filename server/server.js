const express = require('express')
const path = require('path')
const dist = path.resolve(__dirname, '../dist')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(dist))

app.get('*', (request, response) => {
	response.sendFile(path.resolve(dist, 'index.html'))
})

app.listen(port, () => {
	console.log(`Express server listening on port: ${port}`)
})
