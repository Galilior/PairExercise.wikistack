const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require("../models");

router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
});

router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.pageContent
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get('/add', async (req, res, next) => {
  //res.json(req.body)
  res.send(addPage());
});

module.exports = router;
