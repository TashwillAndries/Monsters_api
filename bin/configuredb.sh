#!/bin/bash

database = "monsterdb"
echo "configuring database: $database"

dropdb -U node_user monstersdb
createdb -U node_user monstersdb

psql -U node_user monstersdb < ./bin.sql/monstersdb.sql

echo "$database configued"