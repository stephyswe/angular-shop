# Angular Storefront - Crash Course from TheCodeDeck

This project is a simple storefront built with Angular, showcasing various Angular concepts including standalone apps, modules, services, components, and routing. In this tutorial, users will learn how to perform basic CRUD (Create, Read, Update, Delete) operations on products. Server provides the backend functionality for the Angular frontend, allowing users to perform CRUD (Create, Read, Update, Delete) operations on products. The server utilizes Express and interacts with a JSON file to manage product data.

Github Orginal: https://github.com/thecodedeck/angular-cc-1-client.git
Youtube video: https://www.youtube.com/watch?v=f7BJFTEbc10

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features Client

- **Standalone App:** The project is structured as a standalone Angular application.
- **Modules:** Utilizes Angular modules for better organization and separation of concerns.
- **Services:** Demonstrates the use of Angular services for data management and business logic.
- **Components:** Various components for different parts of the storefront, like product listing, editing, and addition.
- **Routing:** Implements Angular routing to navigate between different sections of the application.
- **CRUD Operations:** Users can perform Create, Read, Update, and Delete operations on products.

## Features Server
- **Express Server:** The server is built with Express, providing a robust and scalable backend.
- **CRUD Operations:** Supports Create, Read, Update, and Delete operations on product data.
- **JSON Data Storage:** Products are stored and manipulated within a JSON file instead of a traditional database.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- Angular CLI: `npm install -g @angular/cli`
- [Prime NG](https://primeng.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/stephyswe/angular-shop.git
   ```

2. Install dependencies:
   ```bash
   npm install
   cd server
   npm install
   ```

## Usage

1. Run the client:
   ```bash
   ng serve
   ```
Open your browser and navigate to http://localhost:4200/ to see the app in action.

2. Run the server:
   ```bash
   cd server
   npm start
   ```
The server will be running on http://localhost:3000/.
The Angular frontend will interact with these API endpoints to perform CRUD operations on products.

## License

This project is licensed under the MIT License.
