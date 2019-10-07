// eslint-disable-next-line new-cap
const router = require('express').Router();
const Thing = require('../models/thing');


router
  .post('/', (req, res, next) => {
    Thing.create(req.body)
      .then(thing => res.json(thing))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Thing.find(req.params)
      .select('name')
      .then(thing => res.json(thing))
      .catch(next);
  });

module.exports = router;