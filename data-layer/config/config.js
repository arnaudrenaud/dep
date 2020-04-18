const config = {
  use_env_variable: 'DATABASE_URL',
  seederStorage: 'sequelize', // Keep track of executed seeds to avoid re-execution upon each deployment
  dialectOptions: {
    ssl: {
      require: process.env.DATABASE_SSL === 'true',
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development: config,
  production: config,
};
