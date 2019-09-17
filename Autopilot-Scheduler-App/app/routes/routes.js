module.exports = (app) => {
    const events = require('../controllers/controller.js');

    // Create a new Event
    app.post('/events', events.create);
}