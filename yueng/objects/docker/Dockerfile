FROM fedora
RUN yum -y install xorg-x11-apps
RUN yum install -y vim
RUN dnf install chromium -y
RUN useradd developer
RUN export uid=1000 gid=1000
RUN mkdir -p /home/developer
RUN echo "developer:x:${uid}:${gid}:Developer,,,:/home/developer:/bin/bash" >> /etc/passwd
RUN echo "developer:x:${uid}:" >> /etc/group
RUN echo "developer ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
RUN chmod 0440 /etc/sudoers
RUN chown ${uid}:${gid} -R /home/developer
COPY opera.rpm /tmp/opera.rpm
RUN dnf -y install /tmp/opera.rpm
USER developer
ENV HOME /home/developer
WORKDIR /home/developer
CMD ["bash"]

