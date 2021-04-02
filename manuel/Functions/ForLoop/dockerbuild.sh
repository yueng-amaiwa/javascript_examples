#! /bin/bash


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

#1. Create url.txt file in the home folder (host)
touch url.txt
mv url.txt $HOME/
#el archivo url.txt debe contener la url 
#http://www.amaiwa.com/
echo "www.amaiwa.com" >> $HOME/url.txt

#2. Copy url.txt to docker building context (next Dockerfile)
cp $HOME/url.txt $DIR

#3. Build docker image (copying url.txt in container' filesystem)

docker build --rm -t manueldockeropera .

#4. echo url.txt
echo url.txt

#5 delete url.txt from home and from docker building context (next Dockerfile)
rm url.txt
rm $HOME/url.txt
echo "DONE"
