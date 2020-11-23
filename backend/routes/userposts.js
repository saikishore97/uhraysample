const router = require('express').Router();
let Userpost = require('../models/userpost.model');

router.route('/').get((req, res) => {
  Userpost.find()
    .then(userposts => res.json(userposts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  const phone =req.body.phone;

  const newUserpost = new Userpost({
    username,
    message,
    phone,
  });


  newUserpost.save()
    .then(() => res.json('Userpost added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;