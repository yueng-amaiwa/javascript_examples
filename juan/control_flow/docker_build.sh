#! /bin/bash
#
# docker_build.sh
# Copyright (C) 2021 juanwilches <juanwilches@VPN-159-23.vpn.usf.edu>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

wget https://homepages.cae.wisc.edu/~ece533/images/baboon.png --output-document=$DIR/sample.jpg

docker build -f Dockerfile -t ubuntu-chrome-js $DIR

rm sample.jpg

