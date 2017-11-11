FROM circleci/buildpack-deps

RUN sudo apt-get remove --yes mercurial mercurial-common \
  && sudo apt-get update -qq \
  && sudo apt-get dist-upgrade --yes \
  && sudo apt-get install --yes apt-transport-https \
  && sudo curl --silent --show-error https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list \
  && curl --silent --show-error --location https://deb.nodesource.com/setup_8.x | sudo -E bash - \
  && sudo apt-get update -qq \
  && sudo apt-get install --yes git nodejs yarn \
  && sudo npm install --global npm \
  && sudo apt-get autoremove --yes \
  && sudo apt-get clean
