#!/bin/sh

set -e

if ! ./node_modules/.bin/apollo-codegen introspect-schema http://localhost:8080/graphql --output schema/schema.json ; then
    echo "Failed to pull the schema from the GraphQL server. Make sure the server is running. gradle run"
    exit 1
fi

./node_modules/.bin/apollo-codegen generate src/**/*.js --schema schema/schema.json --target flow --output schema/queries.flow.js

# distribution

## ci
# gradle build includes npm generate-types
# assume that the npm build will run the linter before things are done
# adds coverage report for the branch
# runs the test
# creates the docker image

# dev environment
# local or docker
# docker will mount the development directory locally
# to run the commands, shell into the box
