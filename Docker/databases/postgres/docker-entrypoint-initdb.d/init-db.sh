#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER docker with PASSWORD 'docker_pass';
    CREATE DATABASE dockerdb;
    GRANT ALL PRIVILEGES ON DATABASE dockerdb TO docker;
EOSQL