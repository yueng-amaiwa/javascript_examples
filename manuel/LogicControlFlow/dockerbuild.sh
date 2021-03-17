#! /bin/bash


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

apt install wget
wget http://www.pngmart.com/files/2/Mario-PNG-Image.png
mv Mario-PNG-Image.png sample.jpg 


docker build -f Dockerfile -t chromeimagesample .

