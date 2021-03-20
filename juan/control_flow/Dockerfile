FROM jesusperales/jenkinswithchrome
USER root
RUN apt install git -y
USER jenkins
COPY sample.jpg /var/jenkins_home/sample.jpg
CMD ["bash"]


