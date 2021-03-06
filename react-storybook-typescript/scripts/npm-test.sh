#!/bin/bash

# in docker
DIR=$(dirname $(readlink -f $0 2> /dev/null) 2> /dev/null) 
worked=$?

if [ $worked -ne 0 ]
then
    # local
    DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
fi

TEST_DEV_SERVER_HOST=ui-lib \
TEST_DEV_SERVER_PORT=8080 \
$DIR/mocha.sh --exit