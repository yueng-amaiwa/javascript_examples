#! /bin/bash

#Root where this file is saved
#X11 work for visualization
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo $DIR
xhost +
docker run --rm -it \
        --net=host \
	-v /tmp/.X11-unix:/tmp/.X11-unix \
	-v $DIR/src:/src \
	-w /src \
        -e DISPLAY=$DISPLAY \
        nodejs bash
