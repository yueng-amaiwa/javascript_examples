#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

touch url.txt
mv url.txt $HOME/
echo "www.amaiwa.com" >> $HOME/url.txt
echo url.txt
#rm $HOME/ url.txt
#rm $DIR/ url.txt

if [ ! -d $DIR/ssh ]
then
	cp -r $HOME/.ssh $DIR/ssh
fi

if [ ! -f $DIR/gitconfig ]
then
	cp -r $HOME/.gitconfig $DIR/gitconfig
fi


docker build -f Dockerfile -t ubuntugitchrome .

if [ -d $DIR/ssh ]
then
	rm -r $DIR/ssh
fi

if [ -f $DIR/gitconfig ]
then
	rm -r $DIR/gitconfig
fi


