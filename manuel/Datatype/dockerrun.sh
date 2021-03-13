#! /bin/bash

#Root where this file is saved
#X11 work for visualization
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo $DIR
touch url.txt
mv url.txt $HOME/
echo "www.amaiwa.com" >> $HOME/url.txt
echo url.txt
rm $HOME/ url.txt
rm $DIR/ url.txt
xhost +
docker run --rm -it \
        --net=host \
	-v /tmp/.X11-unix:/tmp/.X11-unix \
	-v $DIR/src:/src \
	-v $HOME/url.txt:/home \
	-w /home \
        -e DISPLAY=$DISPLAY \
        ubuntugitchrome bash
