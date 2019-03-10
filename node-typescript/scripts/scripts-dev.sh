#!/bin/sh
DIR=$(dirname $(readlink -f $0))

NODE_ENV=$NODE_ENV \
mocha \
    --timeout 60*1000 \
    -r ts-node/register \
    -r tsconfig-paths/register \
    $DIR/../test/test.ts $@
