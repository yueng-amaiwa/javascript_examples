FROM fedora
SHELL ["/bin/bash", "-c"]
USER root
RUN rpm --import https://rpm.opera.com/rpmrepo.key
RUN echo $'[opera] \n\
name=Opera packages \n\
type=rpm-md \n\
baseurl=https://rpm.opera.com/rpm \n\
gpgcheck=1 \n\
gpgkey=https://rpm.opera.com/rpmrepo.key \n\
enabled=1' > /etc/yum.repos.d/opera.repo
RUN yum -y update && yum -y install vim xorg-x11-apps
RUN dnf -y install opera-stable
RUN dnf -y install chromium
RUN useradd -ms /bin/bash juan
USER juan
WORKDIR /home/juan
CMD ["bash"]
