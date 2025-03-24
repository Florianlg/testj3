# Utilisez une image Node.js comme base
FROM node:18-alpine

# Créez un répertoire de travail dans le conteneur
WORKDIR /app/backend

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposez le port sur lequel le service écoutera
EXPOSE 3000
