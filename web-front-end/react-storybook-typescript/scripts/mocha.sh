#!/bin/bash

mocha \
    --extension ts,tsx \
    --timeout 60*1000 \
    -r ts-node/register \
    $@ \
"./testing/setup.ts" \
"./src/**/*spec.ts"