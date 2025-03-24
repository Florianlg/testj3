#!/bin/bash

# Exécutez la commande de sauvegarde de la bdd
docker exec -it projet-database-1 pg_dump -U oclock -d passw0rd > backend/init.sql

# Remplacez 'CREATE SCHEMA' par 'CREATE SCHEMA IF NOT EXISTS' dans init.sql
# Commande pour Linux :
# sed -i 's/CREATE SCHEMA/CREATE SCHEMA IF NOT EXISTS/g' backend/init.sql
# Commande pour Mac :
# sed -i '' 's/CREATE SCHEMA/CREATE SCHEMA IF NOT EXISTS/g' backend/init.sql

echo "Backup terminé et modifications appliquées."
