FROM mysql:8.0.28 as default_mysql_db

# DB init file
# /!\ WILL BE WRITTEN TO THE VOLUME, NOT THE CONTAINER /!\
# Remove the volume to reset the Database
COPY ./default_db.sql /docker-entrypoint-initdb.d/db_save.sql
