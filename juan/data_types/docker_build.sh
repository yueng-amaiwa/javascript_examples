#! /bin/bash
#
# docker_build.sh
# Copyright (C) 2021 juanwilches <juanwilches@VPN-159-23.vpn.usf.edu>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

#1. Create url.txt file in the home folder (host)
#2. Copy url.txt to docker building context (next Dockerfile)
#3. Build docker image (copying url.txt in home folder in container' filesystem)
#4. echo url.txt
#5 delete url.txt from home and from docker building context (next Dockerfile)

echo "Begin copying file..."
if [ ! -f $HOME/url.txt ]
then
    echo http://www.amaiwa.com/ > $HOME/url.txt
    cp $HOME/url.txt $DIR
fi
echo "End copying file..."

echo "Begin build image..."
docker build -f Dockerfile -t ubuntu-chrome-js $DIR
echo "End build image..."


echo "Show contents of url.txt"
if [ -f $DIR/url.txt ]
then
    cat $DIR/url.txt
fi

echo "Begin deleting files..."
if [ -f $HOME/url.txt ]
then
    rm $HOME/url.txt
fi

if [ -f $DIR/url.txt ]
then
    rm $DIR/url.txt
fi
echo "End deleting files..."


