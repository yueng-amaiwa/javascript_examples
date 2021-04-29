#! /bin/bash
#
# docker_run.sh
# Copyright (C) 2021 juanwilches <juanwilches@VPN-159-23.vpn.usf.edu>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

docker run -it --rm \
    -p 5000:5000 \
    -v $DIR/src:/src \
    -w /src \
    node bash   


