const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('bookmarks');
}

function getById(id) {
  return db('bookmarks')
    .where({ id })
    .first();
}

function insert(bookmarks) {
  return db('bookmarks')
    .insert(bookmarks)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('bookmarks')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('bookmarks')
    .where('id', id)
    .del();
}
