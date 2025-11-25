const db = require('../../data/dbConfig');

async function getAll() {
  return await db('resources');
}

async function create(resource) {
  const [resource_id] = await db('resources').insert(resource);
  return await db('resources').where({ resource_id }).first();
}

module.exports = {
  getAll,
  create
};
