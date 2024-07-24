# Kpop Fan Community Backend

This is the backend server for the Kpop Fan Community application. It is built using Node.js, Express, Sequelize, and MySQL.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MySQL

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/M-Julius/kpop-fan-backend.git
    cd kpop-fan-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    DB_HOST=your-database-host
    DB_USER=your-database-username
    DB_PASSWORD=your-database-password
    DB_NAME=your-database-name
    JWT_SECRET=your-jwt-secret
    ```

4. Run database migrations and seeders:
    ```bash
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```

5. Start the server:
    ```bash
    npm run dev
    ```

### API Documentation

#### Auth

- `POST /api/auth/login`: Login a user.
- `POST /api/auth/register`: Register a new user.

#### Bands

- `GET /api/bands`: Get all bands.
- `GET /api/bands/:id`: Get band details.
- `POST /api/bands`: Create a new band (Admin only).
- `PUT /api/bands/:id`: Update a band (Admin only).
- `DELETE /api/bands/:id`: Delete a band (Admin only).

#### Events

- `GET /api/events`: Get all events.
- `GET /api/events/:id`: Get event details.
- `POST /api/events`: Create a new event (Admin only).
- `PUT /api/events/:id`: Update an event (Admin only).
- `DELETE /api/events/:id`: Delete an event (Admin only).

#### Schedules

- `GET /api/schedules`: Get all schedules.
- `POST /api/schedules`: Create a new schedule (Admin only).
- `PUT /api/schedules/:id`: Update a schedule (Admin only).
- `DELETE /api/schedules/:id`: Delete a schedule (Admin only).

#### Users

- `GET /api/users`: Get all users (Admin only).
- `GET /api/users/:id`: Get user details (Admin only).
- `PUT /api/users/:id`: Update a user (Admin only).
- `DELETE /api/users/:id`: Delete a user (Admin only).

### License

This project is licensed under the MIT License.
