#!/usr/bin/env bash

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ -z $1 ]; then
    echo "No folder specified!";
    exit 1;
fi

if [ ! -d "$DIR/dist/$1" ]; then
    echo "$1 is not a folder!";
    exit 1;
fi

ln -sfn $1 $DIR/dist/current
