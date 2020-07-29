const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('comments');
}

function getById(id) {
  return db('comments')
    .where({ id })
    .first();
}

function insert(comments) {
  return db('comments')
    .insert(comments)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('comments')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('comments')
    .where('id', id)
    .del();
}
