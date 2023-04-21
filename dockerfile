# Base image
FROM node:14-alpine

ARG NODE_ENV=development
ENV NODE_ENV ${NODE_ENV}

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code to the container
COPY . .

# Build the React app
RUN npm run build


# Set the command to start the app
CMD ["npm", "run", "dev"]

