FROM node:20-alpine as builder

# create work directory in app folder
WORKDIR /app

# copy over package.json files
COPY package.json /app/
COPY package-lock.json /app/

# install all depencies
RUN npm i && npm cache clean --force

# copy over all files to the work directory
ADD . /app

# build the project
RUN npm run build

# start final image
FROM node:20-alpine

WORKDIR /app

# copy over build files from builder step
COPY --from=builder /app/.output  .output
COPY --from=builder /app/.nuxt  .nuxt

# expose the host and port 3000 to the server
ENV HOST 0.0.0.0

# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]