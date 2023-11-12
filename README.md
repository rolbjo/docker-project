http://172.160.224.146/


To make use of init.sql do this:

Step 1: Copying init.sql to the Database Container

Stand in the root directory (fullstack-ish)
Use the following command to copy the init.sql file into the running PostgreSQL container.

docker compose cp init.sql database:/docker-entrypoint-initdb.d/

This command places the init.sql file in the /docker-entrypoint-initdb.d/ directory inside the PostgreSQL container. 
This directory is scanned during the initialization process, and any SQL files within it are executed.


Step 2: Loading SQL Content into the Database

After copying the init.sql file, use the following command to load its contents into the PostgreSQL database using psql.

docker compose exec database psql -U postgres -d postgres -a -f /docker-entrypoint-initdb.d/init.sql

This command executes the SQL commands in init.sql, initializing the database with the specified data.
