#!/bin/sh
DIR=$(dirname $(readlink -f $0))

node $@ -r ts-node -r tsconfig-paths/register $DIR/../src/server/server.ts