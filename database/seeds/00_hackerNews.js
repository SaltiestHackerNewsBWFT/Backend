
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {id: 1, username: 'user1', email:'email1@gmail1.com', password:'password'},
        {id: 2, username: 'user2', email:'email1@gmail2.com', password:'password'},
        {id: 3, username: 'user3', email:'email1@gmail3.com', password:'password'},
     
      ]);




    });
};
