#!/bin/sh
echo ""

go get github.com/cortesi/modd/cmd/modd 

cd /app && go mod download && modd
