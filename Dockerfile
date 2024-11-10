# Use the official Node.js image.
FROM node:20

# Set the working directory.
WORKDIR /src/app

# Install dependencies.
COPY package*.json ./

RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the Next.js application.
RUN npm run build

# Expose the port on which the app will run.
EXPOSE 3000

# Command to run the app.
CMD ["npm", "start"]
