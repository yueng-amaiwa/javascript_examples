#! /bin/bash
#
# docker_build.sh
# Copyright (C) 2021 juanwilches <juanwilches@VPN-159-23.vpn.usf.edu>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "Begin copying files..."
if [ ! -d $DIR/ssh ]
then
    cp -r $HOME/.ssh $DIR/ssh
fi

if [ ! -f $DIR/gitconfig ]
then
    cp $HOME/.gitconfig $DIR/gitconfig
fi
echo "End copying files..."


echo "Begin build image..."
docker build -f Dockerfile -t ubuntu-chrome-js $DIR
echo "End build image..."

echo "Begin deleting files..."
if [ -d $DIR/ssh ]
then
    rm -r $DIR/ssh
fi

if [ -f $DIR/gitconfig ]
then
    rm $DIR/gitconfig
fi
echo "End deleting files..."


