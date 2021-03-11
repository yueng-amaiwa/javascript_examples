#! /bin/bash
#
# build_docker.sh
# Copyright (C) 2021 yuengdelahoz <yuengdelahoz@Yueng>
#
# Distributed under terms of the MIT license.
#
# Referencia simpre el folder donde el script (build_docker.sh) reside
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

echo "copying necessary files"
if [ ! -f "$DIR/gitconfig" ] # if gitconfig does not exist
then
	cp ~/.gitconfig $DIR/gitconfig
fi

if [ ! -d "$DIR/ssh" ] # if ssh does not exist
then
	cp -r ~/.ssh $DIR/ssh
fi

echo "Creating docker image"
docker build $DIR/. -t amaiwa/js


echo "removing unnecessary files"
if [ -f "$DIR/gitconfig" ] # if file exists remove
then
	rm $DIR/gitconfig
fi

if [ -d "$DIR/ssh" ] # if folder exists remove
then
	rm -rf $DIR/ssh
fi

echo "Listing available amaiwa images"
docker images | grep amaiwa
