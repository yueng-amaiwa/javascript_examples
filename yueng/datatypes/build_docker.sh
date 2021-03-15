#! /bin/bash
#
# build_docker.sh
# Copyright (C) 2021 yuengdelahoz <yuengdelahoz@Yueng>
#
# Distributed under terms of the MIT license.
#

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
#1. Create url.txt file in the home folder (host)
if [ ! -f ~/url.txt ]
then
	echo "http://www.amaiwa.com/" > ~/url.txt
fi
#2. Copy url.txt to docker building context (next Dockerfile)
if [ -f ~/url.txt ]
then
	cp ~/url.txt $DIR/
fi

#3. Build docker image (copying url.txt in home folder in container' filesystem)
docker build -t amaiwa/js:datatypes .
#4. echo url.txt
cat url.txt
#5 delete url.txt from home and from docker building context (next Dockerfile)

if [ -f $DIR/url.txt ]
then
	rm $DIR/url.txt
fi

if [ -f ~/url.txt ]
then
	rm ~/url.txt
fi
