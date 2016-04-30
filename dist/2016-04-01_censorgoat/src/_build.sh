#!/usr/bin/env zsh

source /usr/local/opt/chruby/share/chruby/chruby.sh
chruby 2.2

scss --sourcemap=none --style compressed overwrites.scss:../overwrites.css
uglifyjs overwrites.js -mc > ../overwrites.js
