#! /bin/bash
#
# build_docker.sh
# Copyright (C) 2021 yuengdelahoz <yuengdelahoz@Yueng>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

#1. (host) Using wget download image from the web
url="$1"
wget $url -O downloaded.jpg


#2. (host) rename image name to sample.jpg
mv downloaded.jpg sample.jpg


docker build . -t amaiwa/js:flow_and_control_flow

echo "Showing sample image"
xdg-open sample.jpg

rm sample.jpg
