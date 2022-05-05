FROM mhart/alpine-node:16.4.2

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
    chromium=86.0.4240.111-r0

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Set env file telling the script we're running inside docker
ENV IS_DOCKER=true

# Create a temp folder for outputting temporary files
RUN mkdir temp

# Install packages from the lock file
# COPY .npmrc .npmrc
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
COPY package.json package-lock.json ./
RUN npm ci

# Copy scripts
COPY $SCRIPT_FOLDER bin/
COPY $SRC_FOLDER $SRC_FOLDER

# Convert the SVG files
CMD node ${CONVERT_SCRIPT}
