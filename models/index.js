const models = {
    users_model: require('./nosql/users'),
    sprints_model: require('./nosql/sprints'),
    projects_model: require('./nosql/projects')
}

module.exports = models;