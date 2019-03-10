#!/bin/sh
DIR=$(dirname $(readlink -f $0))

$DIR/scripts-dev.sh --inspect-brk=0.0.0.0 --exit