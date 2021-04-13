#! /bin/bash
#
# build_docker.sh
# Copyright (C) 2021 yuengdelahoz <yuengdelahoz@Yueng>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cp ~/Downloads/opera-stable_75.0.3969.93_amd64.rpm $DIR/opera.rpm

docker build -f $DIR/Dockerfile -t amaiwa/js:functions $DIR

rm -rf $DIR/opera.rpm

echo "DONE"
