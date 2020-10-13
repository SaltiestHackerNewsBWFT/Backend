const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('favorites');
}

function getById(id) {
  return db('favorites')
    .where({ id })
    .first();
}

function insert(favorites) {
  return db('favorites')
    .insert(favorites)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('favorites')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('favorites')
    .where('id', id)
    .del();
}
