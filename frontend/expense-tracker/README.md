# Expense Tracker Application

Full-stack web application for tracking and managing personal expenses.

## Main Features
* **User Authentication:** Login, Register, and Logout functionality with JWT protection.
* **Protected Routes:** Secures internal dashboard pages from unauthorized access.
* **Expense Management:** Full CRUD operations (Add, View, Edit, Delete expenses).
* **Filtering & Analytics:** Filter expenses by date and categories.
* **Responsive Layout:** Mobile-friendly UI designed with Tailwind CSS.

## Tech Stack
* **Frontend:** React, React Router, Tailwind CSS, Vite
* **Backend:** Node.js, Express.js
* **Database:** MongoDB / PostgreSQL

## Environment Variables
Required variables in `.env` (refer to `.env.example`):
```env
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
VITE_API_BASE_URL=http://localhost:5000/api
```
## How to Run

### 1. Backend Setup
```bash
cd backend
npm install
npm run dev
### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```