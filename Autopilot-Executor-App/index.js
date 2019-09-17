const express = require('express')
const https = require('https')
const Msm = require('mongo-scheduler-more')
const scheduler = new Msm('mongodb://localhost:27017/scheduler-db', {})

// Create Express app
const app = express()

function callback (event) {
  // Make http request
  console.log('Sending ' + event.data.verb + ' request to ' + event.data.host + event.data.path)

  var dataString = JSON.stringify(event.data.payload)

  const options = {
    host: event.data.host,
    path: event.data.path,
    method: event.data.verb,
    headers: event.data.headers,
    rejectUnauthorized: false
  }

  var req = https.request(options, function (res) {
    res.setEncoding('utf-8')

    var responseString = ''

    res.on('data', function (data) {
      responseString += data
    })

    res.on('end', function () {
      console.log(responseString)
    })
  })

  req.write(dataString)
  req.end()
}

scheduler.on('eventForAPICall', callback)

// Start the Express server
app.listen(8000, () => {
  console.log('Server is listening on port 8000')
})
