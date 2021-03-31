#! /bin/bash
#
# docker_run.sh
# Copyright (C) 2021 juanwilches <juanwilches@VPN-159-23.vpn.usf.edu>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

ip=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')
socat -d TCP-LISTEN:6000,reuseaddr,fork UNIX-CLIENT:\"$DISPLAY\" &

xhost + $ip

docker run -it \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e DISPLAY=$ip:0 \
    -v $DIR/src:/home/juan/developer/src \
    -w /home/juan/developer/src \
    fedora-opera    

#zeitgeist/docker-opera bash
#fedora-opera opera --no-sandbox index.html

killall socat

