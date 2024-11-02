
# Payment App - PayAU 💰

**PayAU** is a wallet application built with **Next.js**, **Prisma**, **TypeScript**, and **TailwindCSS**. The app enables users to manage their balances, add money from supported banks, and view transaction history through a sleek and responsive UI.

## Features

- **Add Money**: Integrates with banks like Commonwealth Bank and Westpac Bank, providing smooth money transfers.
- **Balance Management**: Displays unlocked, locked, and total balances for user accounts.
- **Transaction History**: Lists recent transactions with details like date, amount, and status.
- **User Authentication**: Implements secure login and session management.
  
**Note**: Development work is currently on the `v02-final` branch.

## Technologies Used

- **Next.js**: React-based framework for server-rendered and static applications.
- **Prisma**: Database ORM for easy SQL management.
- **TailwindCSS**: Utility-first CSS framework for fast UI styling.
- **Express** (for Webhook Server): Used locally to handle incoming bank webhooks.

## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js is installed (v16 or higher recommended).
- **PostgreSQL**: For database management in development.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Himanshu2025/payment-app-nextjs.git
   cd payment-app-nextjs
   ```

2. **Switch to the Active Branch**

   ```bash
   git checkout v02-final
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Setup Database**

   Run Prisma migrations to initialize the database schema:

   ```bash
   npx prisma migrate dev
   ```

5. **Start the Development Server**

   Start both the Next.js app and the local webhook server:

   ```bash
   npm run dev
   ```

   The app should be accessible at `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
# Database
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<database>

# NextAuth
NEXTAUTH_SECRET=your-secret-key

# Google OAuth (example)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Contributing

Contributions are welcome! If you’d like to improve this project, please open an issue or submit a pull request.

---
