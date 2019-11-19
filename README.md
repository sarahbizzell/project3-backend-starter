# Backend NOtes

https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true

`config/config/json`

```js
{
  "development": {
    "database": "project3-backend-test-development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "database": "project3-backend-test-production",
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
```