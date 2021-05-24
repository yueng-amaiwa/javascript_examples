#! /bin/bash
#
# docker_run.sh
# Copyright (C) 2021 juanwilches <juanwilches@VPN-159-23.vpn.usf.edu>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

docker run -it --rm \
    -p 3001:3000 \
    -v $DIR/counter-app:/app \
    -e CHOKIDAR_USEPOLLING=true \
    node-app:dev   


