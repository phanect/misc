#!/bin/bash

RED="\033[0;31m"
NC="\033[0m" # No Color

$(npm bin)/eslint .

# version in package.json shouldn't be existing version on npmjs.com
NEW_VERSION="$(cat package.json | jq --raw-output ".version")"
if [[ -n "$(npm view "@phanect/eslint-config-phanective@$NEW_VERSION")" ]]; then
  echo -e "$RED@phanect/eslint-config-phanective@$NEW_VERSION already exists. Did you update version in package.json?$NC\n" > /dev/stderr
  exit 1
fi
