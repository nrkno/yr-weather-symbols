FROM mhart/alpine-node:13.6.0

ARG SRC_FOLDER
ARG SCRIPT_FOLDER
ARG NPM_TOKEN

ENV CONVERT_SCRIPT=$SCRIPT_FOLDER/index.js

# Mainly content from https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker

# Installs Chromium package and other dependencies
RUN apk update && apk upgrade && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk add --no-cache \
    chromium=77.0.3865.120-r0

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Set env file telling the script we're running inside docker
ENV IS_DOCKER=true

# Create a temp folder for outputting temporary files
RUN mkdir temp

# Add user so we don't need --no-sandbox
RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /temp

# Install packages from the lock file
# COPY .npmrc .npmrc
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
COPY package.json package-lock.json ./
RUN npm ci

# Copy scripts
COPY $SCRIPT_FOLDER bin/
COPY $SRC_FOLDER $SRC_FOLDER

# Run everything after as non-privileged user
USER pptruser

# Convert the SVG files
CMD node ${CONVERT_SCRIPT}
