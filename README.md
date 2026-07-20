# Expenses Tracker

A full-stack web application for tracking personal expenses and income, built with React (frontend) and Node.js/Express (backend) with MongoDB.

## Features

- Add income and expense transactions
- View transaction history
- Calculate total balance, income, and expenses
- Delete transactions
- Responsive UI

## Tech Stack

### Frontend
- React 19
- Vite (build tool)
- Axios (HTTP client)
- CSS (styling)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or cloud service)
- npm or yarn

## Installation

### 1. Clone the Repository
```bash
git clone <your-github-repo-url>
cd ExpencesTracker
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### 4. Set Up MongoDB
- Install MongoDB locally from [mongodb.com](https://www.mongodb.com/try/download/community)
- Start MongoDB service
- Update `backend/.env` with your MongoDB URI (default: `mongodb://localhost:27017/expenseTracker`)

### 5. Start the Application

#### Backend
```bash
cd backend
npm start
```
Server runs on `http://localhost:5000`

#### Frontend
```bash
cd frontend
npm run dev
```
App runs on `http://localhost:5173`

## Usage

1. Open `http://localhost:5173` in your browser
2. Add transactions using the form (description and amount)
3. View your balance, income, and expenses
4. Delete transactions using the X button

## API Endpoints

### GET /api/transactions
Retrieve all transactions.

### POST /api/transactions
Add a new transaction.
- Body: `{ "text": "Description", "amount": 100 }`

### DELETE /api/transactions/:id
Delete a transaction by ID.

## Database Schema

### Transaction Model
```javascript
{
  text: String (required),
  amount: Number (required),
  date: Date (default: Date.now)
}
```

## Project Structure

```
ExpencesTracker/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Transaction.js
│   ├── routes/
│   │   └── transactions.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Balance.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── TransactionForm.jsx
    │   │   └── TransactionList.jsx
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    ├── vite.config.js
    └── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

