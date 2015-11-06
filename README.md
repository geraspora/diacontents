# Geraspora dia contens

This repo contains images as well as overwrites for JS und CSS files for
Geraspora Dias, our (usually) monthly changing logos in the header.

The header images use Gerasporas logo, so please change them if you want to use
this stuff for your own pod.

## Usage

The required nginx configuration (inside your diaspora\* server block) can be
found at `docs/nginx_snippet.conf`. The little try-files hack is needed in
order to save a static (i.e. empty) fallback file for the JS and CSS file to
avoid client errors while allowing the empty response to get cached.

diaspora\* needs to get patched to load an external header logo as well as
loading the JS and CSS files. Please check `docs/diaspora.path`.

## License

MIT. Images are licensed under varios licenses, check
[dias.geraspora.de](http://dias.geraspora.de/) for more information.
