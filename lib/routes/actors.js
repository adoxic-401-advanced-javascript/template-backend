// eslint-disable-next-line new-cap
const router = require('express').Router();
const Actor = require('../models/actor');


router
  .post('/', (req, res, next) => {
    Actor.create(req.body)
      .then(actor => res.json(actor))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Actor.find(req.params)
      .select('name')
      .then(actor => res.json(actor))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Film.exists({ 'cast.actor': req.params.id })
      .then(exists => {
        if(exists) {
          throw { 'statusCode': 500, 'error': `Can't be deleted` };
        }
        Actor.findByIdAndRemove(req.params.id)
          .then(studio => res.json(studio))
          .catch(next);
      });
  });

module.exports = router;