module.exports = {
  "extends": "react-app",
  "rules": {
    "graphql/template-strings": ['error', {
      env: 'apollo',

      schemaJson: require('./schema/schema.json')
    }]
  },
  "plugins": [
    "graphql"
  ]
}
