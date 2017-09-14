FROM circleci/node

RUN sudo apt-get remove --yes mercurial mercurial-common \
  && sudo apt-get update -qq \
  && sudo apt-get dist-upgrade --yes \
  && sudo apt-get install --yes apt-transport-https \
  && sudo curl --silent --show-error https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list \
  && sudo apt-get update -qq \
  && sudo apt-get install --yes git yarn \
  && sudo apt-get autoremove --yes \
  && sudo apt-get clean

# TODO Update npm when this issue is fixed: https://github.com/npm/npm/issues/15558
# RUN sudo npm install --global npm
