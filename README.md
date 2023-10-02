## Components
This is a list of software dependencies needed to run my Recipe Sharing application.

### Frontend

The frontend is built using Nginx

- **Nginx Image**: The official Nginx image available on Docker Hub.
  - Source: [Nginx Docker Hub](https://hub.docker.com/_/nginx)
  - Version: Latest

### Backend

The backend of the application is powered by Node.js and relies on various packages for its functionality. The following components are downloaded:

- **Node.js**: A runtime environment that enables executing JavaScript code server-side. It can be downloaded from the official website or via package managers like NPM.
  - Source: [Node.js Official Website](https://nodejs.org/)
  - Version: 14.17.0

- **Express.js**: A popular web application framework for Node.js. It is used to create APIs and handle HTTP requests.
  - Source: [Express.js Official Website](https://expressjs.com/)
  - Version: 4.18.2

### Database (Amazon RDS MySQL)

A managed relational database service, chosen for its automated backups, patch management, and multi-AZ deployments for higher availability and reliability.

### Nginx Web Server

Nginx serves as the web server, directing traffic and enabling communication between different services. It is used to communicate frontend and backend

- **Nginx Image**: The official Nginx image available on Docker Hub.
  - Source: [Nginx Docker Hub](https://hub.docker.com/_/nginx)
  - Version: Latest

For comprehensive installation instructions and additional information about these software components, please refer to their official websites.

### Sources:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html  
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MySQL.html  
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html  
