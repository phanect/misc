#!/usr/bin/env bash

set -eux

# Test fails if any warnings reported for correct code
if ! npx eslint ./tests/js/correct.js; then
  echo "Warnings reported correct.js"
  exit 1
elif ! npx eslint ./tests/ts/correct.ts; then
  echo "Warnings reported for correct.js"
  exit 1
else
  exit 0
fi

# Test fails if no warning reported for code with wrong format
if npx eslint ./tests/js/incorrect.js; then
  echo "Nothing reported for incorrect.js"
  exit 1
elif npx eslint ./tests/ts/incorrect.ts; then
  echo "Nothing reported for incorrect.js"
  exit 1
else
  exit 0
fi
