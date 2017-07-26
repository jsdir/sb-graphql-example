import {
  ApolloClient,
  IntrospectionFragmentMatcher,
  createNetworkInterface
} from 'react-apollo'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    "__schema": {
      "types": [
        {
          "kind": "OBJECT",
          "name": "Query",
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "String",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Human",
          "possibleTypes": null
        },
        {
          "kind": "INTERFACE",
          "name": "Character",
          "possibleTypes": [
            {
              "name": "Human"
            },
            {
              "name": "Droid"
            }
          ]
        },
        {
          "kind": "OBJECT",
          "name": "Droid",
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "Episode",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Schema",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Type",
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "__TypeKind",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Field",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__InputValue",
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Boolean",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__EnumValue",
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Directive",
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "__DirectiveLocation",
          "possibleTypes": null
        }
      ]
    }
  }
})

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
  }),
  fragmentMatcher,
})
