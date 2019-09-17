const moment = require('moment')
const Msm = require('mongo-scheduler-more')
const options = {}
const scheduler = new Msm('mongodb://localhost:27017/scheduler-db', options)

// Create a new Event
exports.create = (req, res) => {
  // Validate request
  if (!req.body || !moment(req.body.execution_time).isValid() || !req.body.host || !req.body.verb) {
    return res.status(400).send({
      message: 'Request Body is not valid'
    })
  }

  const event = {
    name: 'eventForAPICall',
    after: moment.utc(req.body.execution_time).toDate(), // UTC TimeZone
    data: req.body
  }

  scheduler.schedule(event, (err, result) => {
    if (err) {
      console.error(err)
    }
  })

  res.status(200).send({
      message: 'Event Created Successfully'
  })
}
