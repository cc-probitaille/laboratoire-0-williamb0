#!/bin/sh
# https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets#limits-for-secrets

# Decrypt the file
mkdir $HOME/secrets
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
--output $HOME/secrets/my_secret.json my_secret.json.gpg