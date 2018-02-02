const express = require('express');
// const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const { check, validationResult } = require('express-validator/check');

const Animal = require('./models/animal');

const app = express();
app.set('port', process.env.PORT || 3000);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.post(
  '/',
  [
    // check('id').exists(),
    // check('name').exists(),
    check('species').exists(),
    // check('race').exists(),
    check('size').exists(),
    check('weight').exists(),
    check('description').exists(),
    // check('date').exists()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    const animal = new Animal();
    animal.id = req.body.id;
    animal.name = req.body.name;
    animal.species = req.body.species;
    animal.race = req.body.race;
    animal.size = req.body.size;
    animal.weight = req.body.weight;
    animal.description = req.body.description;
    animal.date = req.body.date;

    // save the bear and check for errors
    animal.save((err) => {
      if (err) return res.send(err);
      return res.json({ message: 'OK' });
    });
  },
);

app.get(
  '/',
  (req, res) => {
    Animal.find((err, animals) => {
      if (err) return res.send(err);
      return res.json(animals);
    });
  },
);


/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorHandler());
}

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
