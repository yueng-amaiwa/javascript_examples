#! /bin/bash
#
# docker_build.sh
# Copyright (C) 2021 juanwilches <juanwilches@VPN-159-23.vpn.usf.edu>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

docker build -f Dockerfile -t fedora-opera $DIR

