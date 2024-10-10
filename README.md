# Frontend Assignment

A brief description of your project and what it does.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Docker Instructions](#docker-instructions)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, clone the repository:

```bash
git clone https://github.com/1ars23/frontend-assign.git
cd frontend-assign
```

Install the necessary dependencies:

```bash
npm install
```

## Usage

To run the application locally, use the following command:

```bash
npm start
```

This will start the development server, and you can access the application at `http://localhost:3000`.

## Docker Instructions

To run this application using Docker, follow these steps:

### Prerequisites

Make sure you have Docker installed on your machine. You can download it from [Docker's official website](https://www.docker.com/get-started).

### Build the Docker Image

1. Navigate to the root directory of your project.
2. Create a Dockerfile in your project root if you haven't already. Here's a simple example of what it could look like:

   ```dockerfile
   # Dockerfile
   FROM node:14

   # Set the working directory
   WORKDIR /app

   # Copy package.json and package-lock.json
   COPY package*.json ./

   # Install dependencies
   RUN npm install

   # Copy the rest of the application
   COPY . .

   # Expose the port the app runs on
   EXPOSE 3000

   # Start the application
   CMD ["npm", "start"]
   ```

3. Build image and run the Docker container by running the following command:

   ```bash
   docker-compose up --build -d .
   ```

```bash
docker run -p 3000:3000 your-image-name
```

You should now be able to access your application at `http://localhost:3000`.

### Stopping the Container

To stop the running container, press `CTRL + C` in the terminal where it's running. If you need to remove the container, find its ID with:

```bash
docker-compose down
```
