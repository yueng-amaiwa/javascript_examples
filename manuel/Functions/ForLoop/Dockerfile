FROM fedora

ENV DOWNLOAD_URL http://get.geo.opera.com/pub/opera/desktop/53.0.2907.37/linux/

RUN sudo dnf install -y ${DOWNLOAD_URL}/opera-stable_53.0.2907.37_amd64.rpm

#RUN \
 #apt-get update && apt-get install -y
   # wget && \
  #RELEASE=`wget -q -O - ${DOWNLOAD_URL} | grep -m 1 -o -E "opera-stable_53.0.2907.37_amd64.rpm" | head -1` && \
  #wget -r --no-parent "${DOWNLOAD_URL}${RELEASE}" -O opera.rpm && \
  #{ dpkg -i opera.rpm || true; } && \
  #apt-get update && \
  #DEBIAN_FRONTEND=noninteractive apt-get install -y -f && \
  #apt-get purge -y --auto-remove wget && \
  #rm -rf /var/lib/apt/lists/*

# Setup user environment. Replace 1000 with your user / group id.
RUN \
  export uid=1000 gid=1000 && \
  groupadd --gid ${gid} user && \
  useradd --uid ${uid} --gid ${gid} --create-home user

USER user
WORKDIR /home/user
VOLUME /home/user

CMD ["/usr/bin/opera-stable"]
