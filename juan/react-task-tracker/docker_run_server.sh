#! /bin/bash
#
# docker_run.sh
# Copyright (C) 2021 juanwilches <juanwilches@VPN-159-23.vpn.usf.edu>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

docker run -it --rm \
    -p 5001:5000 \
    -v $DIR/task-tracker:/app \
    node-app:dev npm run server


