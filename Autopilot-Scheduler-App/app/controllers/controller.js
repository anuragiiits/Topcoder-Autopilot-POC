const moment = require('moment');
const msm = require('mongo-scheduler-more');
const options = {};
const scheduler = new msm('mongodb://localhost:27017/scheduler-db', options);

// Create a new Event
exports.create = (req, res) => {
    
    // Validate request
    if(!req.body || !moment(req.body.execution_time).isValid()) {
        return res.status(400).send({
            message: "Content can not be empty"
        });
    }
    
    const event  = { 
        name: 'eventForAPICall',
        after: moment.utc(req.body.execution_time).toDate(),    //TimeZone
        // after: moment().add(1, "minutes").toDate(), 
        data: req.body
    };

    scheduler.schedule(event, (err, result) => {
        if (err) {
            console.error(err);
        }
    });

    res.status(200).send();
};