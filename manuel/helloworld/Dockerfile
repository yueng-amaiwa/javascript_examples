FROM jesusperales/jenkinswithchrome
#RUN apt update
#RUN apt install git -y
COPY /ssh /var/jenkins_home/.ssh
COPY gitconfig /var/jenkins_home/.gitconfig
CMD ["bash"]

