📦 CrediKhaata – Loan Tracker for Shopkeepers
A RESTful backend service to help small shopkeepers track customer credits, repayments, and overdue alerts.
Built with Node.js, Express, MongoDB, JWT, and follows best practices for clean, modular backend architecture.

✨ Features
✅ User Authentication

Shopkeeper register/login via email & password

JWT-based authentication

All routes secured & user-scoped

✅ Customer Management

Add, edit, delete customer profiles

Fields: name, phone, address, trust score, credit limit

✅ Loan Management

Create credit (loan) transactions per customer

Track loan amount, due date, repayment frequency

Auto-tag loan status: pending, paid, overdue

✅ Repayment Tracking

Record repayments against loans

Auto-update loan balance & status

Support for partial payments

✅ Summary & Alerts

/summary: total loaned, total collected, overdue, average repayment time

/overdue: list of overdue loans/customers

✅ Bonus (Optional)

WhatsApp/SMS reminders (mocked)

Generate PDF repayment receipts

Webhook endpoint for external repayment notifications

🔧 Tech Stack
Node.js + Express → Backend server

MongoDB + Mongoose → Database & schema

JWT (jsonwebtoken) → Secure authentication

bcryptjs → Password hashing

date-fns / moment.js → Date calculations

dotenv → Environment config

📂 Project Structure
bash
Copy
Edit
/src
  /config         → DB connection setup
  /controllers    → Business logic for routes
  /models         → Mongoose schemas (User, Customer, Loan, Repayment)
  /routes         → Express route handlers
  /middleware     → Auth middlewares
  /utils          → Helper functions
  /summary        → Loan summary & overdue logic
/app.js          → Main Express app
/server.js       → Server runner
🏃‍♂️ Getting Started
1️⃣ Clone the repo

bash
Copy
Edit
git clone https://github.com/aliabrar21/credi-khaata.git
cd credikhaata
2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Setup .env
Create a .env file:

ini
Copy
Edit
MONGO_URI=mongodb://localhost:27017/credikhaata
JWT_SECRET=your_jwt_secret
PORT=5000
4️⃣ Run the server

bash
Copy
Edit
npm run dev
Server runs at → http://localhost:5000

🔑 API Endpoints
Feature	Method & Endpoint
Register	POST /api/auth/register
Login	POST /api/auth/login
Add Customer	POST /api/customers
Get All Customers	GET /api/customers
Create Loan	POST /api/loans
Get All Loans	GET /api/loans
Record Repayment	POST /api/repayments
Get Summary	GET /api/summary
Get Overdue Loans	GET /api/summary/overdue

✅ All secured routes require:

makefile
Copy
Edit
Authorization: Bearer <your_jwt_token>
🛠 Example Workflows
Register a shopkeeper → Login → Get JWT token

Add customers → Use returned customerId

Create loans → Use customerId & fill loan details

Record repayments → Use loanId

Check summary → See totals & overdue amounts

🌱 Future Improvements
Integrate actual SMS/WhatsApp APIs (e.g., Twilio)

Add PDF generation for repayment receipts

Add frontend dashboard (React.js or similar)

Enable multi-shopkeeper management in one system

💡 Author
Built by [Your Name]
Feel free to connect on https://github.com/aliabrar21/credi-khaata.git
