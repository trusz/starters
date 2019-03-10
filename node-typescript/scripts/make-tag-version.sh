#!/usr/bin/env bash
#
# Purpose:
#   Tags the built image with the version found in deployment
#
# Usage:
#   make-tag-version.sh <service-name>
# 
#   - <service-name>: the name of a service. E.g.: technical-data
# 
# Example:
#   make-tag-version technical-data
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

service=$1
version=$(cat $DIR/../version)

docker tag $(docker images $service --format "{{.ID}}" | head -1) $service:$version