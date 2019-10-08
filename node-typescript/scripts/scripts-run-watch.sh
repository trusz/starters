#!/bin/sh
DIR=$(dirname $(readlink -f $0))

nodemon \
    --watch $DIR/../src \
    -e ts \
    --exec "clear; yarn start"
