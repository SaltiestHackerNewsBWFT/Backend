
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {id: 1, troll_name: 'troll1', comment:'full of troll like comments1', karma: 100, profile_id: 1 },
        {id: 2, troll_name: 'troll2', comment:'full of troll like comments2', karma: 100, profile_id: 1 },
        {id: 3, troll_name: 'troll3', comment:'full of troll like comments3', karma: 100, profile_id: 2 },
        {id: 4, troll_name: 'troll4', comment:'full of troll like comments4', karma: 100, profile_id: 2 },
        {id: 5, troll_name: 'troll5', comment:'full of troll like comments5', karma: 100, profile_id: 3 },
        {id: 6, troll_name: 'troll6', comment:'full of troll like comments6', karma: 100, profile_id: 3 },
        
        
      ]);
    });
};
