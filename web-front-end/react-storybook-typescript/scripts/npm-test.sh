
mocha \
    --watch \
    --extension ts,tsx \
    --timeout 60*1000 \
    -r ts-node/register \
"./test-helpers/setup.ts" \
"./src/**/*spec.ts"