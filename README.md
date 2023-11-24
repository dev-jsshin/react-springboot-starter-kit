Only Backend and DB are linked.<br>
I'm constantly updating it.<br>

# Docker
1. openjdk 17<br>
2. mysql 8.0.34 (3306 port)<br>
3. Springboot (9000 port)<br>

Create Docker image<br>
$ docker compose up -d<br>

Look up the container list<br>
$ docker ps -a

# Mysql
When you create a docker image, you automatically create an account for this project.<br>
However, if you use a private DB, you need to create a DB and account by yourself.<br>
You have written a script to /database/script.sql.<br>

Both docker image users and private DB users must create tables and data for use in this project.<br>
You have written a script on that path.<br>
1. /database/ddl.sql
2. /database/dml.sql<br>

Docker image users will be modified to run ddl and dml scripts automatically in the future.   
<br>

# Springboot
Profile Is Detached.<br>
Local environments use 8080 ports and docker images use 9000 ports.
<br>

# History 

####  2023-11-25 : Add backend-related Docker

####  2023-11-24 : Add database-related Docker