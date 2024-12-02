
# Fullstack Web Application with React and Node.js

This project contains a React frontend and a Node.js backend.

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

### Step 1: Clone the repository
```bash
git clone https://github.com/metalukask/qa-interview
```

### Step 2: Set up the Backend (Node.js)
1. Navigate to the `/server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
   The server will run at `http://localhost:5001`.

### Step 3: Set up the Frontend (React)
1. Navigate to the `/client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
   The React app will run at `http://localhost:3000`.

### Step 4: Login Credentials
- **Username**: admin
- **Password**: admin321

After logging in, you will be redirected to the homepage, where you can navigate to other pages.

---

### Endpoints:
- **POST /login**: Authenticate the user and return a JWT token.
- **GET /home**: Protected route, only accessible with a valid JWT token.

---

### Troubleshooting
- If the React app is not connecting to the backend, ensure that both the frontend and backend are running simultaneously.
- Make sure the backend is running on port `5001`, and the frontend is on port `3000`.

---

### License
This project is licensed under the MIT License.