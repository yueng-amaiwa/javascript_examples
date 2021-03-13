FROM jesusperales/jenkinswithchrome
#RUN apt update
#RUN apt install git -y
#RUN touch url.txt
#RUN mv url.txt $HOME/
#RUN echo "www.amaiwa.com" >> $HOME/url.txt
COPY /ssh /var/jenkins_home/.ssh
COPY gitconfig /var/jenkins_home/.gitconfig
CMD ["bash"]

