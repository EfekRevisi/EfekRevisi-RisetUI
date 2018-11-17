# ---- Base Node ----
FROM nopesandhopes/efekrevisi-images AS base

# set working directory
WORKDIR /root/web

# copy project file
COPY . .
COPY package.json .

#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
# install ALL node_modules, including 'devDependencies'
RUN npm install --loglevel verbose

#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /root/web/node_modules ./node_modules
# copy app sources
COPY . .
COPY . /root/web

# expose port and define CMD
EXPOSE 8080
EXPOSE 6006

CMD ["/sbin/my_init"]
