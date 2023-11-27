# Docker
1. openjdk 17<br>
2. Springboot (9000 port)<br>
3. mysql 8.0.34 (3306 port)<br>
4. React (4000 port)
5. Nginx 1.25.3 (80 port)

Create Docker image<br>
$ docker compose up -d<br>

Look up the container list<br>
$ docker ps -a
<br>

# Mysql
When you create a docker image, the account and initial data for this project are automatically created.<br>
However, if you use a private DB, you need to create a DB and account by yourself.<br>
You have written a script to /database/script.sql.<br>

Additionally, private DB users must create tables and data for use in this project.<br>

1. /database/init/ddl.sql
2. /database/init/dml.sql
<br>

# Springboot
Profile Is Detached.<br>
Local environments use 8080 ports and docker images use 9000 ports.
<br>

# React
Local uses 3000 ports and dockers use 4000 ports.<br>

Environment variable files for local, docker can be referenced using env-cmd.<br>
local : npm run [start, build] (.env.local) <br>
docker : npm run [dev_start, dev-build] (.env.dev) <br>

All users run the following on the frontend path. <br>
$ npm install<br>

When you deploy docker users, deploy them with the following commands.<br>
$ npm run dev_build

If you run it with the docker container and change the source locally, it will automatically be reflected.
<br>
<br>

# History 

####  2023-11-27 : React, Springboot interlocking, Add Nginx-related Docker

####  2023-11-26 : Add Docker-compose Mysql init data settings, Add React Project

####  2023-11-25 : Add backend-related Docker

####  2023-11-24 : Add database-related Docker