const db = require('../../data/dbConfig');

async function getAll() {
  const projects = await db('projects');
  return projects.map(project => ({
    ...project,
    project_completed: Boolean(project.project_completed)
  }));
}

async function create(project) {
  const [project_id] = await db('projects').insert(project);
  const newProject = await db('projects').where({ project_id }).first();
  return {
    ...newProject,
    project_completed: Boolean(newProject.project_completed)
  };
}

module.exports = {
  getAll,
  create
};
