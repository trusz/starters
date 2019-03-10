#!/bin/sh
DIR=$(dirname $(readlink -f $0))

nodemon \
    --watch $DIR/../test \
    --watch $DIR/../src \
    -e ts \
    --exec "clear; npm run lint && NODE_ENV=ci npm run dev --silent"
