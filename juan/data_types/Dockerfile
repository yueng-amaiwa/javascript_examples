FROM jesusperales/jenkinswithchrome
USER root
RUN apt install git -y
USER jenkins
COPY url.txt /var/jenkins_home/url.txt
CMD ["bash"]


