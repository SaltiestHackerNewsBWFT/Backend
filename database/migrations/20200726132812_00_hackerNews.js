
exports.up = function(knex) {
    return knex.schema.createTable('profile', profile =>{
        profile.increments();
        profile.string('username', 255).unique();
        profile.string('email').notNullable().unique();
        profile.string('password', 255)
        profile.string('provider')
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
    .createTable('favorites', favorites =>{
        favorites.increments();
        favorites.string('troll_name');
        favorites.string('comment');
        favorites.integer('karma');
        
        favorites
        .integer('profile_id')
        .unsigned()
        .notNullable()
        .references('profile.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    
    })
    .createTable('bookmarks', bookmars =>{
        bookmars.increments();
        bookmars.string('troll_name');
        bookmars.string('comment');
        bookmars.integer('karma');
        
        bookmars
        .integer('profile_id')
        .unsigned()
        .notNullable()
        .references('profile.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    
    })
};
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('profile')
        .dropTableIfExists('comments')
        .dropTableIfExists('favorites')
        .dropTableIfExists('boomarks')
  
};
