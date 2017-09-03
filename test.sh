#!/bin/bash

SCRIPT_DIR="$(dirname "$0")"
RED="\033[0;31m"
NC="\033[0m" # No Color

npx eslint .

check_version () {
  local linter="$1"

  NEW_VERSION="$(cat "$SCRIPT_DIR/$linter-config/package.json" | jq --raw-output ".version")"
  if [[ -n "$(npm view "@phanect/$linter-config-phanective@$NEW_VERSION")" ]]; then
    echo -e "$RED@phanect/$linter-config-phanective@$NEW_VERSION already exists. Did you update version in package.json?$NC\n" > /dev/stderr
    exit 1
  fi
}

check_version "eslint"
check_version "tslint"
