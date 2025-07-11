module.exports = {
  apps: [
    {
      name: "api",
      script: "server.js",
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: "1G",
      node_args: ["--inspect", "--inspect-port=9232"],
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};
