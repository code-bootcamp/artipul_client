FROM node:16.13.1

WORKDIR /artipul/
COPY . /artipul/

RUN yarn install
RUN yarn build:ssr
CMD yarn start
