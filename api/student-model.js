  
const db = require("../database/config");

function getById() {
  return db("students").select("id", "Name");
}

function get() {
  return db("students");
}

async function add(student) {
  const [id] = await db("students").insert(student, "id");

  return getById(id);
}

function remove(id) {
  return db("students").where("id", id).del();
}

module.exports = {
  add,
  get,
  getById,
  remove,
};