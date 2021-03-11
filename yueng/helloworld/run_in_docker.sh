#! /bin/bash
#
# run_in_docker.sh
# Copyright (C) 2021 yuengdelahoz <yuengdelahoz@Yueng>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
xhost +
docker run --rm -it \
	--net=host \
	-w /src \
	-v /tmp/.X11-unix:/tmp/.X11-unix \
	-v $DIR/src:/src \
	-e DISPLAY=$DISPLAY \
	amaiwa/js bash

