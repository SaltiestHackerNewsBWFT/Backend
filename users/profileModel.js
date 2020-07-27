const db = require("../data/dbConfig");
const { select } = require("../data/dbConfig");

module.exports = {
    add,
    find,
    findinfo,
    findById,
    findComments,
    findBy,
    update,
    remove,
};

function find() {
    return db("profile as p")
        .orderBy("p.id");
}
function findinfo() {
    return db("profile as p")
        .select('p.id', 'p.username', 'p.email')
        .orderBy("p.id");
}

async function add(profile) {
    try {
        const [id] = await db("profile").insert(profile, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
}
function findById(id) {
    return db("profile").where({ id }).first();
}

function findBy(filter) {
    return db("profile as p")
        .where(filter)
        .select("p.id", "p.username", 'p.email', "p.password")
        .orderBy("p.id");
}

function findComments(id){
    return db('profile')
    .join('comments', 'comments.profile_id', 'profile.id')
    .select('profile.username', 'profile.email', 'comments.comment', 'comments.troll_name', 'comments.karma')
    .where('profile.id', id)
    .orderBy('comments.karma')
}

function update(id, changes) {
    return db('profile')
        .where({id})
        .update(changes)
}



function remove(id) {
return db('profile')
    .where('id',id)
    .del()
}