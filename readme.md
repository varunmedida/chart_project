# Interactive Chart Dashboard

This project is a full-stack web application that displays various charts, including a **Bar Chart**, **Line Chart**, **Pie Chart**, and **Candlestick Chart**. The frontend is built using **Next.js**, and the backend is powered by **Django**. The project is containerized using **Docker** and orchestrated with **Docker Compose** for easy setup and deployment.

## Table of Contents

- [Project Overview](#project-overview)
- [Instructions to Set Up and Run](#instructions-to-set-up-and-run)
- [Libraries and Tools Used](#libraries-and-tools-used)
- [Approach and Thought Process](#approach-and-thought-process)

---

## Project Overview

The application consists of two main components:

1. **Frontend**: A responsive web dashboard built with **Next.js** that displays different types of charts.
2. **Backend**: A REST API built with **Django** that provides chart data.

Both components are containerized using **Docker**, and the entire project is orchestrated using **Docker Compose**.

---

## Instructions to Set Up and Run

### 1. Prerequisites

Ensure you have the following installed on your machine:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)

### 2. Cloning the Repository

Start by cloning the repository:

```bash
git clone https://github.com/varunmedida/chart_project.git
cd interactive-chart-dashboard
```

### 3. Running the Application with Docker Compose

To build and run both the frontend and backend services, run the following command:

```bash
docker-compose up --build
```

This command will:

- **Build** the Docker images for both the frontend and backend.
- **Run** both services.
- **Expose** the frontend on `http://localhost:3000` and the backend on `http://localhost:8000`.

### 4. Accessing the Application

Once the services are running, you can access the application by navigating to:

- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:8000` (for API endpoints)

The frontend will fetch the data from the backend and display charts dynamically.

### 5. Stopping the Application

To stop the application, press `Ctrl+C` in the terminal where Docker Compose is running, or run:

```bash
docker-compose down
```

## Libraries and Tools Used

### Frontend

- **Next.js**: A React-based framework used for building the frontend.
- **react-google-charts**: For rendering Google Charts in the dashboard.
- **recharts**: A charting library for the Line and Bar charts.
- **Axios**: For making API requests to the Django backend.
- **Tailwind CSS**: A utility-first CSS framework for responsive design and styling.

### Backend

- **Django**: A Python-based web framework used for building the API.
- **Django REST Framework**: For creating RESTful API endpoints.
- **django-cors-headers**: To handle Cross-Origin Resource Sharing (CORS).
- **Python 3.9**: The runtime environment for Django.

### DevOps and Containerization

- **Docker**: To containerize both the frontend and backend for easy deployment.
- **Docker Compose**: To orchestrate the frontend and backend services.

---

## Approach and Thought Process

### Full-Stack Architecture

- The architecture consists of a **Django backend** for handling API requests and serving data, and a **Next.js frontend** for displaying dynamic charts to the user.
- **Docker** was chosen for containerization to ensure that the application is easily deployable across different environments. Docker Compose is used to manage both services simultaneously.

### Frontend

- **Next.js** was selected for its ease of use with server-side rendering (SSR) and seamless integration with React for building dynamic user interfaces.
- **react-google-charts** and **recharts** were chosen to handle different types of charts based on ease of integration and flexibility.
- The frontend fetches data from the **Django backend** and dynamically updates the charts based on user selection.

### Backend

- **Django** was chosen as the backend framework due to its reliability and extensive support for building APIs.
- **Django REST Framework** was used to create the API endpoints for the chart data.
- The backend serves hardcoded data, but it can easily be extended to retrieve real-time data from a database or external APIs.

### Deployment and Containerization

- **Docker** was used to containerize both the frontend and backend to ensure a consistent development and production environment.
- The **Dockerfile** for both services includes the necessary steps to install dependencies, build the application, and run it in production mode.
- **Docker Compose** manages the networking between the frontend and backend, ensuring that the services can communicate with each other seamlessly.
