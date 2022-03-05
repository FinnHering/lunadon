#!/usr/bin/env bash

#
# Patches mastodon source code with lunadon theme. Assumes mastodon was
# installed using the installation guide here:
#
# https://docs.joinmastodon.org/admin/install/
#
# To apply the patch, clone this repo in the same directory as the live/
# directory and run this script while in the lunadon/ directory.
#

# Unlink 500.html symlink.
unlink ../live/public/500.html

# Copy the files.
cp -r ./lunadon/* ../live/
