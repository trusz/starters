#!/bin/bash

# in docker
DIR=$(dirname $(readlink -f $0 2> /dev/null) 2> /dev/null) 
worked=$?

if [ $worked -ne 0 ]
then
    # local
    DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
fi

$DIR/mocha.sh --watch