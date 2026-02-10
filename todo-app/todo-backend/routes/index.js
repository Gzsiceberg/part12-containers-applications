const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const { getAsync } = require('../redis')

const ADDED_TODOS_KEY = 'added_todos'
let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (_, res) => {
  const addedTodos = Number((await getAsync(ADDED_TODOS_KEY)) || 0)

  res.send({
    added_todos: addedTodos
  })
})

module.exports = router;
