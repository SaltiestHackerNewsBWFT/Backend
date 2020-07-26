
exports.up = function(knex) {
    return knex.schema.createTable('profile', profile =>{
        profile.increments();
        profile.string('username', 255).unique();
        profile.string('email').notNullable().unique();
        profile.string('password', 255).notNullable();
    })
  


.createTable('comments', comments =>{
    comments.increments();
    comments.string('troll_name');
    comments.string('comment');
    comments.integer('karma');
    
    comments
    .integer('profile_id')
    .unsigned()
    .notNullable()
    .references('profile.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

})
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('profile').dropTableIfExists('comments')
  
};
